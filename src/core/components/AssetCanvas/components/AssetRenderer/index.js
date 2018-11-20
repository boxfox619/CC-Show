import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Asset from '../Asset';
import Guideline from '../Guideline';
import * as CanvasGuidelineService from "../../services/canvas.guideline.service";

export default class AssetRenderer extends Component {
    static propTypes = {
        handleDoubleClickItem: PropTypes.func.isRequired,
        handleMouseDown: PropTypes.func.isRequired,
        handleMouseRelease: PropTypes.func.isRequired,
        handleMouseMove: PropTypes.func.isRequired,
        assets: PropTypes.array
    };

    constructor(props) {
        super(props);
        this.state = {
            hoveredAsset: -1
        }
    }

    render() {
        return (
            <asset-renderer
                className={this.props.className}
                onDoubleClick={this.props.handleDoubleClickItem}
                onMouseDown={this.props.handleMouseDown}
                onMouseLeave={this.props.handleMouseRelease}
                onMouseMove={this.props.handleMouseMove}
                onMouseUp={this.props.handleMouseRelease}>
                {this.renderingAssets(this.props.assets)}
                {this.state.hoveredAsset >= 0 && this.renderingGuideLine(this.props.assets)}
            </asset-renderer>
        );
    }

    renderingAssets = (assets) => {
        return assets.map((asset, idx) => {
            let isSelected = false;
            if (this.props.selectedAssetIndex === idx) {
                isSelected = true;
            }
            return (
                <Asset
                    key={asset.id}
                    attribute={asset}
                    isSelected={isSelected}
                    onMouseHover={(hover) => this.setState({hoveredAsset: hover ? idx : -1})}
                    doubleClicked={this.state.doubleClicked}
                    onChangeAttributes={this.props.onChangeAttributes}
                />
            )
        })
    };

    renderingGuideLine = (assets) => {
        if (this.state.hoveredAsset >= 0) {
            let guidelines = CanvasGuidelineService.calGuideLine(assets, this.state.hoveredAsset);
            return guidelines.map((guideline) => {
                return (<Guideline attribute={guideline}/>)
            })
        }
    }

}