import React from 'react';
import styles from './Assets.css';

import axios from 'axios';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired
};

class CustomAsset extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={this.props.styles} dangerouslySetInnerHTML={ {__html: this.props.value}}/>
    )
  }
}

CustomAsset.propTypes = propTypes;

export default CustomAsset;
