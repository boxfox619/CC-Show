import React from 'react';

import styles from './style.css';

import {PlusCard, ImageActionCard, DraggableCardList} from 'components';

export default class SlideManager extends React.Component {

    static propTypes = {
        className: React.PropTypes.string.isRequired,
        editorActions: React.PropTypes.object.isRequired,
        uiActions: React.PropTypes.object.isRequired,
        slides: React.PropTypes.array.isRequired,
        currentSlideIndex: React.PropTypes.number
    };

    render() {
        let renderSlidePreviews = (slides) => {
            return slides.map((slide, idx) => {
                let active = idx === this.props.currentSlideIndex;
                return (
                    <ImageActionCard
                        active={active}
                        actions={[{icon: 'share', onClick: () => this.props.editorActions.shareSlide(slide)},
                            {icon: 'copy', onClick: () => this.props.editorActions.copySlide(slide)},
                            {icon: 'delete', onClick: () => this.props.editorActions.deleteSlide(slide)}]}
                        onClick={() => this.props.editorActions.selectSlide(slide.id)}
                        key={idx + '-' + slide.id}
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
                    <PlusCard onClick={this.props.editorActions.createSlide} label={'새 슬라이드'}/>
                </div>
            </div>
        );
    }
}