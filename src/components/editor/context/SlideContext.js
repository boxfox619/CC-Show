import React from 'react';
import Asset from '../assets/Asset';
import styles from './SlideContext.css';

var SlideContext = React.createClass({
  constructor: function(props){
    constructor(props);
    this.state={
      attribute:{
        positionUnit: 'px', //위치 단위
        sizeUnit: 'px' //사이즈 단위
      },
      assets: [
        {id: '1', type: 'text', value:'가나다라', width: 100, height: 100, x: 30, y: 20}
      ]
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  },

    render: function(){
      let assetsRendering = (assets) => {
        return data.map((assetData) =>{
          return <Asset key={assetData.id} attribute={assetData} />
        });
      };
      return (
        <SlideContext onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove} className={styles.slideContext}>\
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
