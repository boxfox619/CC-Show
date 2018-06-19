import React from 'react';
import styles from './style.css';

const propTypes = {
  text: React.PropTypes.string.isRequired,
};

class LabelText extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    return (
      <div className={styles.label}>
        {this.props.text}
      </div>
    );
  }
}
LabelText.propTypes = propTypes;

export default LabelText;
