import React from 'react';
import styles from './Assets.css';

const propTypes = {
  styles: React.propTypes.object.isRequired,
  value: React.propTypes.string.isRequired
};

const TextAsset = React.createClass({

  render: function() {
    return (
      <Asset style={this.props.styles}>
        <Text>
          this.props.value;
        </Text>
      </Asset>
    )
  }
});

TextAsset.propTypes = propTypes;

export default TextAsset;
