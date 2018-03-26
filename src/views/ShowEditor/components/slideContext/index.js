import React from 'react';

import ContextMenu from './components/contextMenu';
import TitleField from './components/TitleField';
import AssetRenderer from 'components/AssetRenderer';

const propTypes = {
    onModified: React.PropTypes.func.isRequired,
    showData: React.PropTypes.object.isRequired,
    editorActions: React.PropTypes.object.isRequired
}

class SlideContext extends React.Component {

    /* mouseDowned
     * xInElement
     * yInElement
    */
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
            <div className={this.props.className} id={'SlideContext'}>
                <TitleField
                    title={currentSlide.name}
                    onChange={this.props.editorActions.renameCurrentSlide}
                    currentSlideIndex={showData.selectedSlide}
                />
                <ContextMenu
                    cachedAsset={this.props.showData.cachedAsset}
                    actions={this.props.editorActions}/>
                <AssetRenderer
                    assets={assets}
                    selectedAssetIndex={selectedAssetIndex}
                    onModified={this.props.onModified}
                    onAssetSelected={this.props.editorActions.assetSelected}
                    onChangeAttributes={this.props.editorActions.setSelectedAssetAttributes}/>
            </div>
        );
    }
}

SlideContext.propTypes = propTypes;

export default SlideContext;
