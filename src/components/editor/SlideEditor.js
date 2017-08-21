import React from 'react';
import AssetCreator from './asset_creator/AssetCreator';
import SlideContext from './context/SlideContext';
import AssetController from './asset_controller/AssetController';
import SlideManager from './slideManager/SlideManager';

import styles from './SlideEditor.css';


class SlideEditor extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={styles.slideEditor}>
      <AssetCreator className={styles.assetCreator}/>
      <SlideManager className={styles.slideManager}/>
        <div className={styles.contextWrap}>
          <SlideContext className={styles.slideContext}/>
        </div>
      {/*<AssetController/>*/}
      </div>
    );
  }
}

export default SlideEditor;
