import React from 'react';

import styles from './style.css';

const propTypes = {
  currentSlideIndex: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

class TitleField extends React.Component {

  render() {
    return (
      <div className={styles.slideTitle}>
        <input defaultValue={this.props.title}
          key={this.props.currentSlideIndex}
          onChange={(e) => this.props.onChange(e.target.value)}
          type="text"
        />
      </div>
    );
  }
}

TitleField.propTypes = propTypes;

export default TitleField;
