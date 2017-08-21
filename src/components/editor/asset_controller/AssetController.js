import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../assetTypes';

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
        if(!!this.props.currentSilde.selectedAsset){
            switch (this.props.type) {
                case actionTypes.ASSET_TYPE_TEXT:
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
                case actionTypes.ASSET_TYPE_VIDEO:
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
                case actionTypes.ASSET_TYPE_SHAPE:
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
                case actionTypes.ASSET_TYPE_IMAGE:
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
        }else{
            return(
                <div>
                    <input type="text" value={this.props.currentSilde.selectedAsset}/>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    //let selectedAsset = state.editor.slides[state.editor.selectedSlide].selectedAsset;
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
