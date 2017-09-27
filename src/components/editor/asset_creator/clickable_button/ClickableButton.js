import React, { PropTypes } from 'react'
import styles from './ClickableButton.css';

class ClickableButton extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={styles.clickableButton} onClick={this.props.onClick}>
        <div>
          {this.props.name}
        </div>
      </div>
    );
  }

}


export default ClickableButton;
