import React from 'react';
import styles from './Assets.css';

import Square from './ShapeAssets/Square';
import RoundSquare from './ShapeAssets/RoundSquare';
import Ellipse from './ShapeAssets/Ellipse';
import Triangle from './ShapeAssets/Triangle';
import Diamond from './ShapeAssets/Diamond';
import Pentagon from './ShapeAssets/Pentagon';
import Hexagon from './ShapeAssets/Hexagon';
import Octagon from './ShapeAssets/Octagon';
import Star from './ShapeAssets/Star';
import Heart from './ShapeAssets/Heart';
import Moon from './ShapeAssets/Moon';
import Spade from './ShapeAssets/Spade';
import Clover from './ShapeAssets/Clover';
import Stain from './ShapeAssets/Stain';
import Arrow1 from './ShapeAssets/Arrow1';
import Arrow2 from './ShapeAssets/Arrow2';
import Arrow3 from './ShapeAssets/Arrow3';
import Arrow4 from './ShapeAssets/Arrow4';
import Arrow5 from './ShapeAssets/Arrow5';
import Arrow6 from './ShapeAssets/Arrow6';
import Arrow7 from './ShapeAssets/Arrow7';
import Arrow8 from './ShapeAssets/Arrow8';


class ShapeAsset extends React.Component{
  constructor(props){
    super(props);

    this.getShpaeStyle=this.getShpaeStyle.bind(this);
  }
  render() {
    console.log('asdffd');
    return (
      this.getShpaeStyle(this.props.value)
    )
  }
  getShpaeStyle(value) {
    console.log(value);
    switch(value){
    case 'square' : return <Square asset={this.props.asset}/>
    case 'roundSquare' :return <RoundSquare asset={this.props.asset}/>
    case 'ellipse' :return <Ellipse asset={this.props.asset}/>
    case 'triangle' : return <Triangle asset={this.props.asset}/>
    case 'diamond' : return <Diamond asset={this.props.asset}/>
    case 'pentagon' : return <Pentagon asset={this.props.asset}/>
    case 'hexagon' : return <Hexagon asset={this.props.asset}/>
    case 'octagon' : return <Octagon asset={this.props.asset}/>
    case 'star' : return <Star asset={this.props.asset}/>
    case 'heart' : return <Heart asset={this.props.asset}/>
    case 'moon' : return <Moon asset={this.props.asset}/>
    case 'spade' : return <Spade asset={this.props.asset}/>
    case 'clover' : return <Clover asset={this.props.asset}/>
    case 'stain' : return <Stain asset={this.props.asset}/>
    case 'arrow1' : return <Arrow1 asset={this.props.asset}/>
    case 'arrow2' : return <Arrow2 asset={this.props.asset}/>
    case 'arrow3' : return <Arrow3 asset={this.props.asset}/>
    case 'arrow4' : return <Arrow4 asset={this.props.asset}/>
    case 'arrow5' : return <Arrow5 asset={this.props.asset}/>
    case 'arrow6' : return <Arrow6 asset={this.props.asset}/>
    case 'arrow7' : return <Arrow7 asset={this.props.asset}/>
    case 'arrow8' : return <Arrow8 asset={this.props.asset}/>
    default: return <Square asset={this.props.asset}/>
    }
  }
}
export default ShapeAsset;
