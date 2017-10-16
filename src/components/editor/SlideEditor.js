import React from 'react';
import AssetCreator from './asset_creator/AssetCreator';
import SlideContext from './context/SlideContext';
import AssetController from './asset_controller/AssetController';
import SlideManager from './slideManager/SlideManager';
import AssetStore from './assetStore/AssetStore';
import AssetEditor from './assetEditor/AssetEditor';
import ColorPicker from './color_picker/ColorPicker';
import ProgressDialog from './progressDialog/ProgressDialog';

import SlideShow from './slide_show/SlideShow'
import { dialogs } from '../../actions/ui';

import * as editorActions from '../../actions/asseteditor';
import * as assetActions from '../../actions/asseteditor';
import * as uiActions from '../../actions/ui';
import * as slideActions from '../../actions/slides';
import * as accountActions from '../../actions/account';
import { bindActionCreators } from 'redux';

import styles from './SlideEditor.css';
import { connect } from 'react-redux';

import axios from 'axios';


class SlideEditor extends React.Component{

  constructor(props){
    super(props);

    this.state = {showId: undefined};

    this.checkContextDisabled = this.checkContextDisabled.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.uploadShowData = this.uploadShowData.bind(this);
    this.onUnload = this.onUnload.bind(this);
  }

  render(){
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

  componentDidMount(){
    window.addEventListener("keydown", this.handleKeyDown, true);
    window.addEventListener("beforeunload", this.onUnload)
    var url = new URL(window.location.href);
    var showId = url.searchParams.get("show");
    if(showId != null){
      this.props.toggleProgressDialog();
      axios.get('/show/data?id='+showId).then(response => {
        this.props.updateAccountData(response.data.account.email, response.data.account.nickname, response.data.account.profile);
        this.props.initShowData(response.data.showData);
        this.setState({showId});
        this.props.toggleProgressDialog();
      })
      .catch(e =>{
        console.log(e);
        this.props.toggleProgressDialog();
      });
    }
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

  handleClick(event){
    var title = ''
    var html = ''
    var css = ''
    var js = ''
    var preview = ''
    var content = ''
    var price = ''
    var license = ''
    var openToStore = ''
    var charge = ''
    if(this.checkContextDisabled()){
      this.props.setTitle(title);
      this.props.setHtml(html);
      this.props.setCSS(css);
      this.props.setJS(js);
      this.props.getPreviewImage(preview);
      this.props.getContent(content)
      this.props.getPrice(price);
      this.props.getLicense(license);
      this.props.getOpenToStore(openToStore);
      this.props.getChangeToCharge(charge);
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
    if(this.state.showId!=undefined){
      this.props.toggleProgressDialog();
    axios.post('/show/data', {showId: this.state.showId, showData: this.props.showData}).then(response => {
        this.props.toggleProgressDialog();
    })
    .catch(e =>{
      console.log(e);
        this.props.toggleProgressDialog();
    });
  }
  }
}

const mapStateToProps = (state) => {
  return {
    dialog: state.ui.dialog,
    visibleSlideManager: state.ui.visibleSlideManager,
    showData: state.editor
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...assetActions, ...accountActions, ...slideActions, ...uiActions, ...assetActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideEditor);
