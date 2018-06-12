import React from 'react';
import styles from './style.css';
import * as FormService from "../services/FormComponentService";

const propTypes = {
    onClick: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired
};

const defaultProps = {
    className: '',
};

class Button extends React.Component {
    constructor(prop) {
        super(prop);
    };

    render() {
        return (
          <div className={styles.button} onClick={this.props.onClick} style={FormService.createStyleObject(this.props)}>
            {this.props.label}
          </div>
        );
    }

}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
