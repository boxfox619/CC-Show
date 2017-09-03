import React from 'react';

import styles from './SilcdeShow.css';

class SildeShow extends React.Component{
    constructor(prop) {
        
    }

    render(){
        return(
            <div>
                <div id={styles.silde_contents}>
                    <div>
                        <img src="images/ic_arrow_left_big.png"/>
                    </div>
                <div>

                </div>
                <div>
                    <img src="images/ic_arrow_right_big.png"/>
                </div>
                </div>
                <div id={styles.silde_sub_contents}>
                    <div id={styles.silde_show_note}>
                        <input type="text" id={styles.silde_note_contents} placeholder="쇼 노트를 입력하세요"/>
                    </div>
                    <hr/>   
                    <div id={styles.silde_number_wrapper}>
                        <div id={styles.silde_number_contents}>
                            <img src="images/ic_arrow_left_small.png"/>
                            <input type="text"/>
                            <p>/</p>
                            <input type="text"/>
                            <img src="images/ic_arrow_left_small.png"/>
                        </div>
                        <div id={styles.silde_option_button}>
                            <img src="images/ic_fullscreen.png"/>
                            <img src="images/ic_silde_show.png"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SildeShow);
