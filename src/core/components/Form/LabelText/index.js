import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class LabelText extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    constructor(prop) {
        super(prop);
    }

    render() {
        return (
            <div className={styles.label}>
                {this.props.text}
            </div>
        );
    }
}