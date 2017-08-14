import React from 'react';
import Asset from '../assets/Asset';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as slideActions from '../../../actions/slides'
import * as assetsActions from '../../../actions/assets'

class SlideContext extends React.Component{

  /* mouseDowned
   * xInElement
   * yInElement
  */
  constructor(props){
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseRelese = this.handleMouseRelese.bind(this);

    this.mouseAction = 'none';
    this.xInElement = 0;
    this.yInElement = 0;
    this.selectedAsset = undefined;
    this.resizeTarget = undefined;

    this.height = '400px';
    this.width = '400px';

    //testcode
    this.props.createAsset('text', 'https://www.google.co.kr/images/branding/googleg/1x/googleg_standard_color_128dp.png');

  }

    render(){
      let renderingAssets = (assets) => {
        return assets.map((asset)=>{
          if(this.props.selectedAsset==asset.id){
            this.selectedAsset = asset;
          }
          return <Asset key={asset.id} isSelected={this.props.selectedAsset==asset.id} attribute={asset}/>
        })
      };
      return (
        <div style={{'height':this.height, 'width':this.width}} className={this.props.className} id={'SlideContext'}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseRelese}
        onMouseLeave={this.handleMouseRelese}>
          {renderingAssets(this.props.assets)}
        </div>
      );
    }

    handleMouseMove(e){
      if(this.props.selectedAsset != undefined){
        if(this.mouseAction=='move'){
          let x = e.pageX;
          let y = e.pageY;
          let afterX = parseInt(this.percentWidthToPixel(this.selectedAsset.x)) + (x - this.xInElement) +'px';
          let afterY = parseInt(this.percentHeightToPixel(this.selectedAsset.y)) + (y - this.yInElement) + 'px';
          this.xInElement = x;
          this.yInElement = y;
          if(this.selectedAsset.x.endsWith('%')){
            afterX = this.pixelWidthToPercent(afterX);
            afterY = this.pixelHeightToPercent(afterY);
          }
          this.props.setAssetXY(afterX, afterY);
        } else if(this.mouseAction=='resize'){
          let devX = (this.resizeTarget.includes('left'))? this.xInElement - e.pageX : e.pageX - this.xInElement;
          let devY = (this.resizeTarget.includes('top'))? this.yInElement - e.pageY : e.pageY - this.yInElement;
          let currentX = parseInt(this.percentHeightToPixel(this.selectedAsset.x));
          let currentY = parseInt(this.percentWidthToPixel(this.selectedAsset.y));
          let currentWidth = parseInt(this.percentWidthToPixel(this.selectedAsset.width));
          let currentHeight = parseInt(this.percentHeightToPixel(this.selectedAsset.height));
          let afterHeight = currentHeight+devY+'px';
          let afterWidth = currentWidth+devX+'px';
          let afterX = currentX-devX+'px';
          let afterY = currentY-devY+'px';
          if(parseInt(afterWidth)<5||parseInt(afterHeight)<5){
            return;
          }
          if(this.selectedAsset.x.endsWith('%')){
            afterY = this.pixelHeightToPercent(afterY);
            afterX = this.pixelWidthToPercent(afterX);
          }
          if(this.selectedAsset.width.endsWith('%')){
              afterHeight = this.pixelHeightToPercent(afterHeight);
              afterWidth = this.pixelWidthToPercent(afterWidth);
          }
          let modifyAttrs;
          switch(this.resizeTarget){
            case 'topleft':
              modifyAttrs = {'height':afterHeight, 'y':afterY, 'width':afterWidth, 'x':afterX};
              break;
            case 'topright':
              modifyAttrs = {'height':afterHeight, 'y':afterY, 'width':afterWidth};
              break;
            case 'bottomleft':
              modifyAttrs = {'height':afterHeight, 'width':afterWidth, 'x':afterX};
              break;
            case 'bottomright':
              modifyAttrs = {'height':afterHeight, 'width':afterWidth};
              break;
            case 'top':
              modifyAttrs = {'height':afterHeight, 'y':afterY};
              break;
            case 'left':
              modifyAttrs = {'width':afterWidth, 'x':afterX};
              break;
            case 'bottom':
              modifyAttrs = {'height':afterHeight};
              break;
            case 'right':
              modifyAttrs = {'width':afterWidth};
              break;
          }
          this.props.setAttributes(modifyAttrs);
          this.xInElement = e.pageX;
          this.yInElement = e.pageY;
        }
      }
    }

    handleMouseDown(e){
      this.mouseDowned = true;
      if(e.target.parentNode.parentNode.tagName == 'ASSET'){
          this.props.assetSelected(e.target.parentNode.parentNode.id);
          this.mouseAction = 'move';
          if(e.target.tagName=='SELECTORDOT'||e.target.tagName=='SELECTORLINE'){
            this.mouseAction = 'resize';
            this.resizeTarget = e.target.getAttribute('target');
          }
          this.xInElement = e.pageX;
          this.yInElement = e.pageY;
      }else{
        this.props.assetDeselected();
      }
      e.preventDefault();
    }

    handleMouseRelese(e){
      this.mouseAction = 'none';
    }

    percentHeightToPixel(val){
      if(val.endsWith('%')){
        return parseInt(val)/100*parseInt(this.height) +'px';
      }
      return val;
    }

    percentWidthToPixel(val){
      if(val.endsWith('%')){
        return parseInt(val)/100*parseInt(this.width) +'px';
      }
      return val;
    }


    pixelHeightToPercent(val){
      if(val.endsWith('px')){
        return parseInt(val)/parseInt(this.height)*100 +'%';
      }
      return val;
    }

    pixelWidthToPercent(val){
      if(val.endsWith('px')){
        return parseInt(val)/parseInt(this.width)*100 +'%';
      }
      return val;
    }


}

const mapStateToProps = (state) => {
  return {
    selectedAsset: state.editor.slides[state.editor.selectedSlide].selectedAsset,
    assets: state.editor.slides[state.editor.selectedSlide].assets
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(assetsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideContext);
