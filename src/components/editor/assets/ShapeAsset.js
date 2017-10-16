import React from 'react';
import styles from './Assets.css';

class ShapeAsset extends React.Component{
  constructor(props){
    super(props);

    this.getShpaeStyle=this.getShpaeStyle.bind(this);
  }
  render() {
    return (
      <div className={this.getShpaeStyle(this.props.value)} style={this.props.asset.style}></div>
    )
  }
  getShpaeStyle(value) {
    switch(value){
    case 'square' : return styles.square;
    case 'roundSquare' : return styles.roundSquare;
    case 'ellipse' : return styles.ellipse;
    case 'triangle' : return styles.triangle;
    case 'diamond' : return styles.diamond;
    case 'pentagon' : return styles.pentagon;
    case 'hexagon' : return styles.hexagon;
    case 'octagon' : return styles.octagon;
    case 'star' : return styles.star;
    case 'heart' : return styles.heart;
    case 'moon' : return styles.moon;
    case 'spade' : return styles.spade;
    case 'clover' : return styles.clover;
    case 'stain' : return styles.stain;
    case 'arrow1' : return styles.arrow1;
    case 'arrow2' : return styles.arrow2;
    case 'arrow3' : return styles.arrow3;
    case 'arrow4' : return styles.arrow4;
    case 'arrow5' : return styles.arrow5;
    case 'arrow6' : return styles.arrow6;
    case 'arrow7' : return styles.arrow7
    case 'arrow8' : return styles.arrow8;
    default: return styles.square;
    }
  }
}
export default ShapeAsset;
