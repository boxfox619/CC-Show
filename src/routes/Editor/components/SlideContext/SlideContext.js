import React from 'react';
import PropTypes from 'prop-types';

import ContextMenu from './components/context-menu';
import TitleField from './components/title-field';
import AssetCanvas from 'core/components/AssetCanvas';

export default class SlideContext extends React.Component {

    static propTypes = {
        onModified: PropTypes.func.isRequired,
        showData: PropTypes.object.isRequired,
        editorActions: PropTypes.object.isRequired
    }

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