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
    this.getSubStyleClass = this.getSubStyleClass.bind(this);
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
      return (<asset id={this.props.attribute.id} style={this.getStyle()} className={styles.asset}>
      <div style={{'width': this.props.attribute.width, 'height': this.props.attribute.height,'padding': '6px', 'position': 'absolute'}} >
        <div style={{'top': '3px'}} className={styles.horizontalResizer+this.getSubStyleClass()}></div>
        <div style={{'top': 'calc('+this.props.attribute.height+' + 7px)'}} className={styles.horizontalResizer+this.getSubStyleClass()}></div>
        <div style={{'left': '3px'}} className={styles.verticalResizer+this.getSubStyleClass()}></div>
        <div style={{'left': 'calc('+this.props.attribute.width+' + 7px)'}} className={styles.verticalResizer+this.getSubStyleClass()}></div>
        <AssetContext styles={{'width':this.props.attribute.width, 'height': this.props.attribute.height,'overflow':'hidden', 'cursor' : 'move'}} value={this.props.attribute.value}/>
        <div style={{'cursor': 'nw-resize', 'top':'0px', 'left':'0px'}} className={styles.selectorDot+this.getSubStyleClass()}></div>
        <div style={{'cursor': 'ne-resize', 'top':'0px', 'left':'calc('+this.props.attribute.width+' + 3.5px)'}} className={styles.selectorDot+this.getSubStyleClass()}></div>
        <div style={{'cursor': 'ne-resize', 'top': 'calc('+this.props.attribute.height+' + 3.5px)', 'left':'0px'}} className={styles.selectorDot+this.getSubStyleClass()}></div>
        <div style={{'cursor': 'nw-resize', 'top': 'calc('+this.props.attribute.height+' + 3.5px)', 'left': 'calc('+this.props.attribute.width+' + 3.5px)'}} className={styles.selectorDot+this.getSubStyleClass()}></div>
      </div>
      </asset>);
  }

  getStyle(){
    let style = {
      'height': 'calc('+this.props.attribute.height+' + 12px)',
      'width': 'calc('+this.props.attribute.width+' + 12px)',
      'left' : this.props.attribute.x,
      'top' : this.props.attribute.y
    };
    if(this.props.attribute.styles != 'undefined'){
      for (key in this.props.attribute.styles) {
        style[key] = this.props.attribute.styles[key];
      }
    }
    return style;
  }

  getSubStyleClass(){
    return((this.props.isSelected)?' '+styles.isSelected:'');
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
