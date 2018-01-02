import React from 'react';
import { SketchPicker } from 'react-color';
import * as uiActions from 'services/ui/actions';
import * as assetsActions from 'services/editor/asset/actions';
import { colorPicker } from 'services/ui/colorPicker';

import styles from './style.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ColorPicker extends React.Component{
  constructor(props){
    super(props);

    this.handleSelectColor = this.handleSelectColor.bind(this);
  }

  render() {
      let kindOfColor = () =>{
         if(this.props.colorPicker!=undefined){
           switch(this.props.colorPicker){
             case colorPicker.TEXT_COLOR:
              return (this.props.currentAsset.style['color']);
             case colorPicker.FILL_COLOR:
              return (this.props.currentAsset.style['background-color']);
             case colorPicker.BORDER_COLOR:
              return (this.props.currentAsset.style['border-color']);
           }
         }
      }
    return (
      <div className={this.props.className} style={{'width':'auto', 'height':'auto'}}>
        <SketchPicker style={{'box-shadow':'none'}} color={kindOfColor()} onChangeComplete={this.handleSelectColor}/>
        <div className={styles.closer} onClick={this.props.releaseDialog}>닫기</div>
      </div>
    )
  }

  handleSelectColor(color){
    switch(this.props.colorPicker){
      case colorPicker.TEXT_COLOR:
        this.props.setAssetTextColor(color.hex);
        break;
      case colorPicker.FILL_COLOR:
        this.props.setAssetFillColor(color.hex);
        break;
      case colorPicker.BORDER_COLOR:
        this.props.setAssetBorderColor(color.hex);
        break;
    }
  };
}

function getAssetIndex(state, key) {
  let index = -1;
  state.editor.slides[state.editor.selectedSlide].assets.forEach(function (asset, i) {
    if (asset.id == key) {
      index = i;
    }
  });
  return index;
}

const mapStateToProps = (state) => {
  return {
    colorPicker: state.ui.colorPicker,
    currentAsset: state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset]
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...assetsActions, ...uiActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
