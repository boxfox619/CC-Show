import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'services/editor/asset/actions';
import * as assetTypes from 'services/editor/asset/assetTypes';
import * as uiActions from 'services/ui/actions';

import TextController from './components/text-controller';
import VideoController from './components/video-controller';
import ImageController from './components/image-controller';
import ShapeController from './components/shape-controller';
import BasicController from './components/basic-controller';

import styles from './style.css';
import {bindActionCreators} from 'redux';

const propTypes = {
  className: React.PropTypes.string.isRequired,
  setSelectedAssetAttribute: React.PropTypes.func.isRequired,
  setSelectedAssetStyle: React.PropTypes.func.isRequired,
  showColorPicker: React.PropTypes.func.isRequired,
  setSelectedAssetAttribute: React.PropTypes.func.isRequired,
}

class AssetController extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      text: true,
      video: true
    }
  }

  renderController(selectedAsset) {
    let renderSubController = () => {
      switch (selectedAsset.type) {
        case assetTypes.TYPE_TEXT:
          return (
            <TextController onChangeAttribute={this.props.setSelectedAssetAttribute}
              onChangeStyle={this.props.setSelectedAssetStyle}
              showColorPicker={this.props.showColorPicker}
              style={selectedAsset.style}
            />
          )
        case assetTypes.TYPE_VIDEO:
          return (
            <VideoController
              onChangeAttribute={this.props.setSelectedAssetAttribute}
              preview={selectedAsset.preview}
              url={selectedAsset.value}
            />
          )
        case assetTypes.TYPE_SHAPE:
          return (
            <ShapeController
              onChangeAttribute={this.onChangeAttribute}
              shape={selectedAsset.value}
            />
          )
        case assetTypes.TYPE_IMAGE:
          return (
            <ImageController
              onChangeImage={(url)=>this.props.setSelectedAssetAttribute('value', url)}
            />
          )
        case assetTypes.TYPE_CUSTOM:
          return;
      }
    };
    if (selectedAsset)
      return (
        <div>
          {renderSubController()}
          <BasicController
            angle={parseInt(selectedAsset.angle)}
            backgroundColor={selectedAsset.style['background-color']}
            borderColor={selectedAsset.style['border-color']}
            borderWidth={parseInt(selectedAsset.style['border-width'])}
            height={parseInt(selectedAsset.height)}
            onChangeAttribute={this.props.setSelectedAssetAttribute}
            onChangeStyle={this.props.setSelectedAssetStyle}
            showColorPicker={this.props.showColorPicker}
            style={selectedAsset.style}
            width={parseInt(selectedAsset.width)}
            x={parseInt(selectedAsset.x)}
            y={parseInt(selectedAsset.y)}
          />
        </div>
      )
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className={styles.title}>
          <div>Asset Controller</div>
        </div>
        {this.renderController(this.props.selectedAsset)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.editor.slides.length > 0 && !!state.editor.slides[state.editor.selectedSlide] && state.editor.slides[state.editor.selectedSlide].selectedAssetIndex != undefined) {
    let currentSlide = state.editor.slides[state.editor.selectedSlide];
    let selectedAssetIndex = currentSlide.selectedAssetIndex;
    let selectedAsset = currentSlide.assets[selectedAssetIndex];
    return {
      currentSlide,
      selectedAsset,
      selectedAssetIndex
    }
  } else {
    return {
      currentSilde: undefined,
      selectedAssetIndex: undefined
    }
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...actions,
    ...uiActions
  }, dispatch);
}

AssetController.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AssetController);
