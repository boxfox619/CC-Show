import React from 'react';
import AssetCreator from './asset_creator/AssetCreator';
import SlideContext from './context/SlideContext';

import styles from './SlideEditor.css';


class SlideEditor extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={styles.slideEditor}>
      <AssetCreator className={styles.assetCreator}/>
        <div className={styles.contextWrap}>
          <SlideContext className={styles.slideContext}/>
        </div>
      </div>
    );
  }
}

export default SlideEditor;
