import React from 'react';
import PropTypes from 'prop-types';

import * as contextMenu from 'ContextMenuActions';
import TitleField from './components/title-field';
import {AssetCanvas, ContextMenu} from '../../../../core/components';

export default class SlideContext extends React.Component {

    static propTypes = {
        onModified: PropTypes.func.isRequired,
        showData: PropTypes.object.isRequired,
        editorActions: PropTypes.object.isRequired
    };

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
            <div className={this.props.className} ref={context => this.contextComponent = context}>
                <TitleField
                    currentSlideIndex={showData.selectedSlide}
                    onChange={this.props.editorActions.renameCurrentSlide}
                    title={currentSlide.name}
                />
                <ContextMenu
                    context={this.contextComponent}
                    actions={contextMenu.getContextActions().bind(this)}
                    handleContextMenu={e => this.props.selectAsset(contextMenu.handleContextMenu(e))}
                />
                <AssetCanvas
                    assets={assets}
                    onAssetSelected={this.props.selectAsset}
                    onChangeAttributes={this.props.setSelectedAssetAttribute}
                    onModified={this.props.onModified}
                    selectedAssetIndex={selectedAssetIndex}
                />
            </div>
        );
    }
}