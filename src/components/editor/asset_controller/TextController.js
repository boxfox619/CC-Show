import React from 'react';
import * as actions from '../../../actions/assets';
import { connect } from 'react-redux';

import styles from './AssetController.css';

class TextController extends React.Component{
    constructor(prop) {
        super(prop);

        this.state={
            text:true,
            text_arrow_up:false,
            text_arrow_down:true
        };

        this.textOn=this.textOn.bind(this);
        this.textOff=this.textOff.bind(this);

    }

    render(){
        return(
            <div>
                <div>
                    <div className={styles.controller_sub_wrapper}>
                    <div className={styles.controller_sub_title}>텍스트
                        <img onClick={this.textOn.bind()} src="images/ic_arrow_up.png" style={this.state.text_arrow_up ? {} : {display:'none'}} className={styles.show_items_button}/>
                        <img onClick={this.textOff.bind()} src="images/ic_arrow_down.png" style={this.state.text_arrow_down ? {} : {display:'none'}} className={styles.show_items_button}/>
                    </div>
                </div>
                <div style={this.state.text ? {} : {display:'none'}} className={styles.items}>
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

                <div>
                    <img src=""/>
                    <img src=""/>
                    <img src=""/>
                    <img src=""/>
                    <img src=""/>
                    <img src=""/>
                    <img src=""/>
                    <img src=""/>
                </div>
            </div>
        </div>
        <hr/>
            </div>
        )
    }

    textOn() {
        this.setState({
            ...this.state,
            text:true,
            text_arrow_up:false,
            text_arrow_down:true
        });
    }

    textOff() {
        this.setState({
            ...this.state,
            text:false,
            text_arrow_up:true,
            text_arrow_down:false
        });
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
