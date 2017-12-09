import React from 'react';
import styles from './AssetEditorItem.css';
import { connect } from 'react-redux';
import FreeAsset from './FreeAsset';
import ChargeAsset from './ChargeAsset';
import * as actions from '../../../actions/asseteditor';
import Store from '../../../store';
import { bindActionCreators } from 'redux';
import * as uiActions from '../../../actions/ui';
import PreviewImage from './PreviewImage';
import PreviewInfo from './PreviewInfo'
import update from 'react-addons-update'

class Previews extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cntData : [
                {cnt : 0},
                {cnt : 1}
            ],
            cntNum : 2
        };
    }
    render(){
        return(
            <div className = {styles.setting_third}>
                <div className = {styles.imagePreview_ScrollDiv}>
                    <div className = {styles.imagePreview_ScrollSmallDiv}>
                {this.state.cntData.map((content, i) => {
                   return(
                        <PreviewInfo cnt = {content.cnt} key = {i}/>
                 )})}
                     </div>
                 </div>
                    <button className = {styles.addButton} onClick = {(e)=>this.addFile(e)}>asdf</button>
            </div>
            );
    }
    addFile(e){
        var currentNum = this.state.cntNum++
        this.setState({
            cntData : update(
                this.state.cntData,
                {
                    $push : [{cnt : currentNum}]
                }
            )
        })
        this.props.setDomId(this.state.cntData);
        this.forceUpdate();
    }
}

var mapStateToProps = (state) => {
    return{
        Datas : state.asseteditor.cntData
    }
}

var mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...actions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Previews);
