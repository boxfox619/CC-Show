import React from 'react';
import AssetCreator from './asset_creator/AssetCreator';
import SlideContext from './context/SlideContext';
import AssetController from './asset_controller/AssetController';
import SlideManager from './slideManager/SlideManager';
import AssetStore from './assetStore/AssetStore';

import styles from './SlideEditor.css';
import { connect } from 'react-redux';


class SlideEditor extends React.Component{

  constructor(props){
    super(props);

    this.checkContextDisabled = this.checkContextDisabled.bind(this);
  }

  render(){
    let renderAssetStore = ()=>{
      if(this.props.visibleAssetStore)
        return (<AssetStore className={styles.modal}/>);
    }
    let contextDisabled = this.checkContextDisabled();
    return (
      <div className={styles.slideEditor}>
      <AssetCreator className={styles.assetCreator}/>
      <SlideManager className={styles.slideManager+' '+(this.props.visibleSlideManager?styles.show:'')}/>
      {renderAssetStore()}
        <div className={styles.contextWrap+' '+(contextDisabled?styles.disabled:'')}>
          <div className={styles.contextSpace}>
            <SlideContext className={styles.slideContext}/>
          </div>
        </div>
      <AssetController className={styles.assetController}/>
      </div>
    );
  }

  checkContextDisabled(){
    let check = false;
    if(this.props.visibleSlideManager||this.props.visibleAssetStore){
      check = true;
    }
    return check;
  }
}

const mapStateToProps = (state) => {
  return {
    visibleSlideManager: state.ui.visibleSlideManager,
    visibleAssetStore: state.ui.visibleAssetStore
  }
}

export default connect(mapStateToProps)(SlideEditor);
