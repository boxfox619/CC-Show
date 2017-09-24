import React from 'react';
import styles from './SlidePreview.css';
import * as slideActions from '../../../../actions/slides';
import IconButton from './IconButton';

const defaultProps = {
  slide: React.PropTypes.object.isRequired,
  idx: React.PropTypes.number.isRequired,
  active: React.PropTypes.bool.isRequired
};

class SlidePreview extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div onClick={()=>this.props.onClick(this.props.slide)} className={styles.slidePreview+' '+((this.props.active)?styles.active:'')}>
        <div className={styles.thumbnail}><div className={styles.content} style={{'background-image':'url('+this.props.slide.thumbnail+')'}}/></div>
        <div className={styles.controller}>
          <div className={styles.slideInfo}>
            <div className={styles.title}>
              {this.props.slide.name}
            </div>
            <div className={styles.subTitle}>
              슬라이드{this.props.idx}
            </div>
          </div>
          <div className={styles.actions}>
            <IconButton icon={'share'} onClick={()=>this.props.shareSlide(this.props.slide.id)} className={styles.iconButton}/>
            <IconButton icon={'copy'} onClick={()=>this.props.copySlide(this.props.slide)} className={styles.iconButton}/>
            <IconButton icon={'delete'} onClick={()=>this.props.deleteSlide(this.props.slide.id)} className={styles.iconButton}/>
          </div>
        </div>
      </div>
    );
  }
}

SlidePreview.defaultProps = defaultProps;
export default SlidePreview;
