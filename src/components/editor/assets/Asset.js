import React from 'react';

import TextAsset from './TextAsset';

class Asset extends React.Component{

  constructor(props){
    super(props);
    }

  render(){
    let value = this.props.attribute.value;
    switch(this.props.attribute.type){
      case 'text':
        return(<TextAsset styles={this.getStyle()} value={value}/>);
      case 'image':
        return(<ImageAsset styles={this.getStyle()} value={value}/>);
      case 'video':
        return(<VideoAsset styles={this.getStyle()} value={value}/>);
      case 'shape':
        return(<ShapeAsset styles={this.getStyle()} value={value}/>);
      default:
      return (<div>{value}</div>);
    }
  }

  getStyle(){
    let style = {
      'height': this.props.attribute.height,
      'width': this.props.attribute.width,
      'left' : this.props.attribute.left,
      'top' : this.props.attribute.top
    };
    if(this.props.attribute.styles != 'undefined'){
      for (key in this.props.attribute.styles) {
        style[key] = this.props.attribute.styles[key];
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
