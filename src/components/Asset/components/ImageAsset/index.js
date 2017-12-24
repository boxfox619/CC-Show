import React from 'react';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired
};

class ImageAsset extends React.Component{

  render() {
    return (
      <img style={this.props.styles} src={this.props.value}/>
    )
  }
}

ImageAsset.propTypes = propTypes;

export default ImageAsset;
