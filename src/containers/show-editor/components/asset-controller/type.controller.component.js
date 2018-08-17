import React from 'react';
import * as assetTypes from 'constants/assetTypes';
import TextController from './components/text-controller';
import VideoController from './components/video-controller';
import ImageController from './components/image-controller';
import ShapeController from './components/shape-controller';
const propTypes = {
    selectedAsset: React.PropTypes.object.isRequired,
    onChangeAttribute: React.PropTypes.func.isRequired,
    onChangeStyle: React.PropTypes.func.isRequired,
    showColorPicker: React.PropTypes.func.isRequired
}

export default function AssetTypeController({selectedAsset, onChangeAttribute, onChangeStyle, showColorPicker}) {
    switch (selectedAsset.type) {
        case assetTypes.TYPE_TEXT:
            return (
              <TextController
                onChangeAttribute={onChangeAttribute}
                onChangeStyle={onChangeStyle}
                showColorPicker={showColorPicker}
                style={selectedAsset.style}
                />
            )
        case assetTypes.TYPE_VIDEO:
            return (
              <VideoController
                onChangeAttribute={onChangeAttribute}
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
                onChangeImage={(url)=>onChangeAttribute('value', url)}
                />
            )
        case assetTypes.TYPE_CUSTOM:
            return;
    }
}

AssetTypeController.propTypes = propTypes;