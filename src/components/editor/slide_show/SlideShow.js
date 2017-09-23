import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as slideActions from '../../../actions/slides';

import styles from './SlideShow.css';

class SlideShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
           selectedSlide: 0
        }

        this.doSlide = this.doSlide.bind(this);
        this.slideNoteChangeHandler = this.slideNoteChangeHandler.bind(this);
    }

    render(){
      let showNote = this.props.slides[this.state.selectedSlide].note;
      showNote = (showNote== undefined)?'':showNote;
          return(
              <div className={this.props.className}>
                <header>
                  <h1>SLIDE SHOW</h1>
                </header>
                <content className={styles.slideShow}>
                    <div className={styles.slide_contents}>
                        <div onClick={()=>this.doSlide(-1)} className={styles.slideController+' '+styles.prev_slide}>
                            <img src="images/ic_arrow_left_big.png"/>
                        </div>

                        <img className={styles.slide} src={this.props.slides[this.state.selectedSlide].thumbnail}/>

                        <div onClick={()=>this.doSlide(+1)} className={styles.slideController+' '+styles.next_slide}>
                            <img src="images/ic_arrow_right_big.png"/>
                        </div>
                    <div>
                    </div>
                    </div>
                    <div className={styles.slideSubContents}>
                        <div className={styles.slideShowNote}>
                            <textarea type="text" onChange={this.slideNoteChangeHandler} className={styles.slideShowNote_content} placeholder="쇼 노트를 입력하세요" value={showNote}/>
                        </div>
                        <hr className={styles.split}/>
                        <div className={styles.slideNumberWrapper}>
                            <div className={styles.slideNumberContext}>
                                <img onClick={()=>this.doSlide(-1)} className={styles.prev_slide+' '+styles.slideController} src="images/ic_arrow_left_small.png"/>
                                <div className={styles.slideNumberContext_counter}>{this.state.selectedSlide+1}/{this.props.slides.length}</div>
                                <img onClick={()=>this.doSlide(+1)} className={styles.next_slide+' '+styles.slideController} src="images/ic_arrow_right_small.png"/>
                            </div>
                            <div className={styles.slideOptionButton}>
                              <img src="images/ic_fullscreen.png"/>
                              <img src="images/ic_slide_show.png"/>
                            </div>
                        </div>
                    </div>
                </content>
              </div>
          )
    }

    slideNoteChangeHandler(event){
      this.props.setSlideNote(this.state.selectedSlide, event.target.value);
    }

    doSlide(num){
      let willSelectSlide = this.state.selectedSlide + num;
      if(willSelectSlide<0||willSelectSlide==this.props.slides.length){
        return;
      }else
        this.setState({
          selectedSlide: willSelectSlide
        })
    }
}




const mapStateToProps = (state) => {
  return {
    slides: state.editor.slides
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...slideActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideShow);
