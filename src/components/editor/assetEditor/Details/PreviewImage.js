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
import Previews from './Previews';
import PreviewInfo from './PreviewInfo';

class PreviewImage extends React.Component{
    render(){
        return(           
            <div>
            <Previews />
            </div>
        );
    }
}


export default PreviewImage;