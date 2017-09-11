import React from 'react';
import styles from './AssetEditorItem.css';
import FreeAsset from './FreeAsset';
import AssetSetting from './AssetSetting';
import ChargeAsset from './ChargeAsset';
class AssetEditorItem extends React.Component{
    render(){
        return(
          <div>
                <AssetSetting />
                <FreeAsset />
                {/* <ChargeAsset /> */}
          </div>  
        );
    }
}

export default AssetEditorItem;