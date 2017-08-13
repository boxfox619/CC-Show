import React from 'react';
import ClickableButton from './clickable_button/ClickableButton';
import styles from './AssetCreator.css';

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
      <ClickableButton name={'텍스트'} onClick={()=>this.createAsset('text')} />
      <ClickableButton name={'이미지'} onClick={()=>this.createAsset('image')} />
      <ClickableButton name={'비디오'} onClick={()=>this.createAsset('video')} />
      <ClickableButton name={'도형'} onClick={()=>this.showDialog(this.shapeTypes)} />
      <ClickableButton name={'기타'} onClick={()=>this.createAsset('custom')} />
      <span className={styles.hr}/>
      <ClickableButton name={'슬라이드 리스트'} onClick={this.showSlidePreview} />
      <ClickableButton name={'슬라이드 쇼'} onClick={this.showSlideController} />
      </div>
      </div>
    );
  }

  showSlideController(){
    console.log('test');
  }

  openAssetStore(){
    console.log('test');
  }

  showSlidePreview(){
    console.log('test');
  }

  showDialog(subTypes){
    console.log(subTypes.length);
  }

  createAsset(type){
    console.log(type);
  }

}

AssetCreator.defaultProps = defaultProps;

export default AssetCreator;
