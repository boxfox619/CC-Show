import React from 'react';

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
      </div>
    );
  }
}

SlideManager.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    slides: state.editor.slides,
    selectedSlide: state.editor.selectedSlide,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(assetsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideManager);
