import React from 'react';
import styles from './Assets.css';

import TextAsset from './TextAsset';

import {subscribe} from '../../../store';


class Asset extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      id: props.attribute.id,
        isSelected: false,
        type: props.attribute.type,
        width: props.attribute.width,
        height: props.attribute.height,
        left: props.attribute.left,
        top: props.attribute.top,
        value: props.attribute.value,
        styles : props.attribute.styles
    }

  }

  render(){
    switch(this.props.attribute.type){
      case 'text':
        return(<TextAsset styles={this.getStyle()} value={this.state.value}/>);
      case 'image':
        return(<ImageAsset styles={this.getStyle()} value={this.state.value}/>);
      case 'video':
        return(<VideoAsset styles={this.getStyle()} value={this.state.value}/>);
      case 'shape':
        return(<ShapeAsset styles={this.getStyle()} value={this.state.value}/>);
      default:
      return (<div>{this.state.value}</div>);
    }
  }

  componentDidMount(){
    this.unSubscribeAssetState = subscribe(
      (state)=>{return state.assets[this.props.id]},
      (assetAttribute)=>{
        this.setState({
          height: assetAttribute.height,
          width: assetAttribute.width,
          left: assetAttribute.left,
          top: assetAttribute.top,
          styles: assetAttribute.styles
        });
       }
    );
    this.unSubscribeSlideContext = subscribe(
      (state) => {return state.slideContext},
      (slideContext) => {
        //on unit change calculate % or px
        //maybe put max width, height value in slideContext
      }
    );
  }

  componentWillUnmount(){
    this.unSubscribeAssetState();
  }

  getStyle(){
    let style = {
      'height': this.state.height,
      'width': this.state.width,
      'left' : this.state.left,
      'top' : this.state.top
    };
    if(this.state.styles != 'undefined'){
      for (key in this.state.styles) {
        style[key] = this.state.styles[key];
      }
    }
    return style;
  }
}
/*
{ id: '123',
  isSelected: false,
  type: 'text',
  width: '100px',
  height: '300px',
  left: '20px',
  top:'10px',
  value:'가나다라',
  styles : {
    font-size: '30px'
  }
}
*/


export default Asset;
