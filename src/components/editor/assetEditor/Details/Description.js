import React from 'react';
import styles from './AssetEditorItem.css';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/asseteditor';
import Store from '../../../../store';
import { bindActionCreators } from 'redux';


class Description extends React.Component{
    render(){
        return(
        <div className = {styles.AssetEditor_description}>
            <div className = {styles.AssetEditor_topbar}>
                <span className = {styles.topbar_title}>부가설명</span>
            </div>
            <div className = {styles.AssetEditor_content}>
                <textarea cols = "107" rows = "50" className = {styles.description_content} onChange = {(e)=> this.contentHandler(e)} placeholder ="텍스트를 입력하세요." />
            </div>
        </div>  
        );
    }
    contentHandler(e){
        var content = e.target.value
        this.props.getContent(content);
    }
}

var mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...actions}, dispatch);
}

export default connect (undefined, mapDispatchToProps)(Description);