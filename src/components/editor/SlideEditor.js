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
<<<<<<< HEAD
      if(this.props.visibleAssetStore)
        return (<AssetStore className={styles.modal}/>);
      else if(this.props.visibleAssetEditor)
        return (<AssetEditor className={styles.modal}/>);
      else if(this.props.visibleAccountDialog)
        return (<AccountDialog className={styles.modal}/>);
=======
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
>>>>>>> 67d28467ae314b53e1fdd5dab02dfb76446e7d41
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
<<<<<<< HEAD
    visibleSlideManager: state.ui.visibleSlideManager,
    visibleAssetStore: state.ui.visibleAssetStore,
    visibleAssetEditor: state.ui.visibleAssetEditor
=======
    dialog: state.ui.dialog,
    visibleSlideManager: state.ui.visibleSlideManager
>>>>>>> 67d28467ae314b53e1fdd5dab02dfb76446e7d41
  }
}

export default connect(mapStateToProps)(SlideEditor);
