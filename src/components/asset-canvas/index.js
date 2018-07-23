import React from 'react';
import Asset from './components/asset';
import Guideline from './components/guideline';
import * as CanvasActionService from './services/canvas.action.service';

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

class AssetCanvas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouseAction: 'none',
      doubleClicked: false,
      xInElement: 0,
      yInElement: 0,
      selectedAssetId: undefined
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseRelese = this.handleMouseRelese.bind(this);
    this.handleDoubleClickItem = this.handleDoubleClickItem.bind(this);
  }

  render() {
      let renderingAssets = (assets) => {
          return assets.map((asset, idx) => {
              let isSelected = false;
              if (this.props.selectedAssetIndex == idx) {
                  isSelected = true;
              }
              return (
                <Asset
                  attribute={asset}
                  doubleClicked={this.state.doubleClicked}
                  isSelected={isSelected}
                  key={asset.id}
                  onChangeAttributes={this.props.onChangeAttributes}
                  />
              )
          })
      };
      let renderingGuideLine = (assets) => {
          if (this.props.selectedAssetIndex > 0) {
              let guidelines = CanvasActionService.calGuideLine(assets, this.props.selectedAssetIndex);
              return guidelines.map((guideline) => {
                  return (<Guideline attribute={guideline} />)
              })
          }
      }
    return (
      <scanvas
        className={this.props.className}
        onDoubleClick={this.handleDoubleClickItem}
        onMouseDown={this.handleMouseDown}
        onMouseLeave={this.handleMouseRelese}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseRelese}
      >
        {renderingAssets(this.props.assets)}
        {renderingGuideLine(this.props.assets)}
      </scanvas>
    );
  }

  handleDoubleClickItem() {
    this.setState({doubleClicked: true});
  }

  handleMouseMove(e) {
    if (this.props.selectedAssetIndex != undefined && this.state.mouseAction != 'none') {
      if (this.state.selectedAsset.type == 'ASSET_TYPE_VIDEO' && this.state.selectedAsset.preview) {
        this.setState({mouseAction: 'none'});
        return;
      }
      if (this.state.mouseAction == 'move') {
        let result = CanvasActionService.move(e, this.state, this.props.assets[this.props.selectedAssetIndex]);
        this.props.onChangeAttributes(result.attrs);
        this.setState(result.state);
      } else if (this.state.mouseAction == 'resize') {
        let result = CanvasActionService.resize(e, this.state, this.props.assets[this.props.selectedAssetIndex]);
          if (!!result) {
              this.props.onChangeAttributes(result.attrs);
              this.setState(result.state);
          }
      }
      this.props.onModified();
    }
  }

  handleMouseDown(e) {
    let state = CanvasActionService.down(e, this.state);
    this.setState(state);
    this.props.onAssetSelected(state.selectedAssetId);
    this.props.onModified();
  }

  handleMouseRelese() {
    this.setState({mouseAction: 'none'});
  }
}

AssetCanvas.propTypes = propTypes;
AssetCanvas.defaultProps = defaultProps;

export default AssetCanvas;
