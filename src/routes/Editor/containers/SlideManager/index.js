import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import styles from './style.css';

import {PlusCard, ImageActionCard, DraggableCardList} from '../../../../core/components/index';
import {copySlide, createSlide, deleteSlide, moveSlide, selectSlide} from "../../modules/slide";

class Index extends React.Component {

    static propTypes = {
        className: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired
    };

    render() {
        let renderSlidePreviews = (slides) => {
            return slides.map((slide, idx) => {
                let active = slide.id === this.props.currentSlideId;
                return (
                    <ImageActionCard
                        active={active}
                        actions={[{icon: 'share', onClick: () => this.props.shareSlide(slide)},
                            {icon: 'copy', onClick: () => this.props.copySlide(slide)},
                            {icon: 'delete', onClick: () => this.props.deleteSlide(slide)}]}
                        onClick={() => this.props.selectSlide(slide.id)}
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
                    <div className={styles.hide} onClick={this.props.onClose}/>
                    <DraggableCardList onExchangeSlide={this.props.exchangeSlide}>
                        {renderSlidePreviews(this.props.slides)}
                    </DraggableCardList>
                    <PlusCard onClick={this.props.createSlide} label={'새 슬라이드'}/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    selectSlide,
    createSlide,
    deleteSlide,
    copySlide,
    moveSlide,
    shareSlide
};

const mapStateToProps = (state) => ({
    slides: state.editor.slides,
    currentSlideId: state.editor.selectedSlideId
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);