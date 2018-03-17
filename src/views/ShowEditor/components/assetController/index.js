import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'services/editor/asset/actions';
import * as assetTypes from 'services/editor/asset/assetTypes';
import * as uiActions from 'services/ui/actions';

import TextController from './components/textController';
import VideoController from './components/videoController';
import ImageController from './components/imageController';
import ShapeController from './components/shapeController';
import BasicController from './components/basicController';

import styles from './style.css';
import {bindActionCreators} from "redux";

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
                            <TextController
                                style={selectedAsset.style}
                                onChangeAttribute={this.props.setSelectedAssetAttribute}
                                onChangeStyle={this.props.setSelectedAssetStyle}
                                showColorPicker={this.props.showColorPicker}/>
                    )
                case assetTypes.TYPE_VIDEO:
                    return (
                            <VideoController
                                url={selectedAsset.value}
                                preview={selectedAsset.preview}
                                onChangeAttribute={this.props.setSelectedAssetAttribute}/>
                    )
                case assetTypes.TYPE_SHAPE:
                    return (
                        <ShapeController
                            shape={selectedAsset.value}
                            onChangeAttribute={this.onChangeAttribute}/>
                    )
                case assetTypes.TYPE_IMAGE:
                    return (
                        <ImageController
                            selectedAsset={this.props.selectedAsset}
                            onChangeImage={this.props.setSelectedAssetImage}
                            onChangeAttribute={this.props.setSelectedAssetAttribute}/>
                    )
                case assetTypes.TYPE_CUSTOM:
                    return;
            }
        };
        if (!!selectedAsset)
            return (
                <div>
                    {renderSubController()}
                    <BasicController
                        width={parseInt(selectedAsset.width)}
                        height={parseInt(selectedAsset.height)}
                        x={parseInt(selectedAsset.x)}
                        y={parseInt(selectedAsset.y)}
                        angle={parseInt(selectedAsset.angle)}
                        backgroundColor={selectedAsset.style['background-color']}
                        borderColor={selectedAsset.style['border-color']}
                        borderWidth={parseInt(selectedAsset.style['border-width'])}
                        style={selectedAsset.style}
                        onChangeAttribute={this.props.setSelectedAssetAttribute}
                        onChangeStyle={this.props.setSelectedAssetStyle}
                        showColorPicker={this.props.showColorPicker}/>
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
    if (state.editor.slides.length > 0 && !!state.editor.slides[state.editor.selectedSlide] && state.editor.slides[state.editor.selectedSlide].selectedAsset != undefined) {
        let currentSlide = state.editor.slides[state.editor.selectedSlide];
        let selectedAssetIndex = currentSlide.selectedAsset;
        let selectedAsset = currentSlide.assets[selectedAssetIndex];
        return {
            currentSlide,
            selectedAsset,
            selectedAssetIndex
        }
    } else {
        return {
            currentSilde: undefined,
            selectedAsset: undefined
        }
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...actions,
        ...uiActions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetController);
