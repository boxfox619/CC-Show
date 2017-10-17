import React from 'react';
import styles from './AssetEditorItem.css';
import { connect } from 'react-redux';
import FreeAsset from './FreeAsset';
import ChargeAsset from './ChargeAsset';
import * as actions from '../../../../actions/asseteditor';
import Store from '../../../../store';
import { bindActionCreators } from 'redux';
import * as uiActions from '../../../../actions/ui';
import update from 'react-addons-update'
import PreviewImage from './PreviewImage';
import Previews from './Previews';

class PreviewInfo extends React.Component{
    render(){
        return(
            <div className = {styles.previewBox} id = {this.props.cnt} >
                {this.props.cnt}
                <input type = "file" className = {styles.inputFile} />
                <button className = {styles.inputButton}></button>
            </div>
        );
    }
    
}

export default PreviewInfo;