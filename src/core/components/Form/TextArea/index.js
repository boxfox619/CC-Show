import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class TextArea extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        style: PropTypes.object
    };

    constructor(prop) {
        super(prop);
    }

    render() {
        return (
            <div className={styles.cover} style={this.props.style}>
        <textarea className={styles.text}
                  onChange={(e) => this.props.onChange(e.target.value)}
                  placeholder={this.props.placeholder}
                  type="text"
                  value={this.props.text}/>
            </div>
        );
    }
}