import React from 'react';

import styles from './style.css';

const propTypes = {
    currentSlideIndex: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
};

class TitleField extends React.Component {

    render() {
        return (
            <div className={styles.slideTitle}>
                <input key={this.props.currentSlideIndex} type="text" onChange={(e) => this.props.onChange(e.target.value)} defaultValue={this.props.title}/>
            </div>
        );
    }
}

TitleField.propTypes = propTypes;

export default TitleField;
