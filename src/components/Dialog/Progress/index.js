import React from 'react';

import styles from './style.css';
import modalStyles from '../style.css';

class ProgressDialog extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={modalStyles.modal+' '+styles.customize}>
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

export default ProgressDialog;
