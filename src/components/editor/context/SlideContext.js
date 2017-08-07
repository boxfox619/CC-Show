import React from 'react';
import Asset from '../assets/Asset';

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
        if(Object.keys(assets).length!=Object.keys(this.state.assets).length){
          this.setState({assets});
        }
      }
    );

    //test code
    dispatch(createAsset('text', 'value'));
  }

  componentWillUnmount(){
    this.unSubscribe();
  }

    render(){
      let currentAssets = this.state.assets;
      return (
        <div onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}>
          {Object.keys(currentAssets).map(function(key, index) {
            return (<Asset key={key} attribute={currentAssets[key]} />);
          })}
        </div>
      );
    }

    handleMouseMove(){

    }

    handleMouseDown(){

    }
}


export default SlideContexts;
