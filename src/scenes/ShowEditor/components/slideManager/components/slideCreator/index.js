import React from 'react';
import styles from './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as slideActions from 'services/editor/slide/actions';

class SlideCreator extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div onClick={()=>this.props.createSlide()} className={styles.slideCreator}>
        <div className={styles.description}>새 슬라이드</div>
        <img src="/images/ic_add_white.png"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...slideActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideCreator);
