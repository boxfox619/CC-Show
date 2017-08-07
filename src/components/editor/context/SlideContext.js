import React from 'react';
import Asset from '../assets/Asset';
import styles from './SlideContext.css';

import { setSizeUnit, setPositionUnit } from '../../../actions/slides'
import { store, dispatch, subscribe } from '../../../store';

var SlideContext = React.createClass({
  constructor: function(props){
    constructor(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  },

  componentWillMount: function(){
    if(typeof store.getState().context === 'undefined'){
      dispatch(setSizeUnit('px'));
      dispatch(setPositionUnit('px'));
    }
    this.state.assets = store.getState().assets;
  },

  componentDidMount: function(){
    this.unSubscribe = subscribe(
      (state)=>{return state.assets.assets},
      (assets)=>{
        if(Object.keys(assets).length!=Object.keys(this.state.assets).length){
          this.state.setState({assets});
        }
      }
    );
  },

  componentWillUnmount: function(){
    this.unSubscribe();
  },

    render: function(){
      let assetsRendering = (assets) => {
        return data.map((assetData) =>{
          return <Asset attribute={assetData} />
        });
      };
      return (
        <SlideContext onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove} className={styles.slideContext}>
        {assetsRendering(this.state.assets)}
        </SlideContext>
      );
    }
});

function handleMouseMove(){

}

function handleMouseDown(){

}

export default SlideContext;
