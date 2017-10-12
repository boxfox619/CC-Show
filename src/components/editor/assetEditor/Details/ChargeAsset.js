import React from 'react';
import styles from './AssetEditorItem.css';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/asseteditor';
import { bindActionCreators }from 'redux';
import * as uiActions from '../../../../actions/ui';
import domtoimage from 'dom-to-image';
import Store from '../../../../store';

import * as assetTypes from '../../../../assetTypes';
import Asset from '../../assets/Asset';

import axios from 'axios';

function filter (node) {
    return (node.tagName !== 'SELECTORLINE'&&node.tagName !== 'SELECTORDOT');
}

class ChargeAsset extends React.Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(){
        let assetName = this.props.assetName;
        assetName = String(assetName);        
        let source = this.props.htmlsource + this.props.csssource + this.props.jssource;
        let self = this;
        let thumbnail = this.props.previewImage
        
        axios.post('/store/simple/create', {name:assetName, source, thumbnail})
        self.props.toggleAssetStore();
    
      }
    render(){
        var node = this.props.image;
        console.log(node);
        return(
        <div className = {styles.AssetEditor_right}>
            <div className = {styles.AssetEditor_isAsset}>
                <div className = {styles.isAsset_Header}>
                    <span className = {styles.isAsset_titleText}>유효 에셋 라이센스 안내</span>
                </div>
                <div className = {styles.isAsset_Content}>
                </div>
            </div>

            <div className = {styles.AssetEditor_Process}>
                 <div className = {styles.isAsset_Header}>
                    <span className = {styles.isAsset_titleText}>유효 에셋 등록과정 안내</span>
                </div>
                <div className = {styles.isAsset_Content}></div>
            </div>

            <div className = {styles.AssetEditor_Process}>    
                <div className = {styles.isAsset_Header}>
                    <span className = {styles.isAsset_titleText}>판매자 이용약관 안내</span>
                </div>
                <div className = {styles.isAsset_Content}></div>
            </div>       
          
            <input type = "submit" className = {styles.AssetEditor_agreeButton} onClick = {this.submit} value = "해당 약관에 동의합니다." />
         
        </div>
        );
    }

   
}

var mapStateToProps = (state) => {
    return{
       assetName : state.asseteditor.title,
       htmlsource : state.asseteditor.htmlsource,
       csssource : state.asseteditor.csssource,
       jssource : state.asseteditor.jssource,
       image : state.asseteditor.image,
       previewImage : state.asseteditor.previewImage

    }
}

var mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...actions, ...uiActions}, dispatch );
}


export default connect(mapStateToProps, mapDispatchToProps)(ChargeAsset);