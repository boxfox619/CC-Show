import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

export default class InputControllerItem extends React.Component {
    static propTypes = {
        title: PropTypes.any.isRequired,
        onChange: PropTypes.func.isRequired,
        inputType: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired
    };

    static defaultProps = {
        inputType: 'text'
    };

    render() {
        return (
            <div className={styles['controller']}>
                <span className={styles['title']}>{this.props.title}</span>
                <input className={styles['input']}
                       onChange={this.props.onChange}
                       type={this.props.inputType}
                       value={this.props.value}
                />
            </div>
        )
    }
}