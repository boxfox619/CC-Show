import React from 'react';
import {connect} from 'react-redux';

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
        let renderSubController = () => {
            switch (selectedAsset.type) {
                case actions.TYPE_TEXT:
                    return (
                        <TextController font={selectedAsset.style['font-family']}
                                        fontSize={parseInt(selectedAsset.style['font-size'])}
                                        sort={selectedAsset.style['text-align']}
                                        bold={selectedAsset.style['font-weight']}
                                        underline={selectedAsset.style['text-decoration']}
                                        italic={selectedAsset.style['font-style']}
                                        strikethrough={selectedAsset.style['text-decoration']}
                                        textColor={selectedAsset.style.color}
                                        textCharacterSpacing={parseInt(selectedAsset.style['letter-spacing'])}
                                        textLineSpacing={selectedAsset.style['line-height']}/>
                    )
                case actions.TYPE_VIDEO:
                    return (
                        <VideoController url={selectedAsset.value} preview={selectedAsset.preview}/>
                    )
                case actions.TYPE_SHAPE:
                    return (
                        <ShapeController shape={selectedAsset.value}/>
                    )
                case actions.TYPE_IMAGE:
                    return (
                        <ImageController img_url={selectedAsset.url}/>
                    )
                case actions.TYPE_CUSTOM:
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
                                     onChangeAttribute = {this.onChangeAttribute}/>
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

    onChangeAttribute(attrName, attr) {
        this.props.setSelectedAssetAttribute(attrName, attr);
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
export default connect(mapStateToProps)(AssetController);
