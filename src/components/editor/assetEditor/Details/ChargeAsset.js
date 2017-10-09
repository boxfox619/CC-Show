import React from 'react';
import styles from './AssetEditorItem.css';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/asseteditor';
import { bindActionCreators }from 'redux';

class ChargeAsset extends React.Component{
    constructor(props){
        super(props);
        // this.submit = this.submit.bind(this);
    }
    // submit(){

    //     // let assetName = document.getElementsByClassName(styles.titleInput)[0].value;
    //     let assetName = state.asseteditor.title;
    //     let source = state.asseteditor.htmlsource + state.asseteditor.csssource + state.asseteditor.jssource;
    
    //     let node = document.getElementById('preview').childNodes[0];
    //     let self = this;
    //       domtoimage.toPng(node, {filter: filter})
    //         .then(function (dataUrl) {
    //           let thumbnail = dataUrl;
    //             axios.post('/store/simple/create', {name:assetName, source, thumbnail}).then(response => {
    //               self.props.toggleAssetStore();
    //             });
    //         })
    //         .catch(function (error) {
    //             console.error(error);
    //         });
    
    //   }
    render(){
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
          
            <button type = "submit" className = {styles.AssetEditor_agreeButton} > 해당 약관에 동의합니다 </button>
         
        </div>
        );
    }

   
}

var mapStateToProps = (state) => {
    return{
        assettitle : state.asseteditor.title
    }
}

var mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...actions}, dispatch );
}


export default connect(mapStateToProps, mapDispatchToProps)(ChargeAsset);