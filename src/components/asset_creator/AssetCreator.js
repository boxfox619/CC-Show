import React from 'react'
import AssetCreateButton from './AssetCreateButton';


class AssetCreator extends React.Component{
  constructor(props){
    super(props);
    this.state={
      defaultAssetTypes: [
        { type : 'Text', icon : 'text' },
        { type : 'Image', icon : 'image' },
        { type : 'Video', icon : 'video' },
        { type : 'Shape', icon : 'shape',
        subTypes: [
          {type : 'Circle', displayName : '원'}.
          {type : 'Rectangle', displayName : '사각형'}.
          {type : 'Triangle', displayName : '삼각형'}
        ]
       },
     ],
     clickableItems: [
       { icon : 'customAsset', onClick : this.openAssetStore},
       { icon : 'slidePreview', onClick : this.showSlidePreview},
       { icon : 'slideController', onClick : this.showSlideController}
     ]
    }
  }

  render(){
    defaultAssetTypeCreators = (data) => {
      return data.map((assetType, i) =>{
        return <AssetCreateButton AssetType={assetType} />
      });
    };
    renderClickableItems = (data) =>{
      return data.map((item, i) => {
        return <ClickableButton attribute={item} />
      });
    };
    return (
      <div>
      <div>
      {defaultAssetTypeCreators(this.state.defaultAssetTypes)}
      </div>
      <div>
      {}
      </div>
      </div>
    );
  }

  showSlideController : function(){
    console.log('test');
  }

  openAssetStore : function(){
    console.log('test');
  }

  showSlidePreview : function(){
    console.log('test');
  }

}

export default AssetCreator;
