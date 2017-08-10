import React from 'react';
import styles from './Assets.css';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired
};

class VideoAsset extends React.Component{

  render() {
    return (
      <div style={this.props.styles}>
      </div>
    )
  }
}

VideoAsset.propTypes = propTypes;

export default VideoAsset;
