import React from 'react';
import classnames from 'classnames';
import styles from './style.css';
import * as FormService from '../services/form.component.service';
import LabelText from '../label-text';

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
  }

  render() {
    return (
      <div>
        {!!this.props.label &&
            <LabelText text={this.props.label} />
        }
        <div className={styles.cover}
          style={FormService.createStyleObject(this.props)}
        >
          <input
            className={classnames(styles.text, this.props.className)}
            onChange={(e) => this.props.onChange(e.target.value)}
            placeholder={this.props.placeholder}
            type="text"
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
