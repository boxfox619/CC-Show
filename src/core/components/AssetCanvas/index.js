import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as CanvasActionService from './services/canvas.action.service';
import AssetRenderer from "./components/AssetRenderer";

const ASSET_ACTION_MOVE = 'move';
const ASSET_ACTION_RESIZE = 'resize';
const ASSET_ACTION_NONE = 'none';

export default class AssetCanvas extends Component {

    static propTypes = {
        className: PropTypes.string,
        assets: PropTypes.array.isRequired,
        onModified: PropTypes.func.isRequired,
        selectedAssetId: PropTypes.number,
        onAssetSelected: PropTypes.func.isRequired,
        onChangeAttributes: PropTypes.func.isRequired
    };

    props = {
        className: '',
        assets: [],
        onModified: () => {
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            mouseAction: ASSET_ACTION_NONE,
            doubleClicked: false,
            xInElement: 0,
            yInElement: 0,
            selectedAssetId: undefined
        };
    }

    render() {
        return (
            <AssetRenderer
                className={this.props.className}
                handleDoubleClickItem={this.handleDoubleClickItem}
                handleMouseDown={this.handleMouseDown}
                handleMouseRelease={this.handleMouseRelease}
                handleMouseMove={this.handleMouseMove}/>
        );
    }

    handleMouseMove = (e) => {
        let currentAsset = this.props.assets.find(a => a.id === this.props.selectedAssetId);
        if (!!currentAsset && this.state.mouseAction !== ASSET_ACTION_NONE) {
            if (this.state.selectedAsset.type === 'ASSET_TYPE_VIDEO' && this.state.selectedAsset.preview) {
                this.setState({mouseAction: ASSET_ACTION_NONE});
                return;
            }
            if (this.state.mouseAction === ASSET_ACTION_MOVE) {
                let result = CanvasActionService.move(e, this.state, currentAsset);
                this.props.onChangeAttributes(result.attrs);
                this.setState(result.state);
            } else if (this.state.mouseAction === ASSET_ACTION_RESIZE) {
                let result = CanvasActionService.resize(e, this.state, this.props.assets, currentAsset);
                if (!!result) {
                    this.props.onChangeAttributes(result.attrs);
                    this.setState(result.state);
                }
            }
            this.props.onModified();
        }
    };

    handleDoubleClickItem = () => {
        this.setState({doubleClicked: true});
    };

    handleMouseDown = (e) => {
        let state = CanvasActionService.down(e, this.state);
        this.setState(state);
        this.props.onAssetSelected(state.selectedAssetId);
        this.props.onModified();
    };

    handleMouseRelease = () => {
        this.setState({mouseAction: 'none'});
    };
}
