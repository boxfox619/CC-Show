import React from 'react';

import styles from './style.css';

import * as assetTypes from 'services/editor/asset/assetTypes';

import TextAsset from './components/TextAsset';
import ImageAsset from './components/ImageAsset';
import VideoAsset from './components/VideoAsset';
import TableAsset from './components/TableAsset';
import CustomAsset from './components/CustomAsset';
import ShapeAsset from './components/ShapeAsset';
import PreviewAsset from './components/PreviewAsset';

const propTypes = {
    attribute: React.PropTypes.object,
    isSelected: React.PropTypes.bool,
    onChangeAttributes: React.PropTypes.func,
    controlable: React.PropTypes.bool,
    doubleClicked: React.PropTypes.bool
}

const defaultProps = {
  isSelected: false,
  controlable: true,
  doubleClicked: false
}


const renderSelectorDot = (width, height)=>{
    const topLeftAttr = {'target': 'topleft'};
    const topRightAttr = {'target': 'topright'};
    const bottomLeftAttr = {'target': 'bottomleft'};
    const bottomRightAttr = {'target': 'bottomright'};
        return (<div><selectordot {...topLeftAttr} style={{'cursor': 'nw-resize', 'top':'0px', 'left':'0px'}} className={styles.selectorDot}/>
            <selectordot {...topRightAttr} style={{'cursor': 'ne-resize', 'top':'0px', 'left':'calc('+width+' + 3.5px)'}} className={styles.selectorDot}/>
            <selectordot {...bottomLeftAttr} style={{'cursor': 'ne-resize', 'top': 'calc('+height+' + 3.5px)', 'left':'0px'}} className={styles.selectorDot}/>
            <selectordot {...bottomRightAttr} style={{'cursor': 'nw-resize', 'top': 'calc('+height+' + 3.5px)', 'left': 'calc('+width+' + 3.5px)'}} className={styles.selectorDot}/>
        </div>)
}


let renderSelectorLine = (width, height)=>{
    const topAttr = {'target': 'top'};
    const bottomAttr = {'target': 'bottom'};
    const leftAttr = {'target': 'left'};
    const rightAttr = {'target': 'right'};
        return (<div><selectorline {...topAttr} style={{'top': '3px'}} className={styles.horizontalResizer}/>
            <selectorline {...bottomAttr} style={{'top': 'calc('+height+' + 7px)'}} className={styles.horizontalResizer}/>
            <selectorline {...leftAttr} style={{'left': '3px'}} className={styles.verticalResizer}/>
            <selectorline {...rightAttr} style={{'left': 'calc('+width+' + 7px)'}} className={styles.verticalResizer}/>
        </div>);
}


class Asset extends React.Component{

  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getClearStyle = this.getClearStyle.bind(this);
  }

  render(){
      let controllerVisible = this.props.controlable;
      let assetTag;
      let attrs = {};
      switch (this.props.attribute.type) {
          case assetTypes.TYPE_TEXT:
              assetTag = TextAsset;
              controllerVisible = (controllerVisible && this.props.doubleClicked) ? false : controllerVisible;
              attrs = {
                  edit: this.props.isSelected && this.props.doubleClicked,
                  controlable: this.props.controlable,
                  id: this.props.attribute.id + '_editor'
              };
              break;
          case assetTypes.TYPE_IMAGE:
              assetTag = ImageAsset;
              break;
          case assetTypes.TYPE_VIDEO:
              assetTag = VideoAsset;
              attrs = {preview: (!this.props.controlable) ? true : this.props.attribute.preview && this.props.isSelected};
              break;
          case assetTypes.TYPE_SHAPE:
              assetTag = ShapeAsset;
              attrs = this.props.attribute;
              break;
          case assetTypes.TYPE_TABLE:
              assetTag = TableAsset;
              break;
          case assetTypes.TYPE_CUSTOM:
              assetTag = CustomAsset;
              attrs = {type: true};
              break;
          case assetTypes.TYPE_PREVIEW:
              assetTag = PreviewAsset;
              attrs = {type: false};
              break;
          default:
              assetTag = 'TextAsset';
              break;
      }
      const AssetContext = assetTag;
      return (
          <asset id={this.props.attribute.id} style={this.getStyle()} className={styles.asset}>
              <div style={{
                  'width': this.props.attribute.width,
                  'height': this.props.attribute.height,
                  'padding': '6px',
                  'position': 'absolute'
              }}>
                  {this.props.isSelected && renderSelectorLine(this.props.attribute.width, this.props.attribute.height)}
                  <AssetContext
                      handleChange={this.handleInputChange}
                      styles={this.getClearStyle()}
                      attrs={attrs}
                      value={this.props.attribute.value}
                  />
                  {this.props.isSelected && renderSelectorDot(this.props.attribute.width, this.props.attribute.height)}
              </div>
          </asset>
      );
  }


    handleInputChange(value) {
        this.props.onChangeAttributes({value});
    }

    getClearStyle() {
        let clearStyle = {};
        for (var prop in this.props.attribute.style) {
            let key = prop;
            while (key.indexOf('-') > 0) {
                let index = key.indexOf('-');
                key = key.substring(0, index) + key.substring(index + 1, index + 2).toUpperCase() + key.substring(index + 2, key.length);
            }
            clearStyle[key] = this.props.attribute.style[prop];
        }
        clearStyle['width'] = parseInt(this.props.attribute.width) - parseInt(this.props.attribute.style['border-width']) * 2 + 'px';
        clearStyle['height'] = parseInt(this.props.attribute.height) - parseInt(this.props.attribute.style['border-width']) * 2 + 'px';
        clearStyle['overflow'] = 'hidden';
        clearStyle['cursor'] = this.props.controlable ? 'move' : 'normal';
        return clearStyle;
    }

    createAttrs(key, object) {
        return {key: object};
    }

    getStyle() {
        let style = {
            'height': 'calc(' + this.props.attribute.height + ' + 12px)',
            'width': 'calc(' + this.props.attribute.width + ' + 12px)',
            'left': this.props.attribute.x,
            'top': this.props.attribute.y
        };
        return style;
    }
}

Asset.propTypes = propTypes;
Asset.defaultProps = defaultProps;

export default Asset;
