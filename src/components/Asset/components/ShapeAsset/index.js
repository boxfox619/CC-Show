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

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired,
  attrs: React.PropTypes.object.isRequired
};

class ShapeAsset extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    let assetTag = Square
    switch(this.props.value){
    case 'square' :
      assetTag = Square
      break;
    case 'roundSquare' :
      assetTag = RoundSquare
      break;
    case 'ellipse' :
      assetTag = Ellipse
      break;
    case 'triangle' :
      assetTag = Triangle
      break;
    case 'diamond' :
      assetTag = Diamond
      break;
    case 'pentagon' :
      assetTag = Pentagon
      break;
    case 'hexagon' :
      assetTag = Hexagon
      break;
    case 'octagon' :
      assetTag = Octagon
      break;
    case 'star' :
      assetTag = Star
      break;
    case 'heart' :
      assetTag = Heart
      break;
    case 'moon' :
      assetTag = Moon
      break;
    case 'spade' :
      assetTag = Spade
      break;
    case 'clover' :
      assetTag = Clover
      break;
    case 'stain' :
      assetTag = Stain
      break;
    case 'arrow1' :
      assetTag = Arrow1
      break;
    case 'arrow2' :
      assetTag = Arrow2
      break;
    case 'arrow3' :
      assetTag = Arrow3
      break;
    case 'arrow4' :
      assetTag = Arrow4
      break;
    case 'arrow5' :
      assetTag = Arrow5
      break;
    case 'arrow6' :
      assetTag = Arrow6
      break;
    case 'arrow7' :
      assetTag = Arrow7
      break;
    case 'arrow8' :
      assetTag = Arrow8
      break;
    }
    const ShapeAsset = assetTag;
    return (
      <div style={{'cursor':'move'}}>
        <ShapeAsset attrs={this.props.attrs} />
      </div>
    )
  }
}

ShapeAsset.propTypes = propTypes;

export default ShapeAsset;
