import React from 'react';
// import fs from 'fs';

import Square from './components/Square';
import RoundSquare from './components/RoundSquare';
import Ellipse from './components/Ellipse';
import Triangle from './components/Triangle';
import Diamond from './components/Diamond';
import Pentagon from './components/Pentagon';
import Hexagon from './components/Hexagon';
import Octagon from './components/Octagon';
import Star from './components/Star';
import Heart from './components/Heart';
import Moon from './components/Moon';
import Spade from './components/Spade';
import Clover from './components/Clover';
import Stain from './components/Stain';
import Arrow1 from './components/Arrow1';
import Arrow2 from './components/Arrow2';
import Arrow3 from './components/Arrow3';
import Arrow4 from './components/Arrow4';
import Arrow5 from './components/Arrow5';
import Arrow6 from './components/Arrow6';
import Arrow7 from './components/Arrow7';
import Arrow8 from './components/Arrow8';


class ShapeAsset extends React.Component{
  constructor(props){
    super(props);

    this.getShpaeStyle=this.getShpaeStyle.bind(this);
  }
  render() {
    return (
      this.getShpaeStyle(this.props.value)
    )
  }
  getShpaeStyle(value) {
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
