import React from 'react';
import Asset from '../assets/Asset';
import styles from './SlideContext.css';
import { connect } from 'react-redux';

import * as slideActions from '../../../actions/slides'
import * as assetsActions from '../../../actions/assets'

class SlideContext extends React.Component{
  constructor(props){
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount(){
    this.props.createAsset('text', 'https://www.google.co.kr/images/branding/googleg/1x/googleg_standard_color_128dp.png');
  }

    render(){
      let renderingAssets = (assets) => {
        return assets.map((asset)=>{
          return <Asset key={asset.id} attribute={asset}/>
        })
      };
      return (
        <div id={'SlideContext'} onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}>
          {renderingAssets(this.props.assets)}
        </div>
      );
    }

    handleMouseMove(e){

    }

    handleMouseDown(e){
      console.log(e.target.parentNode);
    }
}

const mapStateToProps = (state) => {
  return {
    assets: state.assets.assets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSizeUnit: (unit) => { dispatch(slideActions.setSizeUnit(unit))},
    setPositionUnit: (unit) => { dispatch(slideActions.setPositionUnit(unit))},
    createAsset: (type, value) => {dispatch(assetsActions.createAsset(type, value))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideContext);
