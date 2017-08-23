import React from 'react';
import styles from './AssetItem.css';

const propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string.isRequired,
  star: React.PropTypes.number.isRequired,
  thumbnail: React.PropTypes.string.isRequired
}

class AssetItem extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.log('test');
    return (
      <div className={styles.asset}>
      <div className={styles.thumbnail}><img src={this.props.thumbnail}/></div>
        <div className={styles.buttonHeader}>
          <div className={styles.imgBtn}><img src={'/images/ic_move_in_box_gray.png'}/></div>
          <div className={styles.imgBtn}><img src={'/images/ic_flag_white.png'}/></div>
        </div>
        <div className={styles.inner}></div>
        <div className={styles.bookmark}/>
        <div className={styles.footer}>
          <div className={styles.texts}>
            <div className={styles.title}>{this.props.title}</div>
            <div className={styles.subTitle}>{this.props.subTitle}</div>
          </div>
          <div className={styles.stars}>
            <div className={styles.star}/>
            <div className={styles.star}/>
            <div className={styles.star}/>
            <div className={styles.star}/>
            <div className={styles.star}/>
          </div>
        </div>
      </div>
    );
  }
}

AssetItem.PropTypes = propTypes;

export default AssetItem;
