import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions/assets';

import TextController from './TextController';
import VideoController from './VideoController';
import ImageController from './ImageController';
import ShapeController from './ShapeController';
import BasicController from './BasicController';

class AssetController extends React.Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        switch (this.props.type) {
            case Text:
            return(
                <div>
                    <BasicController width = {this.props.width}
                                     height = {this.props.height}
                                     x = {this.props.x}
                                     y = {this.props.y}
                                     angle = {this.props.angle}/>
                    <TextController font = {this.props.font}
                                    fontSize = {this.props.fontSize}
                                    sort = {this.props.sort}
                                    bold = {this.props.bold}
                                    underline = {this.props.underline}
                                    italic = {this.pros.italic}
                                    fill_color = {this.props.fill_color}
                                    edge = {this.props.edge}/>

                </div>
            )
            case Video:
            return(
                <div>
                    <BasicController width = {this.props.width}
                                     height = {this.props.height}
                                     x = {this.props.x}
                                     y = {this.props.y}
                                     angle = {this.props.angle}/>
                    <VideoController url = {this.props.url}
                                     controller = {this.props.controller}
                                     autoplay = {this.props.autoplay}
                                     loop = {this.props.loop} />
                </div>
            )   
            case Shape:
            return(
                <div>
                    <BasicController width = {this.props.width}
                                     height = {this.props.height}
                                     x = {this.props.x}
                                     y = {this.props.y}
                                     angle = {this.props.angle}/>
                    <ShapeController/>
                </div>
            )
            case Image:
            return(
                <div>
                    <BasicController width = {this.props.width}
                                     height = {this.props.height}
                                     x = {this.props.x}
                                     y = {this.props.y}
                                     angle = {this.props.angle}/>
                    <ImageController/>
                </div>
            )
            default:
            return(
                    <BasicController/>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        type: state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].type,
        width: state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].width,
        height: state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].height,
        x: state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].x,
        y: state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].y,
        angle: state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].angle,
        font : state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].font,
        size : state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].fontSize,
        sort : state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].sort,
        bold : state.editor.slides.assets[state.editor.slides.selectedAsset].bold,
        underline : state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].underline,
        italic : state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].italic,
        fill_color : state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].fill_color,
        edge : state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].edge,
        url : state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].url,
        controller : state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].controller,
        autoplay : state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].autoplay,
        loop : state.editor.slides[state.editor.selectedSlide].assets[state.editor.slides[state.editor.selectedSlide].selectedAsset].loop
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
