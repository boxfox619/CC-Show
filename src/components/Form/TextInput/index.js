import React from 'react';
import classnames from 'classnames';
import styles from './style.css';
import * as FormService from "../services/FormComponentService";
import LabelText from '../LabelText';

const propTypes = {
    onChange: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string
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
          <div>
            {!!this.props.label &&
            <LabelText text={this.props.label} />
                }
            <div className={styles.cover} style={FormService.createStyleObject(this.props)}>
              <input
                type='text'
                className={classnames(styles.text, this.props.className)}
                placeholder={this.props.placeholder}
                onChange={(e) => this.props.onChange(e.target.value)}
                value={this.props.text}
          />
            </div>
          </div>
        );
    }
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
