import React from 'react';
import * as assetsActions from '../../../actions/assets';
import * as uiActions from '../../../actions/ui';
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
                    <div className={styles.control_item} >
                        <select onChange={this.setFont}>
                            <option value="">asdfasdf</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>

                    <div className={styles.control_item}>
                        <select onChange={this.setFontWeight}>
                            <option value="">asdfa</option>
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
                        <img src="/images/ic_format_size.png"/>
                        <select onChange={this.setFontSize}>
                            <option value="">asd</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>

                    <div className={styles.control_item}>
                        <img src="/images/ic_format_line.png"/>
                        <select onChange={this.setLineSpacintg}>
                            <option value="">asdfa</option>
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
                        <img src="/images/ic_between.png"/>
                        <select onChange={this.setCharacterSpacintg}>
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
                        <div className={styles.change_color} onClick={this.props.toggleTextColorPicker} style={{backgroundColor:this.props.textColor}}></div>
                    </div>
                </div>

                <div className={styles.control_text_attribute}>
                    <img src="/images/ic_format_align_left.png" style={this.props.sort==='left' ? {display : 'none'} : { }} onClick={() => this.props.setAssetTextSort('left')}/>
                    <img src="/images/ic_format_align_left_apply.png" style={this.props.sort==='left' ? {} : {display : 'none'}}  onClick={() => this.props.setAssetTextSort(' ')} />

                    <img src="/images/ic_format_align_center.png" style={this.props.sort==='center' ? {display : 'none'} : { }}  onClick={() => this.props.setAssetTextSort('center')}/>
                    <img src="/images/ic_format_align_center_apply.png" style={this.props.sort==='center' ? {} : {display : 'none'}}  onClick={() =>this.props.setAssetTextSort(' ')}/>
                    
                    <img src="/images/ic_format_align_right.png" style={this.props.sort==='right' ? {display : 'none'} : {}}  onClick={() => this.props.setAssetTextSort('right')}/>
                    <img src="/images/ic_format_align_right_apply.png" style={this.props.sort==='right' ? {} : {display : 'none'}}  onClick={() => this.props.setAssetTextSort(' ')}/>
                    
                    <img src="/images/ic_format_align_justify.png" style={this.props.sort==='justify' ? {display : 'none'} : { }}  onClick={() => this.props.setAssetTextSort('justify')}/>
                    <img src="/images/ic_format_align_justify_apply.png" style={this.props.sort==='justify' ? {} : {display : 'none'}}  onClick={() => this.props.setAssetTextSort(' ')}/>
                    
                    <img src="/images/ic_format_bold.png" style={this.props.bold ? {display : 'none'} : { }} onClick={this.props.setAssetFontBold}/>
                    <img src="/images/ic_format_bold_apply.png" style={this.props.bold ? {} : {display : 'none'}} onClick={this.props.setAssetFontBold}/>
                    
                    <img src="/images/ic_format_italic.png" style={this.props.italic ? {display : 'none'} : { }} onClick={this.props.setAssetFontItalic}/>
                    <img src="/images/ic_format_italic_apply.png" style={this.props.italic ? {} : {display : 'none'}} onClick={this.props.setAssetFontItalic}/>
                    
                    <img src="/images/ic_format_underlined.png" style={this.props.underline ? {display : 'none'} : { }} onClick={this.props.setAssetFontUnderline}/>
                    <img src="/images/ic_format_underlined_apply.png" style={this.props.underline ? {} : {display : 'none'}} onClick={this.props.setAssetFontUnderline}/>
                    
                    <img src="/images/ic_format_strikethrough.png" style={this.props.strikethrough ? {display : 'none'} : { }} onClick={this.props.setAssetFontStrikethrough}/>
                    <img src="/images/ic_format_strikethrough_apply.png" style={this.props.strikethrough ? {} : {display : 'none'}} onClick={this.props.setAssetFontStrikethrough}/>
                </div>
            </div>
        </div>
        <hr className={styles.controller_hr}/>
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

    syntaxHighlight(json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }
}

const mapStateToProps = (state) => {
    return{
        currentSilde : state.editor.slides[state.editor.selectedSlide]
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...assetsActions, ...uiActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TextController);
