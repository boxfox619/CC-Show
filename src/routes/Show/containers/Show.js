import React from 'react';
import {connect} from 'react-redux';
import styles from 'styles.css';
import {loadShowData} from '../modules/show';
import Slide from './components/Slide';

class Show extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentSlideIdx: 0
        }
    }
    render() {
        let renderingSlides = (slides, currentSlideIdx) => {
            if (slides.length > 0) {
                return slides.map((slide, idx) => {
                    return (<Slide slide={slide} visible={idx == currentSlideIdx}/>);
                });
            } else {
                return (<img className={styles.loader} src="/images/progress.gif"/>);
            }
        }
        return renderingSlides(this.props.slides);
    }
}

const mapDispatchToProps = {
    loadShowData
};

const mapStateToProps = (state) => ({
    data: state.show.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Show)