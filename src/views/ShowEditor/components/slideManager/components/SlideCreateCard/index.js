import React from 'react';
import styles from './style.css';

const propTypes = {
    createSlide: React.PropTypes.func.isRequired
}

class SlideCreateCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div onClick={this.props.createSlide} className={styles.slideCreateCard}>
                <div className={styles.description}>새 슬라이드</div>
                <img src="/images/ic_add_white.png"/>
            </div>
        );
    }
}

SlideCreateCard.propTypes = propTypes;

export default SlideCreateCard;
