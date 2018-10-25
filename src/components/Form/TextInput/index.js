import React, {Component} from 'react';
import PropTypes from "prop-types";
import styles from './style.css';
import LabelText from '../label-text';

export default class TextInput extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        label: PropTypes.string,
        style: PropTypes.object
    };
    props = {
        placeholder: ''
    };

    constructor(prop) {
        super(prop);
    }

    render() {
        return (
            <div>
                {!!this.props.label && <LabelText text={this.props.label}/>}
                <div className={styles.cover} style={this.props.style}>
                    <input
                        className={this.props.className}
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