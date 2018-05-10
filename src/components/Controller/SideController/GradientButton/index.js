import React from 'react'
import styles from './style.css';

const propTypes = {
  onClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired
}

class GradientButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.clickableButton} onClick={this.props.onClick}>
          <div>
            {this.props.label}
          </div>
        </div>
    );
  }
}

GradientButton.propTypes = propTypes;

export default GradientButton;
