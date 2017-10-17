import React from 'react';
import styles from './Assets.css';
import fs from 'fs';

class ShapeAsset extends React.Component{
  constructor(props){
    super(props);

    this.getShpaeStyle=this.getShpaeStyle.bind(this);
  }
  render() {
    return (
      <div>{this.getShpaeStyle(this.props.value)}</div>
    )
  }
  getShpaeStyle(value) {
    switch(value){
    case 'square' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/square.svg"/>);
    case 'roundSquare' :
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/roundSquare.svg"/>);
    case 'ellipse' :
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/ellipse.svg"/>);
    case 'triangle' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/triangle.svg"/>);
    case 'diamond' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/diamond.svg"/>);
    case 'pentagon' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/pentagon.svg"/>);
    case 'hexagon' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/hexagon.svg"/>);
    case 'octagon' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/octagon.svg"/>);
    case 'star' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/star.svg"/>);
    case 'heart' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/heart.svg"/>);
    case 'moon' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/moon.svg"/>);
    case 'spade' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/spade.svg"/>);
    case 'clover' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/clover.svg"/>);
    case 'stain' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/stain.svg"/>);
    case 'arrow1' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/arrow1.svg"/>);
    case 'arrow2' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/arrow2.svg"/>);
    case 'arrow3' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/arrow3.svg"/>);
    case 'arrow4' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/arrow4.svg"/>);
    case 'arrow5' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/arrow5.svg"/>);
    case 'arrow6' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/arrow6.svg"/>);
    case 'arrow7' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/arrow7.svg"/>);
    case 'arrow8' : 
      this.changeAssetAttribute( fs.readFileSync('/svg/square.svg', 'utf8')); return (<img src="/svg/arrow8.svg"/>);
    default: return (<img src="/svg/square.svg"/>);
    }
  }

  changeAssetAttribute(data){
    console.log(data);
  }
}
export default ShapeAsset;
