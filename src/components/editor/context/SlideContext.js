import React from 'react';
import Asset from '../assets/Asset';
import styles from './SlideContext.css';

import { setSizeUnit, setPositionUnit } from '../../../actions/slides'
import { createAsset } from '../../../actions/assets'
import { getState, dispatch, subscribe } from '../../../store';

class SlideContexts extends React.Component{
  constructor(props){
    super(props);
    this.state={
      assets: getState().assets.assets
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentWillMount(){
    if(typeof getState().context === 'undefined'){
      dispatch(setSizeUnit('px'));
      dispatch(setPositionUnit('px'));
    }
  }

  componentDidMount(){
    this.unSubscribe = subscribe(
      (state)=>{return state.assets.assets},
      (assets)=>{
        this.setState({assets});
      }
    );

    this.unSubscribeSlideContext = subscribe(
      (state) => {return state.slideContext},
      (slideContext) => {
        //on unit change calculate % or px
        //maybe put max width, height value in slideContext
      }
    );

    //test code
    dispatch(createAsset('image', 'https://www.google.co.kr/images/branding/googleg/1x/googleg_standard_color_128dp.png'));
  }

  componentWillUnmount(){
    this.unSubscribe();
  }

    render(){
      let currentAssets = this.state.assets;
      let renderingAssets = (assets) => {
        return assets.map((asset)=>{
          return <Asset key={asset.id} attribute={asset}/>
        })
      };
      return (
        <div onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}>
          {renderingAssets(this.state.assets)}
        </div>
      );
    }

    handleMouseMove(){

    }

    handleMouseDown(){

    }
}

export default SlideContexts;
