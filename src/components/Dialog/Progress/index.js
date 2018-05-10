import React from 'react';

import styles from './style.css';

const propTypes = {
  className: React.PropTypes.string.isRequired
}

class ProgressDialog extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={this.props.className+' '+styles.customize}>
        <div className={styles.container}>
          <div className={styles.progress}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    )
  }
}

ProgressDialog.propTypes = propTypes;

export default ProgressDialog;
