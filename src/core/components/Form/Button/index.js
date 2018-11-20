import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired,
        style: PropTypes.object
    };
    props = {
        className: '',
        theme: ''
    };

    constructor(prop) {
        super(prop);
        this.getTheme = this.getTheme.bind(this);
    }

    render() {
        return (
            <div className={styles.button}
                 onClick={this.props.onClick}
                 style={this.props.style}>
                {this.props.label}
            </div>
        );
    }

};