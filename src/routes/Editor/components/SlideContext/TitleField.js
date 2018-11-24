import React from 'react';
import PropTypes from 'prop-types';

import styles from '../SlideController/styles.css';

export default class TitleField extends React.Component {

    static propTypes = {
        currentSlideIndex: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className={styles.slideTitle}>
                <input defaultValue={this.props.title}
                       key={this.props.currentSlideIndex}
                       onChange={(e) => this.props.onChange(e.target.value)}
                       type="text"
                />
            </div>
        );
    }
}