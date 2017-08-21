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
          <SlideContext className={styles.slideContext}/>
        </div>
      <AssetController/>
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
