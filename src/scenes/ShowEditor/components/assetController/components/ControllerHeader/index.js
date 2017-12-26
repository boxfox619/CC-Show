import React from 'react';
import { connect } from 'react-redux';

import styles from './style.css';

const propTypes = {
  title : React.PropTypes.string.isRequired,
  onToggle : React.PropTypes.func.isRequired
}

class ControllerHeader extends React.Component {

    constructor(prop) {
        super(prop);

        this.state = {
          toggle : true
        }

        this.toggle = this.toggle.bind(this);
    }

    render() {
      return (
       <div className={styles.controller_sub_wrapper}>
          <div className={styles.controller_sub_title}>{this.props.title}

          <img onClick={this.toggle} src={(this.state.toggle)?"/images/ic_arrow_up.png":"/images/ic_arrow_down.png"} className={styles.show_items_button}/>
          </div>
       </div>);
    }

    toggle(){
      let toggle = !this.state.toggle;
      this.setState({toggle});
      this.props.onToggle(toggle);
    }
}

ControllerHeader.propTypes = propTypes;

export default ControllerHeader;
