import React from 'react';
import Asset from 'components/Asset';

const propTypes = {
  className: React.PropTypes.string,
  assets: React.PropTypes.array.isRequired,
  onModified: React.PropTypes.func.isRequired,
  selectedAssetIndex: React.PropTypes.number,
  onAssetSelected: React.PropTypes.func.isRequired,
  onChangeAttributes: React.PropTypes.func.isRequired
}

const defaultProps = {
  className: '',
  onModified: () => {}
}

const TAG_ASSET = 'ASSET';
const TAG_COL_RESIZER = 'COL-RESIZER';
const TAG_SELECTORDOT = 'SELECTORDOT';
const TAG_SELECTORLINE = 'SELECTORLINE';

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

class AssetCanvas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouseAction: 'none',
      doubleClicked: false,
      xInElement: 0,
      yInElement: 0
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseRelese = this.handleMouseRelese.bind(this);
    this.handleDoubleClickItem = this.handleDoubleClickItem.bind(this);
  }

  render() {
    let renderingAssets = (assets) => {
      let idx = 0;
      return assets.map((asset) => {
        let isSelected = false;
        if (this.props.selectedAssetIndex == idx++) {
          this.selectedAsset = asset;
          isSelected = true;
        }
        return (<Asset
          key={asset.id}
          isSelected={isSelected}
          doubleClicked={this.state.doubleClicked}
          onChangeAttributes={this.props.onChangeAttributes}
          attribute={asset}
        />)
      })
    };
    return (
      <scanvas
        className={this.props.className}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseRelese}
        onMouseLeave={this.handleMouseRelese}
        onDoubleClick={this.handleDoubleClickItem}>
        {renderingAssets(this.props.assets)}
      </scanvas>
    );
  }

  handleDoubleClickItem() {
    this.setState({doubleClicked: true});
  }

  handleMouseMove(e) {
    if (this.props.selectedAssetIndex != undefined && this.state.mouseAction
        != 'none') {
      if (this.selectedAsset.type == 'ASSET_TYPE_VIDEO'
          && this.selectedAsset.preview) {
        this.setState({mouseAction: 'none'});
        return;
      }
      if (this.state.mouseAction == 'move') {
        let x = e.pageX;
        let y = e.pageY;
        let afterX = parseInt(this.percentWidthToPixel(this.selectedAsset.x))
            + (x - this.state.xInElement) + 'px';
        let afterY = parseInt(this.percentHeightToPixel(this.selectedAsset.y))
            + (y - this.state.yInElement) + 'px';
        this.setState({xInElement: x});
        this.setState({yInElement: y});
        if (this.selectedAsset.x.endsWith('%')) {
          afterX = this.pixelWidthToPercent(afterX);
          afterY = this.pixelHeightToPercent(afterY);
        }
        this.props.onChangeAttributes({'x': afterX, 'y': afterY});
      } else if (this.state.mouseAction == 'resize') {
        let devX = (this.resizeTarget.includes('left')) ? this.state.xInElement
            - e.pageX : e.pageX - this.state.xInElement;
        let devY = (this.resizeTarget.includes('top')) ? this.state.yInElement
            - e.pageY : e.pageY - this.state.yInElement;
        let currentX = parseInt(
            this.percentHeightToPixel(this.selectedAsset.x));
        let currentY = parseInt(this.percentWidthToPixel(this.selectedAsset.y));
        let currentWidth = parseInt(
            this.percentWidthToPixel(this.selectedAsset.width));
        let currentHeight = parseInt(
            this.percentHeightToPixel(this.selectedAsset.height));
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
            modifyAttrs = {
              'height': afterHeight,
              'y': afterY,
              'width': afterWidth,
              'x': afterX
            };
            break;
          case 'topright':
            modifyAttrs = {
              'height': afterHeight,
              'y': afterY,
              'width': afterWidth
            };
            break;
          case 'bottomleft':
            modifyAttrs = {
              'height': afterHeight,
              'width': afterWidth,
              'x': afterX
            };
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
        this.setState({xInElement: e.pageX});
        this.setState({yInElement: e.pageY});
      }
    }
    this.props.onModified();
  }

  handleMouseDown(e) {
    document.activeElement.blur();

    if (!!getAssetNode(TAG_ASSET, e.target)) {
      if (this.selectedAssetId == getAssetNode(TAG_ASSET, e.target).id
          && this.state.doubleClicked) {
        return;
      }
      if (e.target.tagName == TAG_COL_RESIZER) {
        return;
      }
      this.setState({doubleClicked: false});
      this.selectedAssetId = getAssetNode(TAG_ASSET, e.target).id;
      this.props.onAssetSelected(this.selectedAssetId);
      this.setState({mouseAction: 'move'});
      if (e.target.tagName == TAG_SELECTORDOT || e.target.tagName
          == TAG_SELECTORLINE) {
        this.setState({mouseAction: 'resize'});
        this.resizeTarget = e.target.getAttribute('target');
      }
      this.setState({xInElement: e.pageX});
      this.setState({yInElement: e.pageY});
      e.preventDefault();
    } else {
      this.setState({doubleClicked: false});
      this.selectedAssetId = undefined;
      this.props.onAssetSelected(undefined);
      e.preventDefault();
      clearSelection();
    }
    this.props.onModified();
  }

  handleMouseRelese() {
    this.setState({mouseAction: 'none'});
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

AssetCanvas.propTypes = propTypes;
AssetCanvas.defaultProps = defaultProps;

export default AssetCanvas;
