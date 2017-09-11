import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as slideActions from '../../../../actions/slides';

import styles from './SlideTitle.css';

class SlideTitle extends React.Component{

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  render(){
    return(
      <div className={styles.slideTitle}>
        <input id="slide_title_input" type="text" onChange={this.handleChange} value={this.props.title}/>
      </div>
    );
  }

  handleChange(event) {
    this.props.renameSlide(this.props.currentSlide, event.target.value);
  }
}

const mapStateToProps = (state) => {
  return{
    currentSlide : state.editor.selectedSlide,
    title : state.editor.slides[state.editor.selectedSlide].name }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...slideActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideTitle);
