import React from 'react';
import * as actions from '../../../actions/assets';
import { connect } from 'react-redux';

import styles from './AssetController.css';

class TextController extends React.Component{
    constructor(prop) {
        super(prop);
    }

    render(){
        return(
            <div>
                <div>
            <div className={styles.controller_sub_wrapper}>
                <div className={styles.controller_sub_title}>텍스트
                    <img onclick={this.textOn()} src="images/ic_arrow_up.png" id={styles.text_on} className={styles.show_items_button}/>
                    <img onclick={this.textOff()} src="images/ic_arrow_down.png" id={styles.text_off} className={styles.show_items_button}/>
                </div>
            </div>
            <div className={styles.items} id={styles.text_items}>
                <div>
                    <div className={styles.control_item}>
                    <select>
                    <option value="">asdfasdf</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    </select>
                    </div>

                    <div className={styles.control_item}>
                    <select>
                    <option value="">asdfasdf</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    </select>
                    </div>
                </div>


                <div>
                    <div className={styles.control_item}>
                    <select>
                    <option value="">asdfasdf</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                </div>

                <div className={styles.control_item}>
                    <select>
                    <option value="">asdfasdf</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                </div>
                </div>

                <div>
                    <div className={styles.control_item}>
                    <select>
                    <option value="">asdfasdf</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                </div>

                <div className={styles.control_item}>
                    <select>
                    <option value="">asdfasdf</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                </div>
                </div>
            </div>
        </div>
        <hr/>
            </div>
        )
    }
    textOff() {
        console.log('this is textOff');
        let d = document;
        d.getElementById('text-off').style.display = "none"
        d.getElementById('text-on').style.display = "block"
        d.getElementById('text-items').style.display = "none";
    }

    textOn() {
        console.log('this is textOn');
        let d = document;
        d.getElementById('text-on').style.display = "none"
        d.getElementById('text-off').style.display = "block"
        d.getElementById('text-items').style.display = "block";
    }

}

const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFont: (font) => {
            dispatch(actions.setAssetFont(font))
        },
        setFontSize: (fontSize) => {
            dispatch(actions.setAssetFontSize(fontsize))
        },
        setTextSort: (sort) => {
            dispatch(actions.setAssetTextSort(sort))
        },
        setFontBold: (bold) => {
            dispatch(actions.setAssetFontBold(bold))
        },
        setFontUnderline: (underline) => {
            dispatch(actions.setAssetFontUnderline(underline))
        },
        setFontItalic: (italic) => {
            dispatch(actions.setAssetFontItalic(italic))
        },
        setTextFillColor: (color) => {
            dispatch(actions.setAssetTextFillColor(color))
        },
        setTextEdge: (color, weight) => {
            dispatch(actions.setAssetTextEdge(color, weight))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextController);
