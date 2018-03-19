import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContextMenu from './components/contextMenu';

import * as slideActions from 'services/editor/slide/actions'
import * as assetsActions from 'services/editor/asset/actions'

import SlideTitle from './components/slideTitle';
import AssetRenderer from 'components/AssetRenderer';

const propTypes = {
    onModified: React.PropTypes.func.isRequired
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
        return (
            <div className={this.props.className} id={'SlideContext'}>
                <SlideTitle/>
                <ContextMenu
                    currentSlide={this.props.currentSlide}/>
                <AssetRenderer
                    onModified={this.props.onModified}
                    assets={this.props.assets}
                    selectedAsset={this.props.selectedAsset}
                    currentSlide={this.props.currentSlide}
                    assetSelected={this.props.assetSelected}
                    assetDeselected={this.props.assetDeselected}
                    onChangeAttribute={this.props.setSelectedAssetAttribute}
                    setAttributes={this.props.setAttributes}
                    setAssetValue={this.props.setAssetValue}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    if (state.editor.slides.length > 0 && !!state.editor.slides[state.editor.selectedSlide]) {
        return {
            currentSlide: state.editor.selectedSlide,
            selectedAsset: state.editor.slides[state.editor.selectedSlide].selectedAsset,
            assets: state.editor.slides[state.editor.selectedSlide].assets
        }
    } else {
        return {
            selectedAsset: -1,
            assets: []
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...assetsActions,
        ...slideActions
    }, dispatch);
}

SlideContext.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SlideContext);
