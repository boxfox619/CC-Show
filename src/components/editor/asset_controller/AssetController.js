import React from 'react';
import {
    connect
} from 'react-redux';

import * as actions from '../../../actions/assets';

import TextController from './TextController';
import VideoController from './VideoController';
import ImageController from './ImageController';
import ShapeController from './ShapeController';

class AssetController extends React.Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        switch (this.props.type) {
            case Text:
                <TextController width = {this.props.width}
                                height = {this.props.height}
                                x = {this.props.x}
                                y = {this.props.y}
                                angle = {this.props.angle}
                                font = {this.props.font}
                                fontSize = {this.props.fontSize}
                                sort = {this.props.sort}
                                bold = {this.props.bold}
                                underline = {this,props.underline}
                                italic = {this.pros.italic}
                                fill_color = {this.props.fill_color}
                                edge = {this.props.edge}/>
                break;
            case Video:
                <VideoController width = {this.props.width}
                                height = {this.props.height}
                                x = {this.props.x}
                                y = {this.props.y}
                                angle = {this.props.angle}/>
                break;
            case Shape:
                <ShapeController width = {this.props.width}
                                height = {this.props.height}
                                x = {this.props.x}
                                y = {this.props.y}
                                angle = {this.props.angle}/>
                break;
            case Image:
                <ImageController width = {this.props.width}
                                height = {this.props.height}
                                x = {this.props.x}
                                y = {this.props.y}
                                angle = {this.props.angle}/>
                break;
            default:
                break;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        type: state.editor.slides.assets[state.editor.slides.selectedAsset].type,
        width: state.editor.slides.assets[state.editor.slides.selectedAsset].width,
        height: state.editor.slides.assets[state.editor.slides.selectedAsset].height,
        x: state.editor.slides.assets[state.editor.slides.selectedAsset].x,
        y: state.editor.slides.assets[state.editor.slides.selectedAsset].y,
        angle: state.editor.slides.assets[state.editor.slides.selectedAsset].angle,
        font : state.editor.slides.assets[state.editor.slides.selectedAsset].font,
        size : state.editor.slides.assets[state.editor.slides.selectedAsset].fontSize,
        sort : state.editor.slides.assets[state.editor.slides.selectedAsset].sort,
        bold : state.editor.slides.assets[state.editor.slides.selectedAsset].bold,
        underline : state.editor.slides.assets[state.editor.slides.selectedAsset].underline,
        italic : state.editor.slides.assets[state.editor.slides.selectedAsset].italic,
        fill_color : state.editor.slides.assets[state.editor.slides.selectedAsset].fill_color,
        edge : state.editor.slides.assets[state.editor.slides.selectedAsset].edge
    }
}

function getAssetIndex(state, key) {
    let index = -1;
    state.editor.slides..forEach(function (asset, i) {
        if (asset.id === key) {
            index = i;
        }
    });
    return index;
}

export default connect(mapStateToProps)(AssetController);