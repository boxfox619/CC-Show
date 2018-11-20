import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class GradientButton extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.clickableButton}
                 onClick={this.props.onClick}>
                <div>
                    {this.props.label}
                </div>
            </div>
        );
    }
}