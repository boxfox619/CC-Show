import React from 'react';

import styles from './style.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SlidePreviewCard from './components/SlidePreviewCard';
import SlideCreator from './components/SlideCreateCard';
import DraggableCardList from './components/DraggableCardList';
import * as slideActions from 'services/editor/slide/actions';
import * as assetsActions from 'services/editor/asset/actions';
import * as uiActions from 'services/ui/actions';

const defaultProps = {
    className: React.PropTypes.string.required
};

var placeholder = document.createElement("li");
placeholder.className = "placeholder";

class SlideManager extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let renderSlidePreviews = (slides) => {
            return slides.map((slide, idx) => {
                let active = idx == this.props.currentSilde;
                return (
                    <SlidePreviewCard
                        active={active}
                        slide={slide}
                        idx={idx}
                        key={idx+'-'+slide.id}
                        shareSlide={this.props.shareSlide}
                        copySlide={this.props.copySlide}
                        deleteSlide={this.props.deleteSlide}
                        onClick={target => this.props.selectSlide(target)}
                    />)
            })
        };

        return (
            <div className={this.props.className}>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        슬라이드 리스트
                    </div>
                    <div className={styles.hide} onClick={this.props.toggleSlideManager}>
                    </div>
                    <DraggableCardList onExchangeSlide={this.props.exchangeSlide}>
                        {renderSlidePreviews(this.props.slides)}
                    </DraggableCardList>
                    <SlideCreator createSlide={this.props.createSlide}/>
                </div>
            </div>
        );
    }
}

SlideManager.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
        slides: state.editor.slides,
        currentSilde: state.editor.selectedSlide
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...assetsActions, ...slideActions, ...uiActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideManager);
