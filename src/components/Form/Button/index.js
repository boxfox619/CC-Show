import React from 'react';
import styles from './style.css';
import classnames from 'classnames';
import * as FormService from '../services/FormComponentService';

const propTypes = {
  onClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired,
  thema: React.PropTypes.string
};

const defaultProps = {
  className: '',
  thema: ''
};

class Button extends React.Component {
  constructor(prop) {
    super(prop);
    this.getThema = this.getThema.bind(this);
  }

  render() {
    return (
      <div className={classnames(styles.button, this.getThema())}
        onClick={this.props.onClick}
        style={FormService.createStyleObject(this.props)}
      >
        {this.props.label}
      </div>
    );
  }

  getThema(){
    switch(this.props.thema){
      case 'blue':
        return styles.blue;
      default:
        return '';
    }
  }

}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
