import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './SlideShow.css';

class SlideShow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

          return(
              <div className={this.props.className}>
                <header>
                  <h1>SLIDE SHOW</h1>
                </header>
                <content className={styles.slideShow}>
                    <div className={styles.slide_contents}>
                        <div className={styles.slideController+' '+styles.prev_slide}>
                            <img src="images/ic_arrow_left_big.png"/>
                        </div>

                        <div className={styles.slideController+' '+styles.next_slide}>
                            <img src="images/ic_arrow_right_big.png"/>
                        </div>
                    <div>
                    </div>
                    </div>
                    <div className={styles.slideSubContents}>
                        <div className={styles.slideShowNote}>
                            <textarea className={styles.slideShowNote_content} placeholder="쇼 노트를 입력하세요"></textarea>
                        </div>
                        <hr className={styles.split}/>
                        <div className={styles.slideNumberWrapper}>
                            <div className={styles.slideNumberContext}>
                                <img className={styles.prev_slide+' '+styles.slideController} src="images/ic_arrow_left_small.png"/>
                                <div className={styles.slideNumberContext_counter}>12/23</div>
                                <img className={styles.next_slide+' '+styles.slideController} src="images/ic_arrow_right_small.png"/>
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
}




const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideShow);
