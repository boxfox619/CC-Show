import React from 'react';

import styles from './style.css';

const propTypes = {
  title: React.PropTypes.string.isRequired
}

class ControllerWrapper extends React.Component {

  constructor(prop) {
    super(prop);

    this.state = {
      toggle: true
    }
  }

  render() {
    return (
      <div>
        <div className={styles.fliping_controller_section}>
          <div className={styles.controller_sub_wrapper}>
            <div className={styles.controller_sub_title}>{this.props.title}
              <img className={styles.show_items_button}
                onClick={() => this.setState({toggle: !this.state.toggle})}
                src={(this.state.toggle) ? '/images/ic_arrow_down.png' : '/images/ic_arrow_up.png'}
              />
            </div>
          </div>
          {this.state.toggle && this.props.children}
        </div>
        <hr className={styles.controller_hr} />
      </div>
    );
  }
}

ControllerWrapper.propTypes = propTypes;

export default ControllerWrapper;
