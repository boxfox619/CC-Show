import React from 'react';

import styles from './Assets.css';

import TextAsset from './TextAsset';
import ImageAsset from './ImageAsset';

const propTypes = {
  attribute: React.PropTypes.object,
  isSelected: React.PropTypes.bool
}

const defaultProps = {
  isSelected: false
}

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
      return (<asset id={this.props.attribute.id} className={styles.asset+((this.props.isSelected)?' '+styles.isSelected:'')}>
        <AssetContext styles={this.getStyle()} value={this.props.attribute.value}/>
      </asset>);
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

Asset.propTypes = propTypes;
Asset.defaultProps = defaultProps;
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
