import React from 'react';
import styles from './style.css';

const propTypes = {
  text: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  checked: React.PropTypes.bool.isRequired
}

class Toggle extends React.Component{
    constructor(prop){
        super(prop);
   };

    render(){
      return(
        <div className = {styles.toggle_div}>
          <input type = "checkbox"  className = {styles.modebox} checked={this.props.checked} onChange={this.props.onChange}/>
            <label className = {styles.modeboxlabel}>
                <span className = {styles.toggle_span}>{this.props.text}</span>
            </label>
        </div>
      );
    }
}

Toggle.propTypes = propTypes;


export default Toggle;
