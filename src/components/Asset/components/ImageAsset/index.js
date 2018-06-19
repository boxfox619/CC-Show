import React from 'react';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired
};

class ImageAsset extends React.Component{

  render() {
    return (
      <img onDragStart={(e)=>{e.preventDefault()}}
        src={this.props.value}
        style={this.props.styles}
      />
    )
  }
}

ImageAsset.propTypes = propTypes;

export default ImageAsset;
