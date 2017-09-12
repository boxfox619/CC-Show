import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../assetTypes';

import TextController from './TextController';
import VideoController from './VideoController';
import ImageController from './ImageController';
import ShapeController from './ShapeController';
import BasicController from './BasicController';


import styles from './AssetController.css';

class AssetController extends React.Component {
    constructor(prop) {
        super(prop);
    }

    ControllerSelector(selectedAsset) {
            switch (this.props.currentSilde.assets[selectedAsset].type) {
                case actions.TYPE_TEXT:
                    return(
                            <TextController font = {this.props.currentSilde.assets[selectedAsset].style.text.font}
                                            fontSize = {this.props.currentSilde.assets[selectedAsset].style.text.fontSize}
                                            sort = {this.props.currentSilde.assets[selectedAsset].style.text.sort}
                                            bold = {this.props.currentSilde.assets[selectedAsset].style.text.fontBold}
                                            underline = {this.props.currentSilde.assets[selectedAsset].style.text.fontUnderline}
                                            italic = {this.props.currentSilde.assets[selectedAsset].style.text.fontItalic}
                                            strikethrough = {this.props.currentSilde.assets[selectedAsset].style.text.fontStrikethrough}
                                            textColor = {this.props.currentSilde.assets[selectedAsset].style.text.textColor}/>
                    )
                case actions.TYPE_VIDEO:
                    return(
                            <VideoController url = {this.props.currentSilde.assets[selectedAsset].style.video.url}
                                             videoController = {this.props.currentSilde.assets[selectedAsset].style.video.videoController}
                                             videoAutoplay = {this.props.currentSilde.assets[selectedAsset].style.video.videoAutoplay}
                                             videoLoop = {this.props.currentSilde.assets[selectedAsset].style.video.videoLoop} />
                    )
                case actions.TYPE_SHAPE:
                    return(
                            <ShapeController/>
                    )
                case actions.TYPE_IMAGE:
                    return(
                            <ImageController img_url = {this.props.currentSilde.assets[selectedAsset].url}/>
                    )
            }
    }

    render() {
        let selectedAsset=this.props.currentSilde.selectedAsset-1;
        if(!!(selectedAsset+1)){
            return(
                <div className={this.props.className}>
                    {this.ControllerSelector(selectedAsset)}
                    <BasicController width = {parseInt(this.props.currentSilde.assets[selectedAsset].width)}
                                     height = {parseInt(this.props.currentSilde.assets[selectedAsset].height)}
                                     x = {parseInt(this.props.currentSilde.assets[selectedAsset].x)}
                                     y = {parseInt(this.props.currentSilde.assets[selectedAsset].y)}
                                     angle = {parseInt(this.props.currentSilde.assets[selectedAsset].angle)}
                                     fillColor = {this.props.currentSilde.assets[selectedAsset].style.fillColor}
                                     borderColor = {this.props.currentSilde.assets[selectedAsset].style.borderColor}
                                     borderWeight = {this.props.currentSilde.assets[selectedAsset].style.borderWeight}
                                     styles = {this.props.currentSilde.assets[selectedAsset].style}/>
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
    return {
        currentSilde : state.editor.slides[state.editor.selectedSlide]
    }
}

function getAssetIndex(state, key) {
    let index = -1;
    state.editor.slides.forEach(function (asset, i) {
        if (asset.id === key) {
            index = i;
        }
    });
    return index;
}

export default connect(mapStateToProps)(AssetController);
