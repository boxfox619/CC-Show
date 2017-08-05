import React from 'react';
import ClickableButton from './clickable_button/ClickableButton';
import styles from './AssetCreator.css';

class AssetCreator extends React.Component{

  constructor(props){
    super(props);

      this.defaultAssetTypes = [
          { type : 'Text', icon : 'text' },
          { type : 'Image', icon : 'image' },
          { type : 'Video', icon : 'video' },
          { type : 'Shape', icon : 'shape',
          subTypes: [
            {type : 'Circle', displayName : '원'},
            {type : 'Rectangle', displayName : '사각형'},
            {type : 'Triangle', displayName : '삼각형'}
          ]
         }
       ];

       this.clickableItems = [
         { icon : 'customAsset', onClick : this.openAssetStore},
         { icon : 'slidePreview', onClick : this.showSlidePreview},
         { icon : 'slideController', onClick : this.showSlideController}
       ];
  }

  render(){
    let renderDefaultAssetCreators = (data, index) => {
      return data.map((typeInfo, i) =>{
        let onClick;
        if(typeof typeInfo.subTypes != 'undefined'){
          onClick = () => this.showDialog(typeInfo.subTypes);
        }else{
          onClick = ()=>this.createAsset(typeInfo.type);
        }
        return <ClickableButton key={index} icon={typeInfo.icon} onClick={onClick} />
      });
    };
    let renderClickableItems = (data, index) =>{
      return data.map((item, i) => {
        return <ClickableButton key={index} icon={item.icon} onClick={item.onClick}/>
      });
    };
    return (
      <div>
      <ul>
      {renderDefaultAssetCreators(this.defaultAssetTypes)}
      </ul>
      <ul>
      {renderClickableItems(this.clickableItems)}
      </ul>
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

export default AssetCreator;
