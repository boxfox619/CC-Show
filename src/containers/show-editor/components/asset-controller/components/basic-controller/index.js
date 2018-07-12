import React from 'react';
import styles from '../../style.css';

import ControllerWrapper from '../controller-wrapper'


const propTypes = {
  onChangeAttribute: React.PropTypes.func.isRequired,
  onChangeStyle: React.PropTypes.func.isRequired,
  showColorPicker: React.PropTypes.func.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  angle: React.PropTypes.number.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  borderColor: React.PropTypes.string.isRequired,
  borderWidth: React.PropTypes.number.isRequired,
  style: React.PropTypes.object.isRequired
}

const defaultProps = {
  width: 50,
  height: 50,
  x: 0,
  y: 0,
  angle: 0,
  backgroundColor: 'rgba(0,0,0,0)',
  borderColor: 'rgba(0,0,0,0)',
  borderWidth: 1,
  style: {}
}

const getPixel = (e) => {
  let val = e.target.value;
  if (!val || val.length == 0) {
    val = 0;
  }
  return val + 'px';
}

class BasicController extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      attribute: true,
      shape: true,
      style: true,
    };

    this.setWidth = this.setWidth.bind(this);
    this.setHeight = this.setHeight.bind(this);
    this.setX_location = this.setX_location.bind(this);
    this.setY_location = this.setY_location.bind(this);
    this.setAngle = this.setAngle.bind(this);
    this.getStyle = this.getStyle.bind(this);
    this.setStyle = this.setStyle.bind(this);
    this.setBorderWidth = this.setBorderWidth.bind(this);
    this.borderColorClickHandler = this.borderColorClickHandler.bind(this);
    this.backgroundColorClickHandler = this.backgroundColorClickHandler.bind(this);
  }

  render() {
    return (
      <div>
        <ControllerWrapper title={'속성'}>
          <div className={styles.items}>
            <div>
              <div className={styles.control_item}>
                <span className={styles.attribute_item_title}>H :</span>
                <input className={styles.attribute_item_input}
                  onChange={this.setHeight}
                  type={"text"}
                  value={this.props.height}
                />
              </div>
              <div className={styles.control_item}>
                <span className={styles.attribute_item_title}>W :</span>
                <input className={styles.attribute_item_input}
                  onChange={this.setWidth}
                  type={"text"}
                  value={this.props.width}
                />
              </div>
            </div>
            <div>
              <div className={styles.control_item}>
                <span className={styles.attribute_item_title}>X :</span>
                <input className={styles.attribute_item_input}
                  onChange={this.setX_location}
                  type={"text"}
                  value={this.props.x}
                />
              </div>
              <div className={styles.control_item}>
                <span className={styles.attribute_item_title}>Y :</span>
                <input className={styles.attribute_item_input}
                  onChange={this.setY_location}
                  type={"text"}
                  value={this.props.y}
                />
              </div>
            </div>
            <div className={styles.control_item}>
              <span className={styles.attribute_item_title}>A :</span>
              <input className={styles.attribute_item_input}
                onChange={this.setAngle}
                type={"text"}
                value={this.props.angle}
              />
            </div>
          </div>
        </ControllerWrapper>

        <ControllerWrapper title={'도형'}>
          <div className={styles.items}>
            <div className={styles.control_item}>
              <span className={styles.attribute_item_title}><img src={"/images/ic_color.png"} /></span>
              <div className={styles.change_color}
                onClick={this.backgroundColorClickHandler}
                style={this.props.backgroundColor === 'white' ? {border: '1px solid #5D87B5'} : {backgroundColor: this.props.backgroundColor}}
              />
            </div>
            <div className={styles.control_item}>
              <span className={styles.attribute_item_title}><img src={"/images/ic_line.png"} /></span>
              <div className={styles.attribute_both_input_area}>
                <div className={styles.change_color}
                  onClick={this.borderColorClickHandler}
                  style={this.props.borderColor === 'white' ? {border: '1px solid #5D87B5'} : {backgroundColor: this.props.borderColor}}
                />
                <input className={styles.attribute_item_input}
                  onChange={this.setBorderWidth}
                  type={"text"}
                  value={this.props.borderWidth}
                />
              </div>
            </div>
          </div>
        </ControllerWrapper>

        <ControllerWrapper title={'스타일'}>
          <div className={styles.items}>
            <div id={styles.input_style}>
              <textarea
                onChange={this.setStyle}
                defaultValue={this.getStyle()}
              />
            </div>
          </div>
        </ControllerWrapper>
      </div>
    )
  }

  setHeight(event) {
    let val = getPixel(event);
    this.props.onChangeAttribute('height', val);
  }

  setWidth(event) {
    let val = getPixel(event);
    this.props.onChangeAttribute('width', val);
  }

  setX_location(event) {
    let val = getPixel(event);
    this.props.onChangeAttribute('x', val);
  }

  setY_location(event) {
    let val = getPixel(event);
    this.props.onChangeAttribute('y', val);
  }

  getStyle(){
    let style = this.props.style;
    let styleMap = '';
    for(let key in style){
      styleMap += key + ' : '+ style[key]+'\n';
    }
    return styleMap;
  }

  setStyle(event) {
    let {value} = event.target;
    let style = {};
    value.split("\n").forEach(line => {
      if(line.includes(' : ')){
        let lineVal = line.split(' : ');
        style[lineVal[0]] = lineVal[1];
      }
    });
    this.props.onChangeAttribute('style', style);
  }

  setAngle(event) {
    let val = parseInt(event.target.value);
    this.props.onChangeAttribute('angle', val);
  }

  setBorderWidth(event) {
    let val = getPixel(event);
    this.props.onChangeStyle('border-width', val);
  }

  backgroundColorClickHandler() {
    this.props.showColorPicker('background-color', this.props.backgroundColor);
  }

  borderColorClickHandler() {
    this.props.showColorPicker('border-color', this.props.borderColor);
  }
}

BasicController.propTypes = propTypes;
BasicController.defaultProps = defaultProps;

export default BasicController;
