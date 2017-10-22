import React from 'react';
import styles from './Assets.css';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired,
  attrs: React.PropTypes.object.isRequired
};

class TextAsset extends React.Component{

  render() {
    let styleObj = this.props.styles;
    if(this.props.attrs.edit){
      styleObj = {
        ...styleObj,
        'cursor': 'auto'
      }
    }
    return (
      <div style={styleObj} onChange={this.props.handleChange} contentEditable={true}>{this.props.value}
      </div>
    )
  }
}

TextAsset.propTypes = propTypes;

export default TextAsset;
