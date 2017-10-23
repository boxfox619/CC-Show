import React from 'react';
import styles from './Details/AssetEditorItem.css';
import FreeAsset from './Details/FreeAsset';
import AssetSetting from './Details/AssetSetting';
import ChargeAsset from './Details/ChargeAsset';

class AssetEditorItem extends React.Component{
    render(){

        return(
          <div className = {styles.content}>
                <AssetSetting />
          </div>  
        );
    }
}

export default AssetEditorItem;