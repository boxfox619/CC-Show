import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../components/SlideController/styles.css';

export default class TitleField extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className={styles.slideTitle}>
                <input defaultValue={this.props.title}
                       onChange={(e) => this.props.onChange(e.target.value)}
                       type="text"
                />
            </div>
        );
    }
}