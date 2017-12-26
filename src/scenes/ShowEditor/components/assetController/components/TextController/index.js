import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../../style.css';
import ControllerHeader from '../controllerHeader';

import * as assetsActions from 'services/editor/asset/actions';
import * as assetsTextActions from 'services/editor/asset/text/actions';
import * as uiActions from 'services/ui/actions';

class TextController extends React.Component{
    constructor(prop) {
        super(prop);

        this.state={
            text:true
        };

        this.setFont=this.setFont.bind(this);
        this.setFontSize=this.setFontSize.bind(this);
        this.setCharacterSpacing=this.setCharacterSpacing.bind(this);
        this.setFontWeight=this.setFontWeight.bind(this);
        this.setLineSpacing=this.setLineSpacing.bind(this);
    }

    render(){
        return(
            <div>
                <div className={styles.fliping_controller_section}>
                    <ControllerHeader title={'텍스트'}  onToggle={(toggle)=>{this.setState({text : toggle})}}/>
                <div style={this.state.text ? {} : {display:'none'}} className={styles.items}>
                <div>
                    <div>
                    <div className={styles.control_item}>
                        <select id="fontSetting" onChange={this.setFont} className={styles.attribute_item_input} style={{'width':'90%', 'cursor':'pointer'}}>
                            <option value="굴림">굴림</option>
                            <option value="굴림체">굴림체</option>
                            <option value="궁서">궁서</option>
                            <option value="궁서체">궁서체</option>
                            <option value="돋움">돋움</option>
                            <option value="돋움체">돋움체</option>
                            <option value="바탕">바탕</option>
                            <option value="바탕체">바탕체</option>
                            <option value="휴면엽서체">휴먼엽서체</option>
                        </select>
                    </div>

                    <div className={styles.control_item}>
                        <input type="text" className={styles.attribute_item_input} value={this.props.fontWeight} onChange={this.setFontWeight}/>
                    </div>
                </div>

                <div>
                    <div className={styles.control_item}>
                        <span className={styles.attribute_item_title}><img src="/images/ic_format_size.png"/></span>
                        <input type="text" className={styles.attribute_item_input} value={this.props.fontSize} onChange={this.setFontSize}/>
                    </div>

                    <div className={styles.control_item}>
                        <span className={styles.attribute_item_title}><img src="/images/ic_format_line.png"/></span>
                        <input type="text" className={styles.attribute_item_input} value={this.props.textLineSpacing} onChange={this.setLineSpacing}/>
                    </div>
                </div>

                <div>
                    <div className={styles.control_item}>
                        <span className={styles.attribute_item_title}><img src="/images/ic_between.png"/></span>
                        <input type="text" className={styles.attribute_item_input} value={this.props.textCharacterSpacing} onChange={this.setCharacterSpacing}/>
                    </div>

                    <div className={styles.control_item}>
                        <span className={styles.attribute_item_title}><img src="/images/ic_color.png"/></span>
                        <div className={styles.change_color} onClick={this.props.toggleTextColorPicker} style={this.props.textColor==='black'? {border:'1px solid #5D87B5'} : {backgroundColor:this.props.textColor}}></div>
                    </div>
                </div>

                </div>
                <div className={styles.control_text_attribute}>
                    <img src="/images/ic_format_align_left.png" style={this.props.sort==='left' ? {display : 'none'} : { }} onClick={() => this.props.setAssetTextSort('left')}/>
                    <img src="/images/ic_format_align_left_apply.png" style={this.props.sort==='left' ? {} : {display : 'none'}}  onClick={() => this.props.setAssetTextSort('justify')} />

                    <img src="/images/ic_format_align_center.png" style={this.props.sort==='center' ? {display : 'none'} : { }}  onClick={() => this.props.setAssetTextSort('center')}/>
                    <img src="/images/ic_format_align_center_apply.png" style={this.props.sort==='center' ? {} : {display : 'none'}}  onClick={() =>this.props.setAssetTextSort('justify')}/>

                    <img src="/images/ic_format_align_right.png" style={this.props.sort==='right' ? {display : 'none'} : {}}  onClick={() => this.props.setAssetTextSort('right')}/>
                    <img src="/images/ic_format_align_right_apply.png" style={this.props.sort==='right' ? {} : {display : 'none'}}  onClick={() => this.props.setAssetTextSort('justify')}/>

                    <img src="/images/ic_format_align_justify.png" style={this.props.sort==='justify' ? {display : 'none'} : { }}  onClick={() => this.props.setAssetTextSort('justify')}/>
                    <img src="/images/ic_format_align_justify_apply.png" style={this.props.sort==='justify' ? {} : {display : 'none'}}  onClick={() => this.props.setAssetTextSort('justify')}/>

                    <img src="/images/ic_format_bold.png" style={this.props.bold=='normal' ? {} :  {display : 'none'}} onClick={this.props.setAssetFontBold}/>
                    <img src="/images/ic_format_bold_apply.png" style={this.props.bold=='normal' ? {display : 'none'} : {}} onClick={this.props.setAssetFontBold}/>

                    <img src="/images/ic_format_italic.png" style={this.props.italic=='normal' ? {} : {display : 'none'}} onClick={this.props.setAssetFontItalic}/>
                    <img src="/images/ic_format_italic_apply.png" style={this.props.italic=='normal' ? {display : 'none'} : {}} onClick={this.props.setAssetFontItalic}/>

                    <img src="/images/ic_format_underlined.png" style={this.props.underline=='underline' ? {display : 'none'} : {}} onClick={this.props.setAssetFontUnderline}/>
                    <img src="/images/ic_format_underlined_apply.png" style={this.props.underline=='underline' ? {} : {display : 'none'}} onClick={this.props.setAssetFontUnderline}/>

                    <img src="/images/ic_format_strikethrough.png" style={this.props.strikethrough=='line-through' ? {display : 'none'} : {}} onClick={this.props.setAssetFontStrikethrough}/>
                    <img src="/images/ic_format_strikethrough_apply.png" style={this.props.strikethrough=='line-through' ?  {} : {display : 'none'}} onClick={this.props.setAssetFontStrikethrough}/>
                </div>
            </div>
        </div>
        <hr className={styles.controller_hr}/>
        </div>
        )
    }

    setFontWeight(event) {
        let {value}=event.target;
        let intValue=parseInt(value);
        if(isNaN(intValue)){
            intValue=0;
        }
        this.props.setAssetFontWeight(intValue);
    }

    setFont() {
        let value=document.getElementById('fontSetting').value;
        this.props.setAssetTextFont(value);
    }

    setFontSize(event) {
        let {value}=event.target;
        let intValue=parseInt(value);
        if(isNaN(intValue)){
            intValue=0;
        }
        this.props.setAssetFontSize(intValue);
    }

    setLineSpacing(event) {
        let {value}=event.target;
        let intValue=parseInt(value);
        if(isNaN(intValue)){
            intValue=0;
        }
        this.props.setAssetTextLineSpacing(intValue);
    }

    setCharacterSpacing(event) {
        let {value}=event.target;
        let intValue=parseInt(value);
        if(isNaN(intValue)){
            intValue=0;
        }
        this.props.setAssetTextCharacterSpacing(intValue);
    }
}

const mapStateToProps = (state) => {
    return{
        currentSilde : state.editor.slides[state.editor.selectedSlide]
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...assetsActions, ...assetsTextActions, ...uiActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TextController);
