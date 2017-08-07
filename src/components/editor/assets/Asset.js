import React from 'react';

import TextAsset from './TextAsset';
import ImageAsset from './ImageAsset';

class Asset extends React.Component{

  constructor(props){
    super(props);
    }

  render(){
      let assetTag;
    switch(this.props.attribute.type){
      case 'text':
        assetTag = TextAsset;
        break;
      case 'image':
        assetTag = ImageAsset;
        break;
      case 'video':
        assetTag = 'VideoAsset';
        break;
      case 'shape':
        assetTag = 'ShapeAsset';
        break;
      default:
        assetTag = 'TextAsset';
        break;
    }
    document.createElement('asset');
    const AssetContext = assetTag;
      return (<asest id={this.props.attribute.id}><AssetContext  styles={this.getStyle()} value={this.props.attribute.value}/></asest>);
  }

  getStyle(){
    let style = {
      'height': this.props.attribute.height,
      'width': this.props.attribute.width,
      'left' : this.props.attribute.left,
      'top' : this.props.attribute.top
    };
    if(this.props.attribute.styles != 'undefined'){
      for (key in this.props.attribute.styles) {
        style[key] = this.props.attribute.styles[key];
      }
    }
    return style;
  }
}
/*
{ id: '123',
  isSelected: false,
  type: 'text',
  width: '100px',
  height: '300px',
  left: '20px',
  top:'10px',
  value:'가나다라',
  styles : {
    font-size: '30px'
  }
}
*/


export default Asset;
