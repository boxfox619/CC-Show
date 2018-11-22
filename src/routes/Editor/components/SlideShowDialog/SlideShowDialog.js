import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class SlideShowDialog extends React.Component {
    static propTypes = {
        slides: PropTypes.array.isRequired,
        showId: PropTypes.string.isRequired,
        setSlideNote: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            selectedSlide: 0
        };
    }

    render() {
        let showNote = this.props.slides[this.state.selectedSlide].note;
        showNote = (showNote === undefined) ? '' : showNote;
        return (
            <div className={this.props.className}>
                <header>
                    <h1>SLIDE SHOW</h1>
                </header>
                <content className={styles["slide-show"]}>
                    <div className={styles["slide-contents"]}>
                        <div className={`${styles["slide-controller"]} ${styles["prev-slide"]}`} onClick={() => this.doSlide(-1)}>
                            <img src="/images/ic_arrow_left_big.png"/>
                        </div>

                        <img className={styles['slide']} src={this.props.slides[this.state.selectedSlide].thumbnail}/>
                        <div className={`${styles["slide-controller"]} ${styles["next-slide"]}`} onClick={() => this.doSlide(+1)}>
                            <img src="/images/ic_arrow_right_big.png"/>
                        </div>
                        <div/>
                    </div>
                    <div className={styles["botton-container"]}>
                        <div className={styles["show-note"]}>
                          <textarea className={styles["content"]}
                                    onChange={this.slideNoteChangeHandler}
                                    placeholder="쇼 노트를 입력하세요"
                                    value={showNote}
                          />
                        </div>
                        <hr className={styles["split"]}/>
                        <div className={styles["slide-number-wrapper"]}>
                            <div className={styles["slide-number-context"]}>
                                <img className={`${styles["slide-controller"]} ${styles["prev-slide"]}`}
                                     onClick={() => this.doSlide(-1)}
                                     src="/images/ic_arrow_left_small.png"
                                />
                                <div
                                    className={styles['counter']}>{this.state.selectedSlide + 1}/{this.props.slides.length}</div>
                                <img className={`${styles["slide-controller"]} ${styles["next-slide"]}`}
                                     onClick={() => this.doSlide(+1)}
                                     src="/images/ic_arrow_right_small.png"
                                />
                            </div>
                            <div className={styles["slide-option-button"]}>
                                <img onClick={() => window.open('/show/play/?show=' + this.props.showId, '_blank')}
                                     src="/images/ic_fullscreen.png"
                                />
                                <img src="/images/ic_slide_show.png"/>
                            </div>
                        </div>
                    </div>
                </content>
            </div>
        )
    }

    slideNoteChangeHandler = (event) => {
        this.props.setSlideNote(this.state.selectedSlide, event.target.value);
    };

    doSlide = (num) => {
        let willSelectSlide = this.state.selectedSlide + num;
        if (willSelectSlide < 0 || willSelectSlide === this.props.slides.length) {
            return;
        } else
            this.setState({
                selectedSlide: willSelectSlide
            })
    };
}