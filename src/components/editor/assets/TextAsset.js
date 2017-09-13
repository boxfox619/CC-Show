import React from 'react';
import styles from './Assets.css';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired
};

class TextAsset extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    return (
      <textarea onChange={this.props.onChange} style={this.props.styles} defaultValue={this.props.value}>
      </textarea>
    )
  }
}

TextAsset.propTypes = propTypes;

export default TextAsset;
