import React from 'react';
import AssetCreator from './asset_creator/AssetCreator';
import SlideContext from './context/SlideContext';
import AssetController from './asset_controller/AssetController';
import SlideManager from './slideManager/SlideManager';
import AssetStore from './assetStore/AssetStore';
import AssetEditor from './assetEditor/AssetEditor';
import AccountDialog from './accountDialog/AccountDialog';
import SlideShow from './slide_show/SlideShow'
import { dialogs, colorPicker } from '../../actions/ui';

import { SketchPicker } from 'react-color';
import * as assetsActions from '../../actions/assets';
import * as uiActions from '../../actions/ui';
import { bindActionCreators } from 'redux';

import styles from './SlideEditor.css';
import { connect } from 'react-redux';


class SlideEditor extends React.Component{

  constructor(props){
    super(props);

    this.checkContextDisabled = this.checkContextDisabled.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.handleBorderColor = this.handleBorderColor.bind(this);
    this.handleFillColor = this.handleFillColor.bind(this);
    this.handleTextColor = this.handleTextColor.bind(this);
  }

  render(){
    let kindsOfcolorPicker= () =>{
       if(this.props.colorPicker!=undefined){
         switch(this.props.colorPicker){
           case colorPicker.TEXT_COLOR:
            return (this.handleTextColor)
           case colorPicker.FILL_COLOR:
            return (this.handleFillColor)
           case colorPicker.BORDER_COLOR:
            return (this.handleBorderColor)
         }
       }
    }
    let renderDialogs = ()=>{
      if(this.props.dialog!=undefined){
        switch(this.props.dialog){
          case dialogs.ASSET_STORE:
            return (<AssetStore className={styles.modal}/>);
          case dialogs.ASSET_EDITOR:
           return (<AssetEditor className={styles.modal}/>);
          case dialogs.ACCOUNT_WITH_SNS:
            return (<AccountDialog className={styles.modal}/>);
          case dialogs.COLOR_PICKER:
            return (<div className={styles.color_picker}><SketchPicker onChangeComplete={kindsOfcolorPicker()}/></div>)
          case dialogs.SLIDE_SHOW:
            return (<SlideShow className={styles.modal}/>);
        }
      }
    }
    let contextDisabled = this.checkContextDisabled();
    let isSlideShow = ()=>{
      if(this.props.visibleSlideShow){
        return(<SlideShow/>);
      }else{
        return(
          <div ref={root => {this.root = root}} className={styles.slideEditor}>
            <AssetCreator className={styles.assetCreator}/>
            <SlideManager className={styles.slideManager+' '+(this.props.visibleSlideManager?styles.show:'')}/>
            {renderDialogs()}
            <div onClick={this.handleClick} className={styles.contextWrap+' '+(contextDisabled?styles.disabled:'')}>
              <div className={styles.contextSpace}>
                <SlideContext className={styles.slideContext}/>
              </div>
            </div>
            <AssetController className={styles.assetController}/>
          </div>
        );
      }
    }
    return (
      <div>
        {isSlideShow()}
      </div>
    );
  }

  componentDidMount(){
    window.addEventListener("keydown", this.handleKeyDown, true);
  }

  componentWillUnmount(){
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.keyCode === 27) {
      this.props.releaseDialog();
    }
  }

  handleClick(event){
    if(this.checkContextDisabled()){
      this.props.releaseDialog();
    }
  }

  checkContextDisabled(){
    let check = false;
    if(this.props.visibleSlideManager||this.props.dialog!=undefined){
      check = true;
    }
    return check;
  }

  handleFillColor(color){
    this.props.setAssetFillColor(color.hex);
  };

  handleBorderColor(color){
    this.props.setAssetBorderColor(color.hex);
  };
  handleTextColor(color){
    this.props.setAssetTextColor(color.hex);
  };
}

const mapStateToProps = (state) => {
  return {
    dialog: state.ui.dialog,
    visibleSlideManager: state.ui.visibleSlideManager,
    visibleSlideShow: state.ui.visibleSlideShow,
    colorPicker: state.ui.colorPicker
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...assetsActions, ...uiActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideEditor);
