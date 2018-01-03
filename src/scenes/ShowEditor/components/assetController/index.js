import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'services/editor/asset/assetTypes';

import TextController from './components/textController';
import VideoController from './components/videoController';
import ImageController from './components/imageController';
import ShapeController from './components/shapeController';
import BasicController from './components/basicController';

import styles from './style.css';

// Refactoring
// controller 틀 중복코드 제거 필요
class AssetController extends React.Component {
    constructor(prop) {
        super(prop);
    }
    renderController(selectedAsset) {
            switch (this.props.selectedAsset.type) {
                case actions.TYPE_TEXT:
                    return(
                            <TextController font = {this.props.selectedAsset.style['font-family']}
                                            fontSize = {parseInt(this.props.selectedAsset.style['font-size'])}
                                            sort = {this.props.selectedAsset.style['text-align']}
                                            bold = {this.props.selectedAsset.style['font-weight']}
                                            underline = {this.props.selectedAsset.style['text-decoration']}
                                            italic = {this.props.selectedAsset.style['font-style']}
                                            strikethrough = {this.props.selectedAsset.style['text-decoration']}
                                            textColor = {this.props.selectedAsset.style.color}
                                            textCharacterSpacing={parseInt(this.props.selectedAsset.style['letter-spacing'])}
                                            textLineSpacing={this.props.selectedAsset.style['line-height']}/>
                    )
                case actions.TYPE_VIDEO:
                    return(
                            <VideoController url = {this.props.selectedAsset.value} preview={this.props.selectedAsset.preview} />
                    )
                case actions.TYPE_SHAPE:
                    return(
                            <ShapeController shape={this.props.selectedAsset.value} />
                    )
                case actions.TYPE_IMAGE:
                    return(
                            <ImageController img_url = {this.props.selectedAsset.url}/>
                    )

                case actions.TYPE_CUSTOM:
                    return;
            }
    }

    render() {
        if(!!(this.props.selectedAsset)){
            return(
                <div className={this.props.className}>
                    {this.renderController(this.props.selectedAsset)}
                    <BasicController width = {parseInt(this.props.selectedAsset.width)}
                                     height = {parseInt(this.props.selectedAsset.height)}
                                     x = {parseInt(this.props.selectedAsset.x)}
                                     y = {parseInt(this.props.selectedAsset.y)}
                                     angle = {parseInt(this.props.selectedAsset.angle)}
                                     fillColor = {this.props.selectedAsset.style['background-color']}
                                     borderColor = {this.props.selectedAsset.style['border-color']}
                                     borderWeight = {parseInt(this.props.selectedAsset.style['border-width'])}
                                     style = {this.props.selectedAsset.style}/>
                </div>
            )
        }else{
            return(
                <div className={this.props.className}>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
  if(state.editor.slides.length>0&&!!state.editor.slides[state.editor.selectedSlide]&&state.editor.slides[state.editor.selectedSlide].selectedAsset!=undefined){
    let currentSlide = state.editor.slides[state.editor.selectedSlide];
    let selectedAssetIndex = currentSlide.selectedAsset;
    let selectedAsset = currentSlide.assets[selectedAssetIndex];
    return {
        currentSlide,
        selectedAsset,
        selectedAssetIndex
    }
  }else{
    return {
      currentSilde : undefined,
      selectedAsset: undefined
    }
  }
}
export default connect(mapStateToProps)(AssetController);
