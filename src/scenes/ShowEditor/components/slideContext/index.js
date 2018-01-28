import React from 'react';
import Asset from 'components/Asset';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContextMenu from './components/contextMenu';

import * as slideActions from 'services/editor/slide/actions'
import * as assetsActions from 'services/editor/asset/actions'
import * as assetsAttrActions from 'services/editor/asset/attr/actions'
import * as assetsShapeActions from 'services/editor/asset/shape/actions';
import * as assetsTextActions from 'services/editor/asset/text/actions';
import * as assetsVideoActions from 'services/editor/asset/video/actions';

import SlideTitle from './components/slideTitle';
import AssetRenderer from 'components/assetRenderer';

const propTypes = {
  onModified: React.PropTypes.func.isRequired
}

class SlideContext extends React.Component{

  /* mouseDowned
   * xInElement
   * yInElement
  */
  constructor(props){
    super(props);

    this.state = {doubleClicked: false};

    this.mouseAction = 'none';
    this.xInElement = 0;
    this.yInElement = 0;
    this.selectedAsset = undefined;
    this.resizeTarget = undefined;
    this.selectedAssetId = undefined;
  }

    render(){
      return (
        <div className={this.props.className} id={'SlideContext'}>
        <SlideTitle/>
        <ContextMenu/>
        <AssetRenderer
          onModified={this.props.onModified}
          assets={this.props.assets}
          selectedAsset={this.props.selectedAsset}
          currentSlide={this.props.currentSlide}
          assetSelected={this.props.assetSelected}
          assetDeselected={this.props.assetDeselected}
          setAssetXY={this.props.setAssetXY}
          setAttributes={this.props.setAttributes}
          setAssetValue={this.props.setAssetValue}/>
        </div>
      );
    }

    componentDidMount(){

    }
}

const mapStateToProps = (state) => {
  if(state.editor.slides.length > 0 && !!state.editor.slides[state.editor.selectedSlide]){
    return {
      currentSilde: state.editor.selectedSlide,
      selectedAsset: state.editor.slides[state.editor.selectedSlide].selectedAsset,
      assets: state.editor.slides[state.editor.selectedSlide].assets
    }
  } else {
    return{
      selectedAsset: -1,
      assets: []
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...assetsActions,
    ...slideActions,
    ...assetsAttrActions,
    ...assetsShapeActions,
    ...assetsTextActions,
    ...assetsVideoActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideContext);
