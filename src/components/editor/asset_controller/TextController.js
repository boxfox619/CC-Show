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
                <img className={styles.ic_ellipse_gray} src="../../../../../document/design/RESOURCE/Dashboard_PPT Editor/ic_ellipse_gray.png"/>
                <input className={styles.controller_sub_title} type="text" name="" value="텍스트" readonly/>
                <img onclick="textOn()" src="../../../../../document/design/RESOURCE/Dashboard_PPT Editor/ic_arrow_up.png" id="text-on" className={styles.show_items_button}/>
                <img onclick="textOff()" src="../../../../../document/design/RESOURCE/Dashboard_PPT Editor/ic_arrow_down.png" id="text-off" className={styles.show_items_button}/>
            </div>
            <div className={styles.items} id={styles.text_items}>
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

                <div className={styles.control_item}>

                </div>
            </div>
        </div>
        <hr/>
            </div>
        )
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
