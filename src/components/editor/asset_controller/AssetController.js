import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../assetTypes';

import TextController from './TextController';
import VideoController from './VideoController';
import ImageController from './ImageController';
import ShapeController from './ShapeController';
import BasicController from './BasicController';
import Asset from '../assets/Asset';

import styles from './AssetController.css';

class AssetController extends React.Component {
    constructor(prop) {
        super(prop);
    }
    ControllerSelector(selectedAsset) {
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
                                            textLineSpacing={parseInt(this.props.selectedAsset.style['line-height'])}/>
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
        if(this.props.isSelected){
            console.log('isSelected');
        }
        if(!!(this.props.selectedAsset)){
            return(
                <div className={this.props.className}>
                    {this.ControllerSelector(this.props.selectedAsset)}
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
      selectedAsset: undefined,
      selectedAsset : undefined
    }
  }
}
export default connect(mapStateToProps)(AssetController);
