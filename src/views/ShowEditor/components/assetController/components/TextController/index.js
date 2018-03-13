import React from 'react';
import styles from '../../style.css';
import ControllerHeader from '../controllerHeader';
import {getSelectedAssetStyle} from "../../../../../../services/editor/asset/ControllerUtil";

const propTypes = {
    onChangeAttribute: React.PropTypes.func.isRequired,
    onChangeStyle: React.PropTypes.func.isRequired,
    style: React.PropTypes.object.isRequired
}


class TextController extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            text: true
        };

        this.setFont = this.setFont.bind(this);
        this.setFontSize = this.setFontSize.bind(this);
        this.setCharacterSpacing = this.setCharacterSpacing.bind(this);
        this.setFontWidth = this.setFontWidth.bind(this);
        this.setLineSpacing = this.setLineSpacing.bind(this);
        this.getLineSpacing = this.getLineSpacing.bind(this);
    }

    render() {
        return (
            <div>
                <div className={styles.fliping_controller_section}>
                    <ControllerHeader title={'텍스트'} onToggle={(toggle) => this.setState({text: toggle})}/>
                    <div style={this.state.text ? {} : {display: 'none'}} className={styles.items}>
                        <div>
                            <div>
                                <div className={styles.control_item}>
                                    <select id="fontSetting" onChange={this.setFont}
                                            className={styles.attribute_item_input}
                                            style={{'width': '90%', 'cursor': 'pointer'}}>
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
                                    <input type="text" className={styles.attribute_item_input}
                                           value={this.getFontWidth()} onChange={this.setFontWidth}/>
                                </div>
                            </div>

                            <div>
                                <div className={styles.control_item}>
                                    <span className={styles.attribute_item_title}><img
                                        src="/images/ic_format_size.png"/></span>
                                    <input type="text" className={styles.attribute_item_input}
                                           value={this.getFontSize()} onChange={this.setFontSize}/>
                                </div>

                                <div className={styles.control_item}>
                                    <span className={styles.attribute_item_title}><img src="/images/ic_format_line.png"
                                                                                       onClick={() => this.props.setAssetTextLineSpacing('normal')}/></span>
                                    <input type="text" className={styles.attribute_item_input}
                                           value={this.getLineSpacing()} onChange={this.setLineSpacing}/>
                                </div>
                            </div>

                            <div>
                                <div className={styles.control_item}>
                                    <span className={styles.attribute_item_title}><img
                                        src="/images/ic_between.png"/></span>
                                    <input type="text" className={styles.attribute_item_input}
                                           value={this.getLatterSpacing()} onChange={this.setCharacterSpacing}/>
                                </div>

                                <div className={styles.control_item}>
                                    <span className={styles.attribute_item_title}><img
                                        src="/images/ic_color.png"/></span>
                                    <div className={styles.change_color} onClick={this.props.toggleTextColorPicker}
                                         style={this.getTextColor() === 'black' ? {border: '1px solid #5D87B5'} : {backgroundColor: this.getTextColor()}}></div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.control_text_attribute}>
                            <img src="/images/ic_format_align_left.png"
                                 style={this.getTextAlign() === 'left' ? {display: 'none'} : {}}
                                 onClick={() => this.props.onChangeStyle( 'text-align','left')}/>
                            <img src="/images/ic_format_align_left_apply.png"
                                 style={this.getTextAlign() === 'left' ? {} : {display: 'none'}}
                                 onClick={() => this.props.onChangeStyle( 'text-align','justify')}/>

                            <img src="/images/ic_format_align_center.png"
                                 style={this.getTextAlign() === 'center' ? {display: 'none'} : {}}
                                 onClick={() => this.props.onChangeStyle( 'text-align','center')}/>
                            <img src="/images/ic_format_align_center_apply.png"
                                 style={this.getTextAlign() === 'center' ? {} : {display: 'none'}}
                                 onClick={() => this.props.onChangeStyle( 'text-align','justify')}/>

                            <img src="/images/ic_format_align_right.png"
                                 style={this.getTextAlign() === 'right' ? {display: 'none'} : {}}
                                 onClick={() => this.props.onChangeStyle( 'text-align','right')}/>
                            <img src="/images/ic_format_align_right_apply.png"
                                 style={this.getTextAlign() === 'right' ? {} : {display: 'none'}}
                                 onClick={() => this.props.onChangeStyle( 'text-align', 'justify')}/>

                            <img src="/images/ic_format_align_justify.png"
                                 style={this.getTextAlign() === 'justify' ? {display: 'none'} : {}}
                                 onClick={() => this.props.onChangeStyle( 'text-align','justify')}/>
                            <img src="/images/ic_format_align_justify_apply.png"
                                 style={this.getTextAlign() === 'justify' ? {} : {display: 'none'}}
                                 onClick={() => this.props.onChangeStyle( 'text-align','justify')}/>

                            <img src="/images/ic_format_bold.png"
                                 style={this.getFontWeight() == 'normal' ? {} : {display: 'none'}}
                                 onClick={this.props.onChangeStyle('font-weight', 'normal')}/>
                            <img src="/images/ic_format_bold_apply.png"
                                 style={this.getFontWeight() == 'normal' ? {display: 'none'} : {}}
                                 onClick={this.props.onChangeStyle('font-weight', 'bold')}/>

                            <img src="/images/ic_format_italic.png"
                                 style={this.getFontStyle() == 'normal' ? {} : {display: 'none'}}
                                 onClick={this.props.onChangeStyle('font-style', 'normal')}/>
                            <img src="/images/ic_format_italic_apply.png"
                                 style={this.getFontStyle() == 'normal' ? {display: 'none'} : {}}
                                 onClick={this.props.onChangeStyle('font-style', 'italic')}/>

                            <img src="/images/ic_format_underlined.png"
                                 style={this.getTextDecoration() == 'underline' ? {display: 'none'} : {}}
                                 onClick={this.props.onChangeStyle('text-decoration', 'none')}/>
                            <img src="/images/ic_format_underlined_apply.png"
                                 style={this.getTextDecoration() == 'underline' ? {} : {display: 'none'}}
                                 onClick={this.props.onChangeStyle('text-decoration', 'underline')}/>

                            <img src="/images/ic_format_strikethrough.png"
                                 style={this.getTextDecoration() == 'line-through' ? {display: 'none'} : {}}
                                 onClick={this.props.onChangeStyle('text-decoration', 'none')}/>
                            <img src="/images/ic_format_strikethrough_apply.png"
                                 style={this.getTextDecoration() == 'line-through' ? {} : {display: 'none'}}
                                 onClick={this.props.onChangeStyle('text-decoration', 'line-through')}/>
                        </div>
                    </div>
                </div>
                <hr className={styles.controller_hr}/>
            </div>
        )
    }

    getFontWidth() {
        return this.props.style['font-width'];
    }

    getFontSize() {
        return this.props.style['font-size'];
    }

    getLatterSpacing() {
        return parseInt(this.props.style['letter-spacing']);
    }

    getTextColor() {
        return this.props.style.color;
    }

    getTextAlign() {
        return this.props.style['text-align'];
    }

    getFontWeight() {
        return this.props.style['font-weight'];
    }

    getFontStyle() {
        return this.props.style['font-style'];
    }

    getTextDecoration() {
        return this.props.style['text-decoration'];
    }

    getLineSpacing() {
        let lineSpacing = this.props.textLineSpacing;
        return (lineSpacing != 'normal') ? parseInt(lineSpacing) : lineSpacing;
    }

    setFontWidth(event) {
        let {value} = event.target;
        let intValue = parseInt(value);
        if (isNaN(intValue)) {
            intValue = 0;
        }
        this.props.setAssetFontWeight(intValue);
        this.props.onChangeStyle('font-width', intValue);
    }

    setFont() {
        let value = document.getElementById('fontSetting').value;
        this.props.onChangeStyle('font-family', value);
    }

    setFontSize(event) {
        let {value} = event.target;
        let intValue = parseInt(value);
        if (isNaN(intValue)) {
            intValue = 0;
        }
        this.props.onChangeStyle('font-size', intValue + 'px');
    }

    setLineSpacing(event) {
        let {value} = event.target;
        let intValue = parseInt(value);
        if (isNaN(intValue)) {
            intValue = 0;
        }
        this.props.setAssetTextLineSpacing(intValue + '%');
        this.props.onChangeStyle('line-height', value);
    }

    setCharacterSpacing(event) {
        let {value} = event.target;
        let intValue = parseInt(value);
        if (isNaN(intValue)) {
            intValue = 0;
        }
        this.props.onChangeStyle('letter-spacing', intValue + 'px');
    }
}

TextController.propTypes = propTypes;

export default TextController;
