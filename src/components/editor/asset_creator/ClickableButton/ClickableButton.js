import React from 'react'
import styles from './ClickableButton.css';

class ClickableButton extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li>
          <button onClick={this.props.onClick}>
            <i>{this.props.icon}</i>
          </button>
      </li>
    );
  }

}

export default ClickableButton;
