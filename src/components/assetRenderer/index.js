import React from 'react';
import Asset from 'components/Asset';

const propTypes = {
    className: React.PropTypes.string.isRequired,
    assets: React.PropTypes.array.isRequired,
    onModified: React.PropTypes.func.isRequired,
    selectedAsset: React.PropTypes.number,
    currentSlide: React.PropTypes.number.isRequired,
    assetSelected: React.PropTypes.func.isRequired,
    assetDeselected: React.PropTypes.func.isRequired,
    onChangeAttributes: React.PropTypes.func.isRequired
}


const defaultProps = {
    className: '',
    currentSlide: 0,
    onModified: () => {
    }
}

function getAssetNode(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node.tagName == parent) {
            return node;
        }
        node = node.parentNode;
    }
    return null;
}

function clearSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection) {
        document.selection.empty();
    }
}

class AssetRenderer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mouseAction: 'none'
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseRelese = this.handleMouseRelese.bind(this);
        this.handleDoubleClickItem = this.handleDoubleClickItem.bind(this);

        // this.submit = this.submit.bind(this);
    }

    render() {
        let renderingAssets = (assets) => {
            let idx = 0;
            return assets.map((asset) => {
                let assetKey = this.props.currentSlide + '-' + asset.id + '-' + this.props.currentSlide;
                let isSelected = false;
                if (this.props.selectedAsset == idx++) {
                    this.selectedAsset = asset;
                    isSelected = true;
                }
                return <Asset key={assetKey} isSelected={isSelected} doubleClicked={this.state.doubleClicked}
                              handleValueChange={val => this.props.onChangeAttributes({'value': val})}
                              attribute={asset}/>
            })
        };
        return (
            <scanvas className={this.props.className}
                     onMouseDown={this.handleMouseDown}
                     onMouseMove={this.handleMouseMove}
                     onMouseUp={this.handleMouseRelese}
                     onMouseLeave={this.handleMouseRelese}
                     onDoubleClick={this.handleDoubleClickItem}>
                {renderingAssets(this.props.assets)}
            </scanvas>
        );
    }

    handleDoubleClickItem(e) {
        this.setState({doubleClicked: true});
    }

    handleMouseMove(e) {
        if (this.props.selectedAsset != undefined && this.mouseAction != 'none') {
            if (this.selectedAsset.type == 'ASSET_TYPE_VIDEO' && this.selectedAsset.preview) {
                this.mouseAction = 'none';
                return;
            }
            if (this.mouseAction == 'move') {
                let x = e.pageX;
                let y = e.pageY;
                let afterX = parseInt(this.percentWidthToPixel(this.selectedAsset.x)) + (x - this.xInElement) + 'px';
                let afterY = parseInt(this.percentHeightToPixel(this.selectedAsset.y)) + (y - this.yInElement) + 'px';
                this.xInElement = x;
                this.yInElement = y;
                if (this.selectedAsset.x.endsWith('%')) {
                    afterX = this.pixelWidthToPercent(afterX);
                    afterY = this.pixelHeightToPercent(afterY);
                }
                this.props.onChangeAttribute('x', afterX);
                this.props.onChangeAttribute('y', afterY);
            } else if (this.mouseAction == 'resize') {
                let devX = (this.resizeTarget.includes('left')) ? this.xInElement - e.pageX : e.pageX - this.xInElement;
                let devY = (this.resizeTarget.includes('top')) ? this.yInElement - e.pageY : e.pageY - this.yInElement;
                let currentX = parseInt(this.percentHeightToPixel(this.selectedAsset.x));
                let currentY = parseInt(this.percentWidthToPixel(this.selectedAsset.y));
                let currentWidth = parseInt(this.percentWidthToPixel(this.selectedAsset.width));
                let currentHeight = parseInt(this.percentHeightToPixel(this.selectedAsset.height));
                let afterHeight = currentHeight + devY + 'px';
                let afterWidth = currentWidth + devX + 'px';
                let afterX = currentX - devX + 'px';
                let afterY = currentY - devY + 'px';
                if (parseInt(afterWidth) < 5 || parseInt(afterHeight) < 5) {
                    return;
                }
                if (this.selectedAsset.x.endsWith('%')) {
                    afterY = this.pixelHeightToPercent(afterY);
                    afterX = this.pixelWidthToPercent(afterX);
                }
                if (this.selectedAsset.width.endsWith('%')) {
                    afterHeight = this.pixelHeightToPercent(afterHeight);
                    afterWidth = this.pixelWidthToPercent(afterWidth);
                }
                let modifyAttrs;
                switch (this.resizeTarget) {
                    case 'topleft':
                        modifyAttrs = {'height': afterHeight, 'y': afterY, 'width': afterWidth, 'x': afterX};
                        break;
                    case 'topright':
                        modifyAttrs = {'height': afterHeight, 'y': afterY, 'width': afterWidth};
                        break;
                    case 'bottomleft':
                        modifyAttrs = {'height': afterHeight, 'width': afterWidth, 'x': afterX};
                        break;
                    case 'bottomright':
                        modifyAttrs = {'height': afterHeight, 'width': afterWidth};
                        break;
                    case 'top':
                        modifyAttrs = {'height': afterHeight, 'y': afterY};
                        break;
                    case 'left':
                        modifyAttrs = {'width': afterWidth, 'x': afterX};
                        break;
                    case 'bottom':
                        modifyAttrs = {'height': afterHeight};
                        break;
                    case 'right':
                        modifyAttrs = {'width': afterWidth};
                        break;
                }
                this.props.onChangeAttributes(modifyAttrs);
                this.xInElement = e.pageX;
                this.yInElement = e.pageY;
            }
        }
        this.props.onModified();
    }

    handleMouseDown(e) {
        document.activeElement.blur();
        this.mouseDowned = true;

        if (!!getAssetNode('ASSET', e.target)) {
            if (this.selectedAssetId == getAssetNode('ASSET', e.target).id && this.state.doubleClicked) {
                return;
            }
            if (e.target.tagName == 'COL-RESIZER') {
                return;
            }
            this.setState({doubleClicked: false});
            this.selectedAssetId = getAssetNode('ASSET', e.target).id;
            this.props.assetSelected(this.selectedAssetId);
            this.mouseAction = 'move';
            if (e.target.tagName == 'SELECTORDOT' || e.target.tagName == 'SELECTORLINE') {
                this.mouseAction = 'resize';
                this.resizeTarget = e.target.getAttribute('target');
            }
            this.xInElement = e.pageX;
            this.yInElement = e.pageY;
            e.preventDefault();
        } else {
            this.setState({doubleClicked: false});
            this.selectedAssetId = undefined;
            this.props.assetDeselected();
            e.preventDefault();
            clearSelection();
        }
        this.props.onModified();
    }

    handleMouseRelese(e) {
        this.mouseAction = 'none';
    }

    percentHeightToPixel(val) {
        if (val.endsWith('%')) {
            return parseInt(val) / 100 * parseInt(this.height) + 'px';
        }
        return val;
    }

    percentWidthToPixel(val) {
        if (val.endsWith('%')) {
            return parseInt(val) / 100 * parseInt(this.width) + 'px';
        }
        return val;
    }


    pixelHeightToPercent(val) {
        if (val.endsWith('px')) {
            return parseInt(val) / parseInt(this.height) * 100 + '%';
        }
        return val;
    }

    pixelWidthToPercent(val) {
        if (val.endsWith('px')) {
            return parseInt(val) / parseInt(this.width) * 100 + '%';
        }
        return val;
    }
}

AssetRenderer.propTypes = propTypes;
AssetRenderer.defaultProps = defaultProps;

export default AssetRenderer;
