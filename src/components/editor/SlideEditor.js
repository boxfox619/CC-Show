import React from 'react';
import AssetCreator from './asset_creator/AssetCreator';
import SlideContext from './context/SlideContext';
import AssetController from './asset_controller/AssetController';
import SlideManager from './slideManager/SlideManager';
import AssetStore from './assetStore/AssetStore';
import AssetEditor from './assetEditor/AssetEditor';
import AccountDialog from './accountDialog/AccountDialog';

import { dialogs } from '../../actions/ui';

import styles from './SlideEditor.css';
import { connect } from 'react-redux';


class SlideEditor extends React.Component{

  constructor(props){
    super(props);

    this.checkContextDisabled = this.checkContextDisabled.bind(this);
  }

  render(){
    console.log(this.props.visibleAssetEditor);
    let renderDialogs = ()=>{
      if(this.props.dialog!=undefined){
        switch(this.props.dialog){
          case dialogs.ASSET_STORE:
            return (<AssetStore className={styles.modal}/>);
          case dialogs.ASSET_EDITOR:
            return (<AssetEditor className={styles.modal}/>);
          case dialogs.ACCOUNT_WITH_SNS:
            return (<AccountDialog className={styles.modal}/>);
        }
      }
    }
    let contextDisabled = this.checkContextDisabled();
    return (
      <div className={styles.slideEditor}>
      <AssetCreator className={styles.assetCreator}/>
      <SlideManager className={styles.slideManager+' '+(this.props.visibleSlideManager?styles.show:'')}/>
      {renderDialogs()}
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
    if(this.props.visibleSlideManager||this.props.dialog!=undefined){
      check = true;
    }
    return check;
  }
}

const mapStateToProps = (state) => {
  return {
    dialog: state.ui.dialog,
    visibleSlideManager: state.ui.visibleSlideManager
  }
}

export default connect(mapStateToProps)(SlideEditor);
