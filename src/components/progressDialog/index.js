import React from 'react';

import styles from './style.css';

class ProgressDialog extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={this.props.className+' '+styles.customize}>
       <div className={styles.container}>
        <div className={styles.progress}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>
      </div>
    )
  }
}

export default ProgressDialog;
