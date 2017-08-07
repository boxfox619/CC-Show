import React from 'react';
import styles from './Assets.css';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired
};

const TextAsset = React.createClass({

  render: function() {
    return (
      <div style={this.props.styles}>
          {this.props.value}
      </div>
    )
  }
});

TextAsset.propTypes = propTypes;

export default TextAsset;
