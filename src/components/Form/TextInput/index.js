import React from 'react';
import styles from './style.css';

const propTypes = {
  onChange: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
}

class TextInput extends React.Component{
    constructor(prop){
        super(prop);
    };

    render(){
        return(
          <div className = {styles.cover}>
              <span className = {styles.title_label}>{this.props.label}</span>
              <input type = "text" className = {styles.title} placeholder={this.props.label+"을 입력하세요"} onChange = {(e)=>this.onChange(e)} value = {this.props.text}/>
          </div>
        );
    }
}

TextInput.propTypes = propTypes;


export default TextInput;
