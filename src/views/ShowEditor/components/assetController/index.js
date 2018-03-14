import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'services/editor/asset/actions';
import * as imageActions from 'services/editor/asset/image/actions';
import * as assetTypes from 'services/editor/asset/assetTypes';

import TextController from './components/textController';
import VideoController from './components/videoController';
import ImageController from './components/imageController';
import ShapeController from './components/shapeController';
import BasicController from './components/basicController';

import styles from './style.css';
import {bindActionCreators} from "redux";

// Refactoring
// controller 틀 중복코드 제거 필요
class AssetController extends React.Component {
    constructor(prop) {
        super(prop);
    }

    renderController(selectedAsset) {
        let renderSubController = () => {
            switch (selectedAsset.type) {
                case assetTypes.TYPE_TEXT:
                    return (
                        <TextController style={selectedAsset.style}
                                        onChangeAttribute={this.props.setSelectedAssetAttribute}
                                        onChangeStyle={this.props.setSelectedAssetStyle}/>
                    )
                case assetTypes.TYPE_VIDEO:
                    return (
                        <VideoController
                            onChangeAttribute={this.props.setSelectedAssetAttribute}
                            url={selectedAsset.value}
                            preview={selectedAsset.preview}/>
                    )
                case assetTypes.TYPE_SHAPE:
                    return (
                        <ShapeController shape={selectedAsset.value}
                                         onChangeAttribute={this.onChangeAttribute}/>
                    )
                case assetTypes.TYPE_IMAGE:
                    return (
                        <ImageController img_url={selectedAsset.url}
                                         setAssetImage={this.props.setAssetImage}
                                         selectedAsset={this.props.selectedAsset}/>
                    )
                case assetTypes.TYPE_CUSTOM:
                    return;
            }
        };
        if (!!selectedAsset)
            return (
                <div>
                    {renderSubController(selectedAsset)}
                    <BasicController width={parseInt(selectedAsset.width)}
                                     height={parseInt(selectedAsset.height)}
                                     x={parseInt(selectedAsset.x)}
                                     y={parseInt(selectedAsset.y)}
                                     angle={parseInt(selectedAsset.angle)}
                                     fillColor={selectedAsset.style['background-color']}
                                     borderColor={selectedAsset.style['border-color']}
                                     borderWeight={parseInt(selectedAsset.style['border-width'])}
                                     style={selectedAsset.style}
                                     onChangeAttribute={this.props.setSelectedAssetAttribute}
                                     onChangeStyle={this.props.setSelectedAssetStyle}/>
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
        ...imageActions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetController);
