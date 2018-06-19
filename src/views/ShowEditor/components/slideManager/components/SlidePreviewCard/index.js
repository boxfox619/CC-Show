import React from 'react';
import styles from './style.css';
import SlideActionButton from '../SlideActionButton';

const propTypes = {
  slide: React.PropTypes.object.isRequired,
  idx: React.PropTypes.number.isRequired,
  active: React.PropTypes.bool.isRequired,
  shareSlide: React.PropTypes.func.isRequired,
  copySlide: React.PropTypes.func.isRequired,
  deleteSlide: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired
};

class SlidePreviewCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.slidePreview + ' ' + ((this.props.active)
        ? styles.active : '')}
        onClick={() => this.props.onClick(this.props.slide)}
      >
        <div className={styles.thumbnail}>
          <div className={styles.content}
            style={(this.props.slide.thumbnail != undefined) ? {
              'backgroundImage': 'url(' + this.props.slide.thumbnail + ')'} : {}}
          />
        </div>
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
            <SlideActionButton className={styles.slideActionButton}
              icon={'share'}
              onClick={() => this.props.shareSlide(
                this.props.slide.id)}
            />
            <SlideActionButton className={styles.slideActionButton}
              icon={'copy'}
              onClick={() => this.props.copySlide(
                this.props.slide)}
            />
            <SlideActionButton className={styles.slideActionButton}
              icon={'delete'}
              onClick={() => this.props.deleteSlide(
                this.props.slide.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

SlidePreviewCard.propTypes = propTypes;
export default SlidePreviewCard;
