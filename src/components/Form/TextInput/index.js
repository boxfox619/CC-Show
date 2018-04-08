import React from 'react';
import classnames from 'classnames';
import styles from './style.css';

const propTypes = {
    onChange: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
}

const defaultProps = {
    className: ''
}

class TextInput extends React.Component{
    constructor(prop){
        super(prop);
    };

    render(){
        return(
          <div className={classnames(styles.cover, this.props.className)}>
              <span className = {styles.label}>{this.props.label}</span>
              <input type = "text" className = {styles.text} placeholder={this.props.label+"을 입력하세요"} onChange = {(e)=>this.onChange(e)} value = {this.props.text}/>
          </div>
        );
    }
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
