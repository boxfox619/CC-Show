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
        this.createCustomStyle = this.createCustomStyle.bind(this);
    };

    render() {
        return (
          <div>
            {!!this.props.label &&
            <LabelText text={this.props.label} />
                }
            <input
              type='text'
              className={classnames(styles.text, this.props.className)}
              style={this.createCustomStyle((FormService.createStyleObject(this.props)))}
              placeholder={this.props.placeholder}
              onChange={(e) => this.props.onChange(e.target.value)}
              value={this.props.text}
          />
          </div>
        );
    }

    createCustomStyle(style){
        let tmpStyle = {...style};
        if(!!tmpStyle.width){
            tmpStyle['width'] = 'calc('+tmpStyle.width+' - 24px)';
        }
        return tmpStyle;
    }
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
