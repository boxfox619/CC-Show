import React from 'react';
import AssetCreator from './asset_creator/AssetCreator';
import SlideContext from './context/SlideContext';
import AssetController from './asset_controller/AssetController';
import SlideManager from './slideManager/SlideManager';

import styles from './SlideEditor.css';
import { connect } from 'react-redux';


class SlideEditor extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={styles.slideEditor}>
      <AssetCreator className={styles.assetCreator}/>
      <SlideManager className={styles.slideManager+' '+(this.props.visibleSlideManager?styles.slideManagerShow:'')}/>
        <div className={styles.contextWrap}>
          <div className={styles.contextSpace}>
            <SlideContext className={styles.slideContext}/>
          </div>
        </div>
      <AssetController className={styles.assetController}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visibleSlideManager: state.ui.visibleSlideManager
  }
}

export default connect(mapStateToProps)(SlideEditor);
