import React from 'react';
import styles from './AssetItem.css';

class AssetItem extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.log('test');
    return (
      <div className={styles.asset}>
      <div className={styles.thumbnail}></div>
        <div className={styles.buttonHeader}>
          <div className={styles.imgBtn}><img src={'/images/ic_move_in_box_gray.png'}/></div>
          <div className={styles.imgBtn}><img src={'/images/ic_flag_white.png'}/></div>
        </div>
        <div className={styles.inner}></div>
        <div className={styles.bookmark}/>
        <div className={styles.footer}>
          <div className={styles.texts}>
            <div className={styles.title}>심플한 디자인</div>
            <div className={styles.subTitle}>치킨맥주</div>
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

export default AssetItem;
