import React from 'react';

import styles from './style.css';

import SlidePreviewCard from './components/SlidePreviewCard';
import SlideCreator from './components/SlideCreateCard';
import DraggableCardList from './components/DraggableCardList';

const propTypes = {
  className: React.PropTypes.string.isRequired,
  editorActions: React.PropTypes.object.isRequired,
  uiActions: React.PropTypes.object.isRequired,
  slides: React.PropTypes.array.isRequired,
  currentSlideIndex: React.PropTypes.number
};

class SlideManager extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let renderSlidePreviews = (slides) => {
      return slides.map((slide, idx) => {
        let active = idx == this.props.currentSlideIndex;
        return (
          <SlidePreviewCard
            active={active}
            copySlide={this.props.editorActions.copySlide}
            deleteSlide={this.props.editorActions.deleteSlide}
            idx={idx}
            key={idx+'-'+slide.id}
            onClick={() => this.props.editorActions.selectSlide(slide.id)}
            shareSlide={this.props.editorActions.shareSlide}
            slide={slide}
          />)
      })
    };

    return (
      <div className={this.props.className}>
        <div className={styles.inner}>
          <div className={styles.title}>
                        슬라이드 리스트
          </div>
          <div className={styles.hide}
            onClick={this.props.uiActions.toggleSlideManager}
          />
          <DraggableCardList onExchangeSlide={this.props.editorActions.exchangeSlide}>
            {renderSlidePreviews(this.props.slides)}
          </DraggableCardList>
          <SlideCreator createSlide={this.props.editorActions.createSlide} />
        </div>
      </div>
    );
  }
}

SlideManager.propTypes = propTypes;

export default SlideManager;
