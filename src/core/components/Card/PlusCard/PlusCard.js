import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class PlusCard extends React.Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className={styles["create-card"]} onClick={this.props.onClick}>
                <div className={styles.label}>{this.props.label}</div>
                <img src="/images/ic_add_white.png" />
            </div>
        );
    }
}