import React from 'react';
import ClickableButton from './clickableButton';

import styles from './style.css';
import domtoimage from 'dom-to-image';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as assetsActions from 'services/editor/asset/actions';
import * as slideActions from 'services/editor/slide/actions';
import * as assetTypes from 'services/editor/asset/assetTypes';
import * as uiActions from 'services/ui/actions';

function filter (node) {
    return (node.tagName !== 'SELECTORLINE'&&node.tagName !== 'SELECTORDOT');
}

class AssetCreator extends React.Component{

  constructor(props){
    super(props);

      this.shapeTypes = [
        {type : 'Circle', displayName : '원'},
        {type : 'Rectangle', displayName : '사각형'},
        {type : 'Triangle', displayName : '삼각형'}
      ]

       this.clickableItems = [
         { icon : 'customAsset', onClick : this.openAssetStore},
         { icon : 'slidePreview', onClick : this.showSlidePreview},
         { icon : 'slideController', onClick : this.showSlideController}
       ];
       this.updateThumbnailSlide = this.updateThumbnailSlide.bind(this);
       this.doJob = this.doJob.bind(this);
  }

  render(){
    return (
      <div className={this.props.className}>
      <div style={{'width': '80%', 'margin': '20px 10%'}}>
      <div className={styles.profile}>
        <div className={styles.profileImgCover}>
          <img className={styles.profileImg} src={this.props.profile}/>
        </div>
        <div className={styles.textWrap}>
          <div className={styles.name}>{this.props.name}</div>
          <div className={styles.subName}>{this.props.email}</div>
        </div>
      </div>
      <span className={styles.hr}/>
      <ClickableButton name={'텍스트'} onClick={()=>this.doJob(()=>this.createAsset(assetTypes.TYPE_TEXT))} />
      <ClickableButton name={'이미지'} onClick={()=>this.doJob(()=>this.createAsset(assetTypes.TYPE_IMAGE))} />
      <ClickableButton name={'비디오'} onClick={()=>this.doJob(()=>this.createAsset(assetTypes.TYPE_VIDEO))} />
      <ClickableButton name={'도형'} onClick={()=>this.doJob(()=>this.createAsset(assetTypes.TYPE_SHAPE))} />
      <ClickableButton name={'표'} onClick={()=>this.doJob(()=>this.createAsset(assetTypes.TYPE_TABLE))} />
      <ClickableButton name={'기타'} onClick={()=>this.doJob(()=>this.props.toggleAssetStore())} />
      <span className={styles.hr}/>
      <ClickableButton name={'슬라이드 리스트'} onClick={()=>this.doJob(()=>this.props.toggleSlideManager())} />
      <ClickableButton name={'슬라이드 쇼'} onClick={()=>this.doJob(()=>this.props.toggleSlideShow())} />
      </div>
      <div className={styles.logo}/>
      </div>
    );
  }

  doJob(func){
    this.updateThumbnailSlide();
    func();
  }

  updateThumbnailSlide(){
      let node = document.getElementsByTagName('scanvas')[0];
      let self = this;
      let currentSilde = this.props.currentSilde;
      domtoimage.toPng(node, {filter: filter})
      .then(function (dataUrl) {
          self.props.updateThumbnailSlide(currentSilde, dataUrl);
      })
      .catch(function (error) {
          console.error(error);
      });
  }

  showSlideController(){
    console.log('test');
  }

  openAssetStore(){
    console.log('test');
  }

  showDialog(subTypes){
    console.log(subTypes.length);
  }

  createAsset(type){
    this.props.createAssetByType(type);
  }

}

const mapStateToProps = (state) => {
  return {
    name: state.account.name,
    email: state.account.email,
    profile: state.account.profile,
    currentSilde: state.editor.selectedSlide
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...assetsActions, ...slideActions, ...uiActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetCreator);
