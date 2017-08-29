import React from 'react';

import styles from './SilcdeShow.css';

class SildeShow extends React.Component{
    constructor(prop) {
        
    }

    render(){
        <div>
            <div id={styles.silde_contents}>
                <div>
                    <img src="images/"/>
                </div>
                <div>

                </div>
                <div>
                    <img src="images/"/>
                </div>
            </div>
            <div id={styles.silde_sub_contents}>
                <div id={styles.silde_show_note}>
                    <input type="text" id={styles.silde_note_contents} placeholder="쇼 노트를 입력하세요"/>
                </div>
                <hr/>   
                <div id={styles.silde_number_wrapper}>
                    <div id={styles.silde_number_contents}>
                        <img src="images/" alt=""/>
                        <input type="text"/>
                        <p>/</p>
                        <input type="text"/>
                        <img src="images/" alt=""/>
                    </div>
                    <div id={styles.silde_option_button}>
                        <img src="images/" alt=""/>
                        <img src="images/" alt=""/>
                    </div>
                </div>
            </div>
        </div>
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
