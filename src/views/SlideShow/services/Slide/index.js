import React from 'react';

import Asset from 'components/Asset';
import * as Loader from "../ShowLoader";

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
              controlable={false}
              key={slide.id + '-' + asset.id + '-' + slide.id}
              attribute={Loader.convertStyleSize(asset)}
            />
          }
      )}
    </div>);
  }
}

Slide.propTypes = propTypes;

export default Slide;