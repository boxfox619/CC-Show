import React from 'react';

import Asset from 'components/Asset';
import * as Loader from '../ShowLoader';

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