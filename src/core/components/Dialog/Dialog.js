import React from 'react';
import PropTypes from 'prop-types';
import styles from 'style.css';

export default class Dialog extends React.Component {
    static propTypes = {
        className: PropTypes.string.isRequired,
        children: PropTypes.array.isRequired
    };

    static defaultProps = {
        className: ''
    }

    render() {
        return (
            <div class={`${styles.modal} ${this.props.className}`}>
                {this.props.children}
            </div>
        )
    }
}