import React from 'react';

import ContextMenu from './components/context-menu';
import TitleField from './components/title-field';
import AssetCanvas from 'components/asset-canvas';

const propTypes = {
  onModified: React.PropTypes.func.isRequired,
  showData: React.PropTypes.object.isRequired,
  editorActions: React.PropTypes.object.isRequired
}

class SlideContext extends React.Component {

  constructor(props) {
    super(props);

    this.state = {doubleClicked: false};
  }

  render() {
    let showData = this.props.showData;
    let selectedAssetIndex = -1;
    let assets = [];
    let currentSlide = showData.slides[showData.selectedSlide];
    if (showData.slides.length > 0 && !!currentSlide) {
      selectedAssetIndex = currentSlide.selectedAssetIndex;
      assets = currentSlide.assets;
    }
    return (
      <div className={this.props.className}
        id={'SlideContext'}
      >
        <TitleField
          currentSlideIndex={showData.selectedSlide}
          onChange={this.props.editorActions.renameCurrentSlide}
          title={currentSlide.name}
        />
        <ContextMenu
          actions={this.props.editorActions}
          cachedAsset={this.props.showData.cachedAsset}
        />
        <AssetCanvas
          assets={assets}
          onAssetSelected={this.props.editorActions.assetSelected}
          onChangeAttributes={this.props.editorActions.setSelectedAssetAttributes}
          onModified={this.props.onModified}
          selectedAssetIndex={selectedAssetIndex}
        />
      </div>
    );
  }
}

SlideContext.propTypes = propTypes;

export default SlideContext;
