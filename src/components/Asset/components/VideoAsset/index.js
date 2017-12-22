import React from 'react';
import styles from './Assets.css';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired,
  attrs: React.PropTypes.object.isRequired
};

class VideoAsset extends React.Component{

  render() {
    let code = getVideoCode(this.props.value);
    let renderVideo = (visible) =>{
      if(visible)
        return (<iframe style={{'width':'100%','height':'100%'}} src={'https://www.youtube.com/embed/' + code} frameborder="0"></iframe>);
      else return (<div className={styles.blankVideo}><img src={'/images/ic_play_circle_outline_white.png'}/></div>);
    }
    return (
      <div style={this.props.styles}>
        {renderVideo(this.props.attrs.preview)}
      </div>
    )
  }
}

function getVideoCode(url){
  return url.split("?v=")[1];
}

VideoAsset.propTypes = propTypes;

export default VideoAsset;
