import React from 'react';
import AssetCreator from './components/assetCreator';
import SlideContext from './components/slideContext';
import AssetController from './components/assetController';
import SlideManager from './components/slideManager';
import AssetStore from './components/assetStore';
import ColorPicker from './components/colorPicker';
import SlideShow from './components/slideShow';

import ProgressDialog from 'components/progressDialog';

import * as dialogs from 'services/ui/dialogs';

import * as assetActions from 'services/editor/asset/actions';
import * as uiActions from 'services/ui/actions';
import * as slideActions from 'services/editor/slide/actions';
import * as accountActions from 'services/account/actions';
import { bindActionCreators } from 'redux';

import styles from './style.css';
import { connect } from 'react-redux';

import axios from 'axios';

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

  setTimeout(){
    if (this.timeoutId) clearTimeout(this.timeoutId);
    let _self = this;
    this.timeoutId = setTimeout(function () {
      _self.uploadShowData();
    }, 3000);
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
    setTimeout();
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowEditor);
