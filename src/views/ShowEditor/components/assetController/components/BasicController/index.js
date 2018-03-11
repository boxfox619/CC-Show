import React from 'react';
import ControllerHeader from '../controllerHeader';
import styles from '../../style.css';


const propTypes = {
    onChangeAttribute: React.PropTypes.func.isRequired,
    onChangeStyle: React.PropTypes.func.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    angle: React.PropTypes.number.isRequired,
    fillColor: React.PropTypes.string.isRequired,
    borderColor: React.PropTypes.string.isRequired,
    borderWeight: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
}

function getIntFromTarget(event) {
    let {value} = event.target;
    let intValue = parseInt(value);
    if (isNaN(intValue)) {
        intValue = 0;
    }
    return intValue;
}

class BasicController extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            attribute_arrow_up: false,
            attribute_arrow_down: true,
            attribute: true,
            shape_arrow_up: false,
            shape_arrow_down: true,
            shape: true,
            style_arrow_up: false,
            style_arrow_down: true,
            style: true,
            fill_color_picker: false,
            edge_color_picker: false
        };

        this.setWidth = this.setWidth.bind(this);
        this.setHeight = this.setHeight.bind(this);
        this.setX_location = this.setX_location.bind(this);
        this.setY_location = this.setY_location.bind(this);
        this.setAngle = this.setAngle.bind(this);
        this.setStyle = this.setStyle.bind(this);
        this.setBorderWidth = this.setBorderWidth.bind(this);
        this.setStyle = this.setStyle.bind(this);
        this.borderColorClickHandler = this.borderColorClickHandler.bind(this);
        this.fillColorClickHandler = this.fillColorClickHandler.bind(this);
    }

    render() {
        return (
            <div>
                <div className={styles.fliping_controller_section}>
                    <ControllerHeader title={'속성'} onToggle={(toggle) => {
                        this.setState({attribute: toggle})
                    }}/>
                    <div style={this.state.attribute ? {} : {display: 'none'}} className={styles.items}>
                        <div>
                            <div className={styles.control_item}>
                                <span className={styles.attribute_item_title}>H :</span>
                                <input type="text" className={styles.attribute_item_input} value={this.props.height}
                                       onChange={this.setHeight}/>
                            </div>
                            <div className={styles.control_item}>
                                <span className={styles.attribute_item_title}>W :</span>
                                <input type="text" className={styles.attribute_item_input} value={this.props.width}
                                       onChange={this.setWidth}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.control_item}>
                                <span className={styles.attribute_item_title}>X :</span>
                                <input type="text" className={styles.attribute_item_input} value={this.props.x}
                                       onChange={this.setX_location}/>
                            </div>
                            <div className={styles.control_item}>
                                <span className={styles.attribute_item_title}>Y :</span>
                                <input type="text" className={styles.attribute_item_input} value={this.props.y}
                                       onChange={this.setY_location}/>
                            </div>
                        </div>
                        <div className={styles.control_item}>
                            <span className={styles.attribute_item_title}>A :</span>
                            <input type="text" className={styles.attribute_item_input} value={this.props.angle}
                                   onChange={this.setAngle}/>
                        </div>
                    </div>
                </div>
                <hr className={styles.controller_hr}/>
                <div className={styles.fliping_controller_section}>
                    <ControllerHeader title={'도형'} onToggle={(toggle) => {
                        this.setState({shape: toggle})
                    }}/>
                    <div style={this.state.shape ? {} : {display: 'none'}} className={styles.items}>
                        <div className={styles.control_item}>
                            <span className={styles.attribute_item_title}><img src="/images/ic_color.png"/></span>
                            <div className={styles.change_color} onClick={this.fillColorClickHandler}
                                 style={this.props.fillColor === 'white' ? {border: '1px solid #5D87B5'} : {backgroundColor: this.props.fillColor}}></div>
                        </div>
                        <div className={styles.control_item}>
                            <span className={styles.attribute_item_title}><img src="/images/ic_line.png"/></span>
                            <div className={styles.attribute_both_input_area}>
                                <div className={styles.change_color} onClick={this.borderColorClickHandler}
                                     style={this.props.borderColor === 'white' ? {border: '1px solid #5D87B5'} : {backgroundColor: this.props.borderColor}}></div>
                                <input type="text" className={styles.attribute_item_input}
                                       onChange={this.setBorderWidth} value={this.props.borderWeight}/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={styles.controller_hr}/>
                <div className={styles.fliping_controller_section}>
                    <ControllerHeader title={'스타일'} onToggle={(toggle) => {
                        this.setState({style: toggle})
                    }}/>
                    <div style={this.state.style ? {} : {display: 'none'}} className={styles.items}>
                        <div id={styles.input_style}>
                            <textarea onChange={this.setStyle.bind()} rows="" cols=""
                                      value={JSON.stringify(this.props.style, null, 4)}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    setHeight(event) {
        let val = getIntFormTarget(event);
        this.props.onChangeAttribute('height', val);
    }

    setWidth(event) {
        let val = getIntFormTarget(event);
        this.props.onChangeAttribute('width', val);
    }

    setX_location(event) {
        let val = getIntFormTarget(event);
        this.props.onChangeAttribute('x', val);
    }

    setY_location(event) {
        let val = getIntFormTarget(event);
        this.props.onChangeAttribute('y', val);
    }

    setStyle(event) {
        let {value} = event.target;
        this.props.onChangeAttribute('style', value);
    }

    setAngle(event) {
        let val = getIntFormTarget(event);
        this.props.onChangeAttribute('angle', val);
    }

    setBorderWidth(event) {
        let val = getIntFormTarget(event);
        this.props.onChangeStyle('border-width', val);
    }

    fillColorClickHandler(){

    }

    borderColorClickHandler(){

    }
}

BasicController.propTypes = propTypes;

export default BasicController;
