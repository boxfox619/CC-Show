import React from 'react';

import { connect } from 'react-redux';

import styles from './SlideShow.css';

class SlideShow extends React.Component{
    

    render(){
        return(
            <div>
                <div id={styles.slide_contents}>
                    <div>
                        <img src="images/ic_arrow_left_big.png"/>
                    </div>
                <div>

                </div>
                <div>
                    <img src="images/ic_arrow_right_big.png"/>
                </div>
                </div>
                <div id={styles.slide_sub_contents}>
                    <div id={styles.slide_show_note}>
                        <input type="text" id={styles.slide_note_contents} placeholder="쇼 노트를 입력하세요"/>
                    </div>
                    <hr/>   
                    <div id={styles.slide_number_wrapper}>
                        <div id={styles.slide_number_contents}>
                            <img src="images/ic_arrow_left_small.png"/>
                            <input type="text"/>
                            <p>/</p>
                            <input type="text"/>
                            <img src="images/ic_arrow_right_small.png"/>
                        </div>
                        <div id={styles.slide_option_button}>
                            <img src="images/ic_fullscreen.png"/>
                            <img src="images/ic_slide_show.png"/>
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
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideShow);
