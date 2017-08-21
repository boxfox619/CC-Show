import React from 'react';

import styles from './SlideManager.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as assetsActions from '../../../actions/assets';

const defaultProps = {
  className: React.PropTypes.string.required
};

class SlideManager extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={this.props.className}>
        <div style={{'padding': '20px'}}>
          <div className={styles.title}>
            슬라이드 리스트
          </div>
        </div>
      </div>
    );
  }
}

SlideManager.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    visible: state.ui.visibleSlideManager
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(assetsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideManager);
