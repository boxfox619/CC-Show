import React from 'react';
import styles from './Assets.css';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired
};

class VideoAsset extends React.Component{

  render() {
    let code = getVideoCode(this.props.value);
    return (
      <div style={this.props.styles}>
          <iframe style={{'width':'100%','height':'100%'}} src={'https://www.youtube.com/embed/' + code} frameborder="0"></iframe>
      </div>
    )
  }
}

function getVideoCode(url){
  return url.split("?v=")[1];
}

VideoAsset.propTypes = propTypes;

export default VideoAsset;
