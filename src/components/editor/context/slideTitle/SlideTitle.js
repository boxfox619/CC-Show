import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './SlideTitle.css';

class SlideTitle extends React.Component{

  constructor(props){
    super(props);
    this.state = {value: 'tesata'};

    this.onChange = this.handleChange.bind(this);
  }

  render(){
    return(
      <div className={styles.slideTitle}>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
      </div>
    );
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
}

const mapStateToProps = (state) => {
  return{}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideTitle);
