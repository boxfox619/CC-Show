import React from 'react';
import ClickableButton from './clickable_button/ClickableButton';

import styles from './AssetCreator.css';
import { connect, bindActionCreators } from 'react-redux';

import * as assetsActions from '../../../actions/assets';
import * as assetTypes from '../../../assetTypes';
import * as uiActions from '../../../actions/ui';

import AssetEditor from '../assetEditor/AssetEditor';

const defaultProps = {
  id: 'rlatjdfo112@naver.com',
  name: '홍길동',
  profileImgUrl: 'https://www.abeautifulsite.net/uploads/2017/06/cory-nh.jpg?thumbnail=256&key=efa40634dcf49513bdf8fbd309d47806105e22c6542db12e54866590a371efe1'
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
  }

  render(){
    return (
      <div className={this.props.className}>
      <div style={{'width': '80%', 'margin': '20px 10%'}}>
      <div className={styles.profile}>
        <img className={styles.profileImg} src={this.props.profileImgUrl}/>
        <div className={styles.textWrap}>
          <div className={styles.name}>{this.props.name}</div>
          <div className={styles.subName}>{this.props.id}</div>
        </div>
      </div>
      <span className={styles.hr}/>
      <ClickableButton name={'텍스트'} onClick={()=>this.createAsset(assetTypes.TYPE_TEXT)} />
      <ClickableButton name={'이미지'} onClick={()=>this.createAsset(assetTypes.TYPE_IMAGE)} />
      <ClickableButton name={'비디오'} onClick={()=>this.createAsset(assetTypes.TYPE_VIDEO)} />
      <ClickableButton name={'도형'} onClick={()=>this.showDialog(this.shapeTypes)} />
      <ClickableButton name={'기타'} onClick={()=>this.props.toggleAssetEditor()} />
      <span className={styles.hr}/>
      <ClickableButton name={'슬라이드 리스트'} onClick={this.props.toggleSlideManager()} />
      <ClickableButton name={'슬라이드 쇼'} onClick={this.showSlideController} />
      </div>
      <div className={styles.logo}/>
      </div>
    );
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

AssetCreator.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    name: state.account.name,
    id: state.account.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAssetEditor : () => {
      dispatch(uiActions.toggleAssetEditor())
    },
    toggleSlideManager : () => {
      dispatch(uiActions.toggleSlideManager());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetCreator);
