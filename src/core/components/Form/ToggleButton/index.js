import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export class Toggle extends Component{
    static propTypes = {
        text: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        checked: PropTypes.bool.isRequired,
        style: PropTypes.object
    }
  constructor(prop){
    super(prop);
  }

  render(){
    return(
      <div className={styles.toggle}
        style={this.props.style}>
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