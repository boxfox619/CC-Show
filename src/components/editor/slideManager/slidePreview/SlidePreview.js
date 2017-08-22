import React from 'react';
import styles from './SlidePreview.css';
import * as assetsActions from '../../../../actions/assets';
import IconButton from './IconButton';

const defaultProps = {
  name: React.PropTypes.string.isRequired,
  no: React.PropTypes.number.isRequired
};

class SlidePreview extends React.Component{

  constructor(props){
    super(props);

    this.share = this.share.bind(this);
    this.copy = this.copy.bind(this);
    this.delete = this.delete.bind(this);
  }

  render(){
    return (
      <div className={styles.slidePreview}>
        <div className={styles.controller}>
          <div className={styles.slideInfo}>
            <div className={styles.title}>
              {this.props.name}
            </div>
            <div className={styles.subTitle}>
              슬라이드{this.props.no}
            </div>
          </div>
          <div className={styles.actions}>
            <IconButton icon={'share'} onClick={this.share} className={styles.iconButton}/>
            <IconButton icon={'copy'} onClick={this.copy} className={styles.iconButton}/>
            <IconButton icon={'delete'} onClick={this.delete} className={styles.iconButton}/>
          </div>
        </div>
      </div>
    );
  }

  share(){

  }

  copy(){

  }

  delete(){

  }
}

SlidePreview.defaultProps = defaultProps;

export default SlidePreview;
