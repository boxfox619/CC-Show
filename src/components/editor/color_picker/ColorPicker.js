import React from 'react';
import { SketchPicker } from 'react-color';
import * as uiActions from '../../../actions/ui';
import * as assetsActions from '../../../actions/assets';
import { colorPicker } from '../../../actions/ui';

import styles from './ColorPicker.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ColorPicker extends React.Component{
  constructor(props){
    super(props);

    this.handleBorderColor = this.handleBorderColor.bind(this);
    this.handleFillColor = this.handleFillColor.bind(this);
    this.handleTextColor = this.handleTextColor.bind(this);
  }

  render() {
      let kindsOfcolorPicker = () =>{
         if(this.props.colorPicker!=undefined){
           switch(this.props.colorPicker){
             case colorPicker.TEXT_COLOR:
              return (this.handleTextColor)
             case colorPicker.FILL_COLOR:
              return (this.handleFillColor)
             case colorPicker.BORDER_COLOR:
              return (this.handleBorderColor)
           }
         }
      }
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
      <div className={this.props.className}>
        <SketchPicker style={{'box-shadow':'none'}} color={kindOfColor()} onChangeComplete={kindsOfcolorPicker()}/>
        <div className={styles.closer} onClick={this.props.releaseDialog}>닫기</div>
      </div>
    )
  }

  getCloserStyle(){
    return{

    }
  }

  handleFillColor(color){
    this.props.setAssetFillColor(color.hex);
  };

  handleBorderColor(color){
    this.props.setAssetBorderColor(color.hex);
  };
  handleTextColor(color){
    this.props.setAssetTextColor(color.hex);
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
    currentAsset: state.editor.slides[state.editor.selectedSlide].assets[getAssetIndex(state, state.editor.slides[state.editor.selectedSlide].selectedAsset)]
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...assetsActions, ...uiActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
