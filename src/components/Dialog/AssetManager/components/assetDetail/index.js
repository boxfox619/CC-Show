import React from 'react';
import styles from './style.css';

const propTypes = {
  asset: React.PropTypes.object.isRequired
}

class AssetDetail extends React.Component{
  render(){
    return (
      <div>
        <h1 className={styles.title}>이건 무슨 에셋일까?</h1>
        <div className={styles.description}> ㅁㄴㅇㅁㄴㅇ ㅁㄴㅇ ㅁㄴㅇ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅁㄴㅇ ㅁㄴㅇ ㅁ나ㅓㅀㅂㄹ ㅜㅂㅈㄹ ㅗ뮤ㅡ ㅁㄶ랴봐류 ㅁㅇ낳럼 유리마저다 ㅎ뮺ㄷㅎ  ㅓ</div>
        <div>
        </div>
      </div>
    );
  }
}

AssetDetail.propTypes = propTypes;

export default AssetDetail;
