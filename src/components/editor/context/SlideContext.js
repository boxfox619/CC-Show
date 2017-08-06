import React from 'react';
import Asset from '../assets/Asset';
import styles from './SlideContext.css';

import store from '/store';

import {connect} from 'react-redux';

var SlideContext = React.createClass({
  constructor: function(props){
    constructor(props);
    this.state={
      attribute:{
        positionUnit: 'px', //위치 단위
        sizeUnit: 'px' //사이즈 단위
      }
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  },

    render: function(){
      let assetsRendering = (assets) => {
        return data.map((assetData) =>{
          return <Asset attribute={assetData} />
        });
      };
      return (
        <SlideContext onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove} className={styles.slideContext}>
        {assetsRendering(store.getState().assets)}
        </SlideContext>
      );
    }
});

function handleMouseMove(){

}

function handleMouseDown(){
  
}

SlideContext = connect(mapStateToProps)(SlideContext);
export default SlideContext;
