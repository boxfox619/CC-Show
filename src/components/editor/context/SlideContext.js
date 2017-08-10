import React from 'react';
import Asset from '../assets/Asset';
import styles from './SlideContext.css';
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

    this.mouseDowned = false;
    this.xInElement = 0;
    this.yInElement = 0;
    this.selectedAsset = undefined;

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
        <div className={styles.slideContext} id={'SlideContext'}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseRelese}
        onMouseLeave={this.handleMouseRelese}>
          {renderingAssets(this.props.assets)}
        </div>
      );
    }

    handleMouseMove(e){
      if(this.mouseDowned && this.props.selectedAsset != undefined){
          var x = e.pageX;
          var y = e.pageY;
          var afterX = parseInt(this.selectedAsset.x) + (x - this.xInElement);
          var afterY = parseInt(this.selectedAsset.y) + (y - this.yInElement);
          this.xInElement = x;
          this.yInElement = y;
          this.props.setAssetXY(afterX, afterY);
      }
    }

    handleMouseDown(e){
      this.mouseDowned = true;
      if(e.target.parentNode.parentNode.tagName == 'ASSET'){
          this.props.assetSelected(e.target.parentNode.parentNode.id);
          this.xInElement = e.pageX;
          this.yInElement = e.pageY;
      }else{
        this.props.assetDeselected();
      }
      e.preventDefault();
    }

    handleMouseRelese(e){
      this.mouseDowned = false;
    }


}

const mapStateToProps = (state) => {
  return {
    selectedAsset: state.assets.selectedAsset,
    assets: state.assets.assets
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(assetsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideContext);
