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
            <div>
                <div id={styles.slide_contents}>
                    <div className={styles.slideController+' '+styles.prev_slide}>
                        <img src="images/ic_arrow_left_big.png"/>
                    </div>

                    <div className={styles.slideController+' '+styles.next_slide}>
                        <img src="images/ic_arrow_right_big.png"/>
                    </div>
                <div>
                </div>
                </div>
                <div className={styles.slide_sub_contents}>
                    <div className={styles.slide_show_note}>
                        <textarea className={styles.slide_note_contents} placeholder="쇼 노트를 입력하세요"></textarea>
                    </div>
                    <hr/>
                    <div className={styles.slide_number_wrapper}>
                        <div className={styles.slide_number_contents}>
                            <img className={styles.prev_slide} src="images/ic_arrow_left_small.png"/><div className={styles.counter}>12/23</div>
                            <img className={styles.next_slide} src="images/ic_arrow_right_small.png"/>
                        </div>
                    </div>
                </div>
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
