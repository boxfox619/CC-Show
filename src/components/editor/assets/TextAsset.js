import React from 'react';
import styles from './Assets.css';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired
};

class TextAsset extends React.Component{

  render() {
    return (
      <div style={this.props.styles}>
          {this.props.value}
      </div>
    )
  }
}

TextAsset.propTypes = propTypes;

export default TextAsset;
