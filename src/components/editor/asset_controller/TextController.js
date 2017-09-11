import React from 'react';
import * as actions from '../../../actions/assets';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
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
        let selectedAsset=this.props.currentSilde.selectedAsset-1;
        let textStyles=this.props.currentSilde.assets[selectedAsset].style.text;
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
                            <option value="">자동</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>

                    <div className={styles.control_item}>
                        <img src="/images/ic_color.png"/>
                        <div className={styles.change_color}> 
                        </div>
                    </div>
                </div>

                <div className={styles.control_text_attribute}>
                    <img src="/images/ic_format_align_left.png" style={textStyles.sort==='left' ? {display : 'none'} : { }} onClick={this.props.setAssetTextSort.bind(textStyles, 'left')}/>
                    <img src="/images/ic_format_align_left_apply.png" style={textStyles.sort==='left' ? {} : {display : 'none'}}  onClick={this.props.setAssetTextSort.bind(textStyles, 'left')} />

                    <img src="/images/ic_format_align_center.png" style={textStyles.sort==='center' ? {display : 'none'} : { }}  onClick={this.props.setAssetTextSort.bind(textStyles, 'center')}/>
                    <img src="/images/ic_format_align_center_apply.png" style={textStyles.sort==='center' ? {} : {display : 'none'}}  onClick={this.props.setAssetTextSort.bind(textStyles, 'center')}/>
                    
                    <img src="/images/ic_format_align_right.png" style={textStyles.sort==='right' ? {} : {display : 'none'}}  onClick={this.props.setAssetTextSort.bind(textStyles, 'right')}/>
                    <img src="/images/ic_format_align_right_apply.png" style={textStyles.sort==='right' ? {} : {display : 'none'}}  onClick={this.props.setAssetTextSort.bind(textStyles, 'right')}/>
                    
                    <img src="/images/ic_format_align_justify.png" style={textStyles.sort==='justify' ? {display : 'none'} : { }}  onClick={this.props.setAssetTextSort.bind(textStyles, 'justify')}/>
                    <img src="/images/ic_format_align_justify_apply.png" style={textStyles.sort==='justify' ? {} : {display : 'none'}}  onClick={this.props.setAssetTextSort.bind(textStyles, 'justify')}/>
                    
                    <img src="/images/ic_format_bold.png" style={textStyles.bold ? {display : 'none'} : { }} onClick={this.props.clickAlignBold.bind(textStyles)}/>
                    <img src="/images/ic_format_bold_apply.png" style={textStyles.bold ? {} : {display : 'none'}} onClick={this.props.clickAlignBold.bind(textStyles)}/>
                    
                    <img src="/images/ic_format_italic.png" style={textStyles.italic ? {display : 'none'} : { }} onClick={this.props.clickAlignItalic.bind(textStyles)}/>
                    <img src="/images/ic_format_italic_apply.png" style={textStyles.italic ? {} : {display : 'none'}} onClick={this.props.clickAlignItalic.bind(textStyles)}/>
                    
                    <img src="/images/ic_format_underlined.png" style={textStyles.underline ? {display : 'none'} : { }} onClick={this.props.clickAlignUnderline.bind(textStyles)}/>
                    <img src="/images/ic_format_underlined_apply.png" style={textStyles.underline ? {} : {display : 'none'}} onClick={this.props.clickAlignUnderline.bind(textStyles)}/>
                    
                    <img src="/images/ic_format_strikethrough.png" style={textStyles.strikethrough ? {display : 'none'} : { }} onClick={this.props.clickAlignStrikethrough.bind(textStyles)}/>
                    <img src="/images/ic_format_strikethrough_apply.png" style={textStyles.strikethrough ? {} : {display : 'none'}} onClick={this.props.clickAlignStrikethrough.bind(textStyles)}/>
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

    setAssetTextSort(textStyles, sort) {
        if(textStyles.sort===sort) sort = '';
        this.props.setAssetTextSort(sort);
    }

    clickAlignBold(textStyles) {
        this.props.setAssetFontBold(!textStyles.bold);
    }

    clickAlignItalic(textStyles) {
        this.props.setAssetFontBold(!textStyles.italic);
    }

    clickAlignUnderline(textStyles) {
        this.props.setFontUnderline(!textStyles.underline);
    }

    clickAlignStrikethrough(textStyles) {
        this.props.setFontUnderline(!textStyles.strikethrough);
    }
}

const mapStateToProps = (state) => {
    return{
        currentSilde : state.editor.slides[state.editor.selectedSlide]
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TextController);
