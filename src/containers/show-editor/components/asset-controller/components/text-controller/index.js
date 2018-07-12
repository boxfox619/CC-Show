import React from 'react';
import styles from '../../style.css';
import ControllerWrapper from '../controller-wrapper';

const propTypes = {
  onChangeStyle: React.PropTypes.func.isRequired,
  showColorPicker: React.PropTypes.func.isRequired,
  style: React.PropTypes.object.isRequired
}

class TextController extends React.Component {
  constructor(prop) {
    super(prop);

    this.setFont = this.setFont.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    this.setCharacterSpacing = this.setCharacterSpacing.bind(this);
    this.setFontWidth = this.setFontWidth.bind(this);
    this.setLineSpacing = this.setLineSpacing.bind(this);
    this.getLineSpacing = this.getLineSpacing.bind(this);
  }

  render() {
    return (
      <ControllerWrapper title='텍스트'>
        <div className={styles.items}>
          <div>
            <div>
              <div className={styles.control_item}>
                <select className={styles.attribute_item_input}
                  id='fontSetting'
                  onChange={this.setFont}
                  style={{'width': '235px', 'cursor': 'pointer'}}
                >
                  <option value='굴림'>굴림</option>
                  <option value='굴림체'>굴림체</option>
                  <option value='궁서'>궁서</option>
                  <option value='궁서체'>궁서체</option>
                  <option value='돋움'>돋움</option>
                  <option value='돋움체'>돋움체</option>
                  <option value='바탕'>바탕</option>
                  <option value='바탕체'>바탕체</option>
                  <option value='휴면엽서체'>휴먼엽서체</option>
                </select>
              </div>
            </div>

            <div>
              <div className={styles.control_item}>
                <span className={styles.attribute_item_title}><img
                  src='/images/ic_format_size.png'
                /></span>
                <input className={styles.attribute_item_input}
                  onChange={this.setFontSize}
                  type='text'
                  value={this.getFontSize()}
                />
              </div>

              <div className={styles.control_item}>
                <span className={styles.attribute_item_title}><img onClick={() => this.props.onChangeStyle('line-height','normal')}
                  src='/images/ic_format_line.png'
                /></span>
                <input className={styles.attribute_item_input}
                  onChange={this.setLineSpacing}
                  type='text'
                  value={this.getLineSpacing()}
                />
              </div>
            </div>

            <div>
              <div className={styles.control_item}>
                <span className={styles.attribute_item_title}><img
                  src='/images/ic_between.png'
                /></span>
                <input className={styles.attribute_item_input}
                  onChange={this.setCharacterSpacing}
                  type='text'
                  value={this.getLatterSpacing()}
                />
              </div>

              <div className={styles.control_item}>
                <span className={styles.attribute_item_title}><img
                  src='/images/ic_color.png'
                /></span>
                <div className={styles.change_color}
                  onClick={() => this.props.showColorPicker('color', this.props.style.color)}
                  style={{backgroundColor: this.getTextColor()}}
                />
              </div>
            </div>

          </div>
          <div className={styles.control_text_attribute}>
            <img onClick={() => this.props.onChangeStyle('text-align', 'left')}
              src='/images/ic_format_align_left.png'
              style={this.getTextAlign() === 'left' ? {display: 'none'} : {}}
            />
            <img onClick={() => this.props.onChangeStyle('text-align', 'justify')}
              src='/images/ic_format_align_left_apply.png'
              style={this.getTextAlign() === 'left' ? {} : {display: 'none'}}
            />

            <img onClick={() => this.props.onChangeStyle('text-align', 'center')}
              src='/images/ic_format_align_center.png'
              style={this.getTextAlign() === 'center' ? {display: 'none'} : {}}
            />
            <img onClick={() => this.props.onChangeStyle('text-align', 'justify')}
              src='/images/ic_format_align_center_apply.png'
              style={this.getTextAlign() === 'center' ? {} : {display: 'none'}}
            />

            <img onClick={() => this.props.onChangeStyle('text-align', 'right')}
              src='/images/ic_format_align_right.png'
              style={this.getTextAlign() === 'right' ? {display: 'none'} : {}}
            />
            <img onClick={() => this.props.onChangeStyle('text-align', 'justify')}
              src='/images/ic_format_align_right_apply.png'
              style={this.getTextAlign() === 'right' ? {} : {display: 'none'}}
            />

            <img onClick={() => this.props.onChangeStyle('text-align', 'justify')}
              src='/images/ic_format_align_justify.png'
              style={this.getTextAlign() === 'justify' ? {display: 'none'} : {}}
            />
            <img onClick={() => this.props.onChangeStyle('text-align', 'justify')}
              src='/images/ic_format_align_justify_apply.png'
              style={this.getTextAlign() === 'justify' ? {} : {display: 'none'}}
            />

            <img onClick={() => this.props.onChangeStyle('font-weight', 'bold')}
              src='/images/ic_format_bold.png'
              style={this.getFontWeight() === 'normal' ? {} : {display: 'none'}}
            />
            <img onClick={() => this.props.onChangeStyle('font-weight', 'normal')}
              src='/images/ic_format_bold_apply.png'
              style={this.getFontWeight() === 'normal' ? {display: 'none'} : {}}
            />

            <img onClick={() => this.props.onChangeStyle('font-style', 'italic')}
              src='/images/ic_format_italic.png'
              style={this.getFontStyle() === 'normal' ? {} : {display: 'none'}}
            />
            <img onClick={() => this.props.onChangeStyle('font-style', 'normal')}
              src='/images/ic_format_italic_apply.png'
              style={this.getFontStyle() === 'normal' ? {display: 'none'} : {}}
            />

            <img onClick={() => this.props.onChangeStyle('text-decoration', 'underline')}
              src='/images/ic_format_underlined.png'
              style={this.getTextDecoration() === 'underline' ? {display: 'none'} : {}}
            />
            <img onClick={() => this.props.onChangeStyle('text-decoration', 'none')}
              src='/images/ic_format_underlined_apply.png'
              style={this.getTextDecoration() === 'underline' ? {} : {display: 'none'}}
            />

            <img onClick={() => this.props.onChangeStyle('text-decoration', 'line-through')}
              src='/images/ic_format_strikethrough.png'
              style={this.getTextDecoration() === 'line-through' ? {display: 'none'} : {}}
            />
            <img onClick={() => this.props.onChangeStyle('text-decoration', 'none')}
              src='/images/ic_format_strikethrough_apply.png'
              style={this.getTextDecoration() === 'line-through' ? {} : {display: 'none'}}
            />
          </div>
        </div>
      </ControllerWrapper>
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
    let color = this.props.style.color;
    return (!!color)? color : 'rgba(0, 0, 0)';
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
    let lineSpacing = this.props.style['line-height'];
    return (lineSpacing != 'normal') ? parseInt(lineSpacing) : lineSpacing;
  }

  setFontWidth(event) {
    let {value} = event.target;
    let intValue = parseInt(value);
    if (isNaN(intValue)) {
      intValue = 0;
    }
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
    this.props.onChangeStyle('line-height', intValue + '%');
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
