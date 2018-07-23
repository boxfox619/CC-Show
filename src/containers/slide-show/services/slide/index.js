import React from 'react';

import Asset from 'components/asset-canvas/components/asset';
import * as Loader from '../show-loader';

const propTypes = {
  slide: React.PropTypes.object.isRequired,
  visible: React.PropTypes.bool.isRequired
}

class Slide extends React.Component {
  render() {
    let slide = this.props.slide;
    return (<div style={{'display': visible ? 'block' : 'none'}}>
      {slide.assets.map((asset) => {
        return <Asset
          attribute={Loader.convertStyleSize(asset)}
          controlable={false}
          key={slide.id + '-' + asset.id + '-' + slide.id}
        />
      }
      )}
    </div>);
  }
}

Slide.propTypes = propTypes;

export default Slide;