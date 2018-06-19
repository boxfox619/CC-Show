import React from 'react';
import styles from './style.css';
import * as FormService from '../services/FormComponentService';

const propTypes = {
  text: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  checked: React.PropTypes.bool.isRequired
}

class Toggle extends React.Component{
  constructor(prop){
    super(prop);
  }

  render(){
    return(
      <div className={styles.toggle}
        style={FormService.createStyleObject(this.props)}>
        <input checked={this.props.checked}
          onChange={()=>this.props.onChange(!this.props.checked)}
          type="checkbox"
        />
        <label>
          <span className={styles.toggle}>{this.props.text}</span>
        </label>
      </div>
    );
  }
}

Toggle.propTypes = propTypes;


export default Toggle;
