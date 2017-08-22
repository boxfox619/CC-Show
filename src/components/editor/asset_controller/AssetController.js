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
        let selectedAsset=this.props.currentSilde.selectedAsset-1;
        console.log(this.props.currentSilde.assets[selectedAsset]);
        if(!!(selectedAsset+1)){
            console.log(this.props.currentSilde.assets[selectedAsset].type);
            switch (this.props.currentSilde.assets[selectedAsset].type) {
                case actions.TYPE_TEXT:
                    return(
                        <div>
                            <BasicController width = {this.props.currentSilde.assets[selectedAsset].width}
                                             height = {this.props.currentSilde.assets[selectedAsset].height}
                                             x = {this.props.currentSilde.assets[selectedAsset].x}
                                             y = {this.props.currentSilde.assets[selectedAsset].y}
                                             angle = {this.props.currentSilde.assets[selectedAsset].angle}/>
                            <TextController font = {this.props.currentSilde.assets[selectedAsset].font}
                                            fontSize = {this.props.currentSilde.assets[selectedAsset].fontSize}
                                            sort = {this.props.currentSilde.assets[selectedAsset].sort}
                                            bold = {this.props.currentSilde.assets[selectedAsset].bold}
                                            underline = {this.props.currentSilde.assets[selectedAsset].underline}
                                            italic = {this.props.currentSilde.assets[selectedAsset].italic}
                                            fill_color = {this.props.currentSilde.assets[selectedAsset].fill_color}
                                            edge = {this.props.currentSilde.assets[selectedAsset].edge}/>

                        </div>
                    )
                case actions.TYPE_VIDEO:
                    return(
                        <div>
                            <BasicController width = {this.props.currentSilde.assets[selectedAsset].width}
                                             height = {this.props.currentSilde.assets[selectedAsset].height}
                                             x = {this.props.currentSilde.assets[selectedAsset].x}
                                             y = {this.props.currentSilde.assets[selectedAsset].y}
                                             angle = {this.props.currentSilde.assets[selectedAsset].angle}/>
                            <VideoController url = {this.props.currentSilde.assets[selectedAsset].url}
                                             controller = {this.props.currentSilde.assets[selectedAsset].controller}
                                             autoplay = {this.props.currentSilde.assets[selectedAsset].autoplay}
                                             loop = {this.props.currentSilde.assets[selectedAsset].loop} />
                        </div>
                    )
                case actions.TYPE_SHAPE:
                    return(
                        <div>
                            <BasicController width = {this.props.currentSilde.assets[selectedAsset].width}
                                             height = {this.props.currentSilde.assets[selectedAsset].height}
                                             x = {this.props.currentSilde.assets[selectedAsset].x}
                                             y = {this.props.currentSilde.assets[selectedAsset].y}
                                             angle = {this.props.currentSilde.assets[selectedAsset].angle}/>
                            <ShapeController/>
                        </div>
                    )
                case actions.TYPE_IMAGE:
                    return(
                        <div>
                            <BasicController width = {this.props.currentSilde.assets[selectedAsset].width}
                                             height = {this.props.currentSilde.assets[selectedAsset].height}
                                             x = {this.props.currentSilde.assets[selectedAsset].x}
                                             y = {this.props.currentSilde.assets[selectedAsset].y}
                                             angle = {this.props.currentSilde.assets[selectedAsset].angle}/>
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
                <div className={this.props.className}>
                    <input type="text" value={this.props.currentSilde.selectedAsset}/>
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
