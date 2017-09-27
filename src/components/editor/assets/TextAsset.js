import React from 'react';
import styles from './Assets.css';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired
};

class TextAsset extends React.Component{

  render() {
    return (
      <textarea style={this.props.styles} onChange={this.props.handleChange} defaultValue={this.props.value}>
      </textarea>
    )
  }
}

TextAsset.propTypes = propTypes;

export default TextAsset;
