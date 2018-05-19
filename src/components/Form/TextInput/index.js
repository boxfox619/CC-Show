import React from 'react';
import classnames from 'classnames';
import styles from './style.css';
import * as FormService from "../services/FormComponentService";

const propTypes = {
    onChange: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string
}

const defaultProps = {
    className: '',
    placeholder: ''
}

class TextInput extends React.Component {

    constructor(prop) {
        super(prop);
    };

    render() {
        return (
          <input
            type='text'
            className={classnames(styles.text, this.props.className)}
            style={FormService.createStyleObject(this.props)}
            placeholder={this.props.placeholder}
            onChange={(e) => this.props.onChange(e)}
            value={this.props.text}
          />
        );
    }
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
