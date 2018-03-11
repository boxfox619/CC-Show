import React from 'react';
import AssetCreator from './components/assetCreator';
import SlideContext from './components/slideContext';
import AssetController from './components/assetController';
import SlideManager from './components/slideManager';
import AssetStore from 'components/dialogs/assetStore';
import ColorPicker from 'components/dialogs/colorPicker';
import SlideShow from './components/slideShow';
import ProgressDialog from 'components/progressDialog';
import dialogs from 'services/ui/dialogs';

import domtoimage from 'dom-to-image';

import * as assetActions from 'services/editor/asset/actions';
import * as uiActions from 'services/ui/actions';
import * as slideActions from 'services/editor/slide/actions';
import * as accountActions from 'services/account/actions';

import * as showApi from './services/api';

import { bindActionCreators } from 'redux';

import styles from './style.css';
import { connect } from 'react-redux';

class ShowEditor extends React.Component{

  constructor(props){
    super(props);

    this.state = {showId: undefined};

    this.checkContextDisabled = this.checkContextDisabled.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.uploadShowData = this.uploadShowData.bind(this);
    this.onUnload = this.onUnload.bind(this);
    this.setTimeout = this.setTimeout.bind(this);
  }

  render(){
    let renderDialogs = ()=>{
      if(this.props.dialog!=undefined){
        switch(this.props.dialog){
          case dialogs.ASSET_STORE:
            return (<AssetStore className={styles.modal}/>);
          case dialogs.ACCOUNT_WITH_SNS:
            return (<AccountDialog className={styles.modal}/>);
          case dialogs.COLOR_PICKER:
            return (<ColorPicker className={styles.modal}/>)
          case dialogs.SLIDE_SHOW:
            return (<SlideShow className={styles.modal}/>);
          case dialogs.PROGRESS:
            return (<ProgressDialog className={styles.modal}/>);
        }
      }
    }
    let contextDisabled = this.checkContextDisabled();
    return (
      <div ref={root => {this.root = root}} className={styles.showEditor}>
        <AssetCreator className={styles.assetCreator}/>
        <SlideManager className={styles.slideManager+' '+(this.props.visibleSlideManager?styles.show:'')}/>
        {renderDialogs()}
        <div onClick={this.handleClick} className={styles.contextWrap+' '+(contextDisabled?styles.disabled:'')}>
          <div className={styles.contextSpace}>
            <SlideContext
              className={styles.slideContext}
              onModified={this.setTimeout}/>
          </div>
        </div>
        <AssetController className={styles.assetController}/>
      </div>
    );
  }

  componentDidMount(){
    window.addEventListener("keydown", this.handleKeyDown, true);
    window.addEventListener("beforeunload", this.onUnload);
    this.props.toggleProgressDialog();
    showApi.load(function(response){
      if(response.result == true){
        this.props.updateAccountData(response.data.account.email, response.data.account.nickname, response.data.account.profile);
        this.props.initShowData(response.showId, response.data.showData);
        this.setState({ showId : response.showId });
      }
        this.props.toggleProgressDialog();
    }.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("beforeunload", this.onUnload)
  }

  handleKeyDown(e) {
    if (e.keyCode === 27) {
      this.props.releaseDialog();
    }else if ((e.which == 83 && e.ctrlKey)){
      this.uploadShowData();
      e.preventDefault()
    }
  }

  setTimeout(){
    if (this.timeoutId) clearTimeout(this.timeoutId);
    let _self = this;
    this.timeoutId = setTimeout(function () {
      _self.uploadShowData();
    }, 1000);
  }

  handleClick(event){
    if(this.checkContextDisabled()){
      this.props.releaseDialog();
    }
  }

  onUnload(event){
    return event.returnValue = "발표자료를 저장하셨나요? (Ctrl + S)";
  }

  checkContextDisabled(){
    let check = false;
    if(this.props.visibleSlideManager||this.props.dialog!=undefined){
      check = true;
    }
    return check;
  }

  uploadShowData(){
      let filter = (node) => {
          return (node.tagName !== 'SELECTORLINE'&&node.tagName !== 'SELECTORDOT');
      }
      let node = document.getElementsByTagName('scanvas')[0];
      let _self = this;
      let currentSilde = this.props.currentSilde;
      domtoimage.toPng(node, {filter: filter})
      .then(function (dataUrl) {
          _self.props.updateSlideThumbnail(currentSilde, dataUrl);

        if(_self.state.showId!=undefined){
          _self.props.toggleProgressDialog();
          showApi.upload(_self.state.showId, _self.props.showData, function(response){
            _self.props.toggleProgressDialog();
          });
        }
      })
      .catch(function (error) {
          console.error(error);
      });
  }
}

const mapStateToProps = (state) => {
  return {
    dialog: state.ui.dialog,
    visibleSlideManager: state.ui.visibleSlideManager,
    showData: state.editor,
    currentSilde: state.editor.selectedSlide
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       ...assetActions,
       ...accountActions,
       ...slideActions,
       ...uiActions,
       ...assetActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowEditor);
