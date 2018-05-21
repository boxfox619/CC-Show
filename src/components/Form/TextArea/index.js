import React from 'react';
import classnames from 'classnames';
import styles from './style.css';
import * as FormService from "../services/FormComponentService";

const propTypes = {
  onChange: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired
}

class TextArea extends React.Component{
    constructor(prop){
        super(prop);
    };

    render(){
        return(
          <div className={styles.cover} style={FormService.createStyleObject(this.props)}>
            <textarea type='text'
              className={styles.text}
              placeholder={this.props.placeholder}
              onChange={(e) => this.props.onChange(e.target.value)}
              value={this.props.text} />
          </div>
        );
    }
}

TextArea.propTypes = propTypes;


export default TextArea;
