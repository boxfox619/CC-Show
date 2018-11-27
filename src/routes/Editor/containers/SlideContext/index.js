import React from 'react';
import {connect} from 'react-redux';
import * as assetActions from '../../modules/asset';
import * as slideActions from '../../modules/slide';

import * as contextMenu from 'src/routes/Editor/containers/SlideContext/ContextMenuActions';
import TitleField from './TitleField';
import {AssetCanvas, ContextMenu} from '../../../../core/components/index';

class SlideContext extends React.Component {

    constructor(props) {
        super(props);
        this.state = {doubleClicked: false};
    }

    render() {
        let {className, onModified, currentSlide, selectAsset, setSlideName, setSelectedAssetAttribute} = this.props;
        let {assets} = currentSlide;
        return (
            <div className={className} ref={context => this.contextComponent = context}>
                <TitleField onChange={setSlideName} title={currentSlide.name}/>
                <ContextMenu
                    context={this.contextComponent}
                    actions={contextMenu.getContextMenuActions().bind(this)}
                    handleContextMenu={e => selectAsset(contextMenu.handleContextMenu(e))}
                />
                <AssetCanvas
                    assets={assets}
                    onAssetSelected={selectAsset}
                    onChangeAttributes={setSelectedAssetAttribute}
                    onModified={onModified}
                    selectedAssetId={currentSlide.selectedAssetId}
                />
            </div>
        );
    }
}

const mapDispatchToProps = {

};

const mapStateToProps = (state) => ({
    currentSlide: state.editor.slides.find(s => s.id === state.editor.slides.selectedSlideId),
    setSlideName: slideActions.setSlideName,
    selectAsset: assetActions.selectAsset,
    setSelectedAssetAttribute: assetActions.setSelectedAssetAttribute
});

export default connect(mapStateToProps, mapDispatchToProps)(SlideContext)