import React from 'react';
import styles from './style.css';
import * as FormService from '../services/form.component.service';

const propTypes = {
  onChange: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired
}

class TextArea extends React.Component{
  constructor(prop){
    super(prop);
  }

  render(){
    return(
      <div className={styles.cover}
        style={FormService.createStyleObject(this.props)}>
        <textarea className={styles.text}
          onChange={(e) => this.props.onChange(e.target.value)}
          placeholder={this.props.placeholder}
          type="text"
          value={this.props.text}
        />
      </div>
    );
  }
}

TextArea.propTypes = propTypes;


export default TextArea;
