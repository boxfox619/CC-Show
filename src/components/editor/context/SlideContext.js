import React from 'react';
import Asset from '../assets/Asset';
import styles from './SlideContext.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as slideActions from '../../../actions/slides'
import * as assetsActions from '../../../actions/assets'

class SlideContext extends React.Component{
  constructor(props){
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.props.createAsset('text', 'https://www.google.co.kr/images/branding/googleg/1x/googleg_standard_color_128dp.png');

  }

    render(){
      let renderingAssets = (assets) => {
        return assets.map((asset)=>{
          return <Asset key={asset.id} isSelected={this.props.selectedAsset==asset.id} attribute={asset}/>
        })
      };
      return (
        <div className={styles.slideContext} id={'SlideContext'} onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}>
          {renderingAssets(this.props.assets)}
        </div>
      );
    }

    handleMouseMove(e){

    }

    handleMouseDown(e){
      if(e.target.parentNode.tagName == 'ASSET'){
          this.props.assetSelected(e.target.parentNode.id);
      }else{
        this.props.assetDeselected();
      }
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
