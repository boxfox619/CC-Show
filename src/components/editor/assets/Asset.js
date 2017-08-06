import React from 'react';
import styles from './Assets.css';

import {subscribe} from '/store';

const propTypes: {
  attribute: React.propTypes.assetAttribute({
    id: React.propTypes.string.isRequired,
    type: React.propTypes.string.isRequired,
    value: React.propTypes.string.isRequired,
    width: React.propTypes.string.isRequired,
    height: React.propTypes.string.isRequired,
    left: React.propTypes.string.isRequired,
    top: React.propTypes.string.isRequired,
    styles: React.propTypes.object
  })
}

var AssetWrapper = React.createClass({
    render: function(){
      return (
        <AssetWrapper>
        {this.props.children}
        </AssetWrapper>
      );
    }
});


class Asset extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let style = getStyle();
    let targetElement;
    switch(this.props.attribute.type){
      case 'text':
        targetElement = (<TextAsset styles={style} value={this.state.value}/>);
      break;
      case 'image':
        targetElement = (<ImageAsset styles={style} value={this.state.value}/>);
      break;
      case 'video':
        targetElement = (<VideoAsset styles={style} value={this.state.value}/>);
      break;
      case 'shape':
        targetElement = (<ShapeAsset styles={style} value={this.state.value}/>);
      break;
    }
    return <AssetWrapper>{targetElement}</AssetWrapper>;
  }

  componentDidMount(){
    this.unSubscribe = subscribe(
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
    )
  }

  componentWillUnmount(){
    this.unSubscribe();
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
    return ;
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

Asset.propTypes = propTypes;

export default Asset;
