import React from 'react';

import styles from './Assets.css';

import * as assetTypes from '../../../assetTypes';

import TextAsset from './TextAsset';
import ImageAsset from './ImageAsset';
import VideoAsset from './VideoAsset';
import CustomAsset from './CustomAsset';

const propTypes = {
  attribute: React.PropTypes.object,
  isSelected: React.PropTypes.bool,
  handleValueChange: React.PropTypes.func,
  controlable: React.PropTypes.bool
}

const defaultProps = {
  isSelected: false,
  controlable: true
}

class Asset extends React.Component{

  constructor(props){
    super(props);
    this.getSubStyleClass = this.getSubStyleClass.bind(this);
    this.getContextWidth = this.getContextWidth.bind(this);
    this.getContextHeight = this.getContextHeight.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    }

  render(){
      let assetTag;
    switch(this.props.attribute.type){
      case assetTypes.TYPE_TEXT:
        assetTag = TextAsset;
        break;
      case assetTypes.TYPE_IMAGE:
        assetTag = ImageAsset;
        break;
      case assetTypes.TYPE_VIDEO:
        assetTag = VideoAsset;
        break;
      case assetTypes.TYPE_SHAPE:
        assetTag = 'ShapeAsset';
        break;
      case assetTypes.TYPE_CUSTOM:
        assetTag = CustomAsset;
        break;
      default:
        assetTag = 'TextAsset';
        break;
    }
    const AssetContext = assetTag;
    const topLeftAttr = {'target': 'topleft'};
    const topRightAttr = {'target': 'topright'};
    const bottomLeftAttr = {'target': 'bottomleft'};
    const bottomRightAttr = {'target': 'bottomright'};
    const topAttr = {'target': 'top'};
    const bottomAttr = {'target': 'bottom'};
    const leftAttr = {'target': 'left'};
    const rightAttr = {'target': 'right'};
    let renderSelectorLine = ()=>{
      if(this.props.controlable){
        return (<div><selectorline {...topAttr} style={{'top': '3px'}} className={styles.horizontalResizer+this.getSubStyleClass()}/>
        <selectorline {...bottomAttr} style={{'top': 'calc('+this.getContextHeight()+' + 7px)'}} className={styles.horizontalResizer+this.getSubStyleClass()}/>
        <selectorline {...leftAttr} style={{'left': '3px'}} className={styles.verticalResizer+this.getSubStyleClass()}/>
        <selectorline {...rightAttr} style={{'left': 'calc('+this.getContextWidth()+' + 7px)'}} className={styles.verticalResizer+this.getSubStyleClass()}/>
      </div>);
      }
    }
    let renderSelectorDot = ()=>{
      if(this.props.controlable){
        return (<div><selectordot {...topLeftAttr} style={{'cursor': 'nw-resize', 'top':'0px', 'left':'0px'}} className={styles.selectorDot+this.getSubStyleClass()}/>
      <selectordot {...topRightAttr} style={{'cursor': 'ne-resize', 'top':'0px', 'left':'calc('+this.getContextWidth()+' + 3.5px)'}} className={styles.selectorDot+this.getSubStyleClass()}/>
      <selectordot {...bottomLeftAttr} style={{'cursor': 'ne-resize', 'top': 'calc('+this.getContextHeight()+' + 3.5px)', 'left':'0px'}} className={styles.selectorDot+this.getSubStyleClass()}/>
      <selectordot {...bottomRightAttr} style={{'cursor': 'nw-resize', 'top': 'calc('+this.getContextHeight()+' + 3.5px)', 'left': 'calc('+this.getContextWidth()+' + 3.5px)'}} className={styles.selectorDot+this.getSubStyleClass()}/>
        </div>)
      }
    }
      return (<asset id={this.props.attribute.id} style={this.getStyle()} className={styles.asset}>
      <div style={{'width': this.getContextWidth(), 'height': this.getContextHeight(),'padding': '6px', 'position': 'absolute'}} >
        {renderSelectorLine()}
        <AssetContext handleChange={this.handleInputChange} styles={{'width': this.getContextWidth(), 'height': this.getContextHeight(),'overflow':'hidden', 'cursor' : 'move'}} value={this.props.attribute.value}/>
          {renderSelectorDot()}
      </div>
      </asset>);
  }


  handleInputChange(event) {
    this.props.handleValueChange(this.props.attribute.id,event.target.value);
  }

  getContextWidth(){
    if(this.props.attribute.width.endsWith('%')){
        return 'calc(100% - 12px)';
    }
    return this.props.attribute.width;
  }

    getContextHeight(){
      if(this.props.attribute.height.endsWith('%')){
          return 'calc(100% - 12px)';
      }
      return this.props.attribute.height;
    }


  createAttrs(key, object){
    return {key: object};
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
