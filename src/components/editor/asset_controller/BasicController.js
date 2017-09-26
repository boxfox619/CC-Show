import React from 'react';
import * as assetsActions from '../../../actions/assets';
import * as uiActions from '../../../actions/ui';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';

import { bindActionCreators } from 'redux';

import styles from './AssetController.css';
class BasicController extends React.Component{
    constructor(prop) {
        super(prop);
        this.state = {
            attribute_arrow_up:false,
            attribute_arrow_down:true,
            attribute:true,
            shape_arrow_up:false,
            shape_arrow_down:true,
            shape:true,
            style_arrow_up:false,
            style_arrow_down:true,
            style:true,
            fill_color_picker: false,
            edge_color_picker: false
        };

        this.setWidth=this.setWidth.bind(this);
        this.setHeight=this.setHeight.bind(this);
        this.setX_location=this.setX_location.bind(this);
        this.setY_location=this.setY_location.bind(this);
        this.setAngle=this.setAngle.bind(this);
        this.setStyle=this.setStyle.bind(this);
        this.setBorderWeight=this.setBorderWeight.bind(this);

        this.attributeOn=this.attributeOn.bind(this);
        this.attributeOff=this.attributeOff.bind(this);
        this.shapeOn=this.shapeOn.bind(this);
        this.shapeOff=this.shapeOff.bind(this);
        this.styleOn=this.styleOn.bind(this);
        this.styleOff=this.styleOff.bind(this);

        this.setStyle=this.setStyle.bind(this);

        this.JSONstringify=this.JSONstringify.bind(this);
    }

    render(){
        return(
            <div>
                <div style={{'height':'13vh'}}>
                    <div className={styles.controller_sub_wrapper}>
                        <div className={styles.controller_sub_title}>속성

                        <img onClick={this.attributeOn.bind()} src="/images/ic_arrow_up.png" style={this.state.attribute_arrow_up ? {} : {display:'none'}} className={styles.show_items_button}/>
                        <img onClick={this.attributeOff.bind()} src="/images/ic_arrow_down.png" style={this.state.attribute_arrow_down ? {} : {display:'none'}} className={styles.show_items_button}/>
                        </div>
                    </div>
                    <div style={this.state.attribute ? {} : {display:'none'}} className={styles.items} >
                        <div>
                            <div className={styles.control_item}>
                                <span className={styles.attribute_item_title}>H :</span>
                                <input type="text" className={styles.attribute_item_input} value={this.props.height} onChange={this.setHeight}/>
                            </div>
                            <div className={styles.control_item}>
                                <span className={styles.attribute_item_title}>W :</span>
                                <input type="text" className={styles.attribute_item_input} value={this.props.width} onChange={this.setWidth}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.control_item}>
                                <span className={styles.attribute_item_title}>X :</span>
                                <input type="text" className={styles.attribute_item_input} value={this.props.x} onChange={this.setX_location}/>
                            </div>
                            <div className={styles.control_item}>
                                <span className={styles.attribute_item_title}>Y :</span>
                                <input type="text" className={styles.attribute_item_input} value={this.props.y} onChange={this.setY_location}/>
                            </div>
                        </div>
                        <div className={styles.control_item}>
                            <span className={styles.attribute_item_title}>A :</span>
                            <input type="text" className={styles.attribute_item_input} value={this.props.angle} onChange={this.setAngle}/>
                        </div>
                    </div>
                </div>
                <hr className={styles.controller_hr}/>
                <div style={{'height':'7vh'}}>
                    <div className={styles.controller_sub_wrapper}>
                            <div className={styles.controller_sub_title}>도형
                                <img onClick={this.shapeOn.bind()} src="/images/ic_arrow_up.png" style={this.state.shape_arrow_up ? {} : {display:'none'}} className={styles.show_items_button}/>
                                <img onClick={this.shapeOff.bind()} src="/images/ic_arrow_down.png" style={this.state.shape_arrow_down ? {} : {display:'none'}} className={styles.show_items_button}/>
                            </div>
                    </div>
                    <div style={this.state.shape ? {} : {display:'none'}} className={styles.items}>
                        <div className={styles.control_item}>
                            <span><img src="/images/ic_color.png"/></span>
                            <div className={styles.change_color} onClick={this.props.toggleFillColorPicker} style={this.props.fillColor==='white' ? {border:'1px solid #5D87B5'} : {backgroundColor:this.props.fillColor}} > </div>
                        </div>
                        <div className={styles.control_item}>
                            <span><img src="/images/ic_line.png"/></span>
                            <input type="text" className={styles.attribute_item_input} onChange={this.setBorderWeight} value={this.props.borderWeight}/>
                            <div className={styles.change_color} onClick={this.props.toggleBorderColorPicker} style={this.props.borderColor==='white' ? {border:'1px solid #5D87B5'} : {backgroundColor:this.props.borderColor}}> </div>
                        </div>
                    </div>
                </div>
                <hr className={styles.controller_hr}/>
                <div>
                    <div className={styles.controller_sub_wrapper}>
                        <div className={styles.controller_sub_title}>스타일
                            <img onClick={this.styleOn.bind()} src="/images/ic_arrow_up.png" style={this.state.style_arrow_up ? {} : {display:'none'}} className={styles.show_items_button}/>
                            <img onClick={this.styleOff.bind()} src="/images/ic_arrow_down.png" style={this.state.style_arrow_down ? {} : {display:'none'}} className={styles.show_items_button}/>
                        </div>
                    </div>
                    <div style={this.state.style ? {} : {display:'none'}} className={styles.items}>
                        <div id={styles.input_style}>
                            <textarea onChange={this.setStyle.bind()} rows="" cols="" value={this.JSONstringify(this.props.style)}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    JSONstringify(json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, '\t');
        }

        var arr = [],
            _string = 'color:green',
            _number = 'color:darkorange',
            _boolean = 'color:blue',
            _null = 'color:magenta',
            _key = 'color:red';

        json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var style = _number;
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    style = _key;
                } else {
                    style = _string;
                }
            } else if (/true|false/.test(match)) {
                style = _boolean;
            } else if (/null/.test(match)) {
                style = _null;
            }
            arr.push(style);
            arr.push('');
            return '%c' + match + '%c';
        });

        arr.unshift(json);

        // console.log.apply(console, arr);
        // console.log(json);
        return json;
    }

    setHeight(event) {
        let {value}=event.target;
        let intValue=parseInt(value);
        if(isNaN(intValue)){
            intValue=0;
        }
        this.props.setAssetHeight(intValue);
    }

    setWidth(event) {
        let {value}=event.target;
        let intValue=parseInt(value);
        if(isNaN(intValue)){
            intValue=0;
        }
        this.props.setAssetWidth(intValue);
    }

    setX_location(event) {
        let {value}=event.target;
        let intValue=parseInt(value);
        if(isNaN(intValue)){
            intValue=0;
        }
        this.props.setAssetX(intValue);
    }

    setY_location(event) {
        let {value}=event.target;
        let intValue=parseInt(value);
        if(isNaN(intValue)){
            intValue=0;
        }
        this.props.setAssetY(intValue);
    }

    setStyle(event) {
        let {value}=event.target;
        this.props.setAssetStyle(value); 
    }

    setAngle(event) {
        let {value}=event.target;
        let intValue=parseInt(value);
        if(isNaN(intValue)){
            intValue=0;
        }
        this.props.setAssetAngle(intValue); 
    }

    setBorderWeight(event) {
        let {value}=event.target;
        let intValue=parseInt(value);
        if(isNaN(intValue)){
            intValue=0;
        }
        this.props.setAssetEdgeWeight(intValue); 
    }

    setFillColor(color) {
        this.props.setFillColor(color.hex);
    }

    setEdgeColor(color) {
        this.props.setEdgeColor(color.hex);
    }
    
    attributeOn() {
        this.setState({
            ...this.state,
            attribute:true,
            attribute_arrow_up:false,
            attribute_arrow_down:true
        });
    }

    shapeOn() {
        this.setState({
            ...this.state,
            shape:true,
            shape_arrow_up:false,
            shape_arrow_down:true
        });
    }

    styleOn() {
        this.setState({
            ...this.state,
            style:true,
            style_arrow_up:false,
            style_arrow_down:true
        });
    }

    attributeOff() {
        this.setState({
            ...this.state,
            attribute:false,
            attribute_arrow_up:true,
            attribute_arrow_down:false
        });
    }

    shapeOff() {
        this.setState({
            ...this.state,
            shape:false,
            shape_arrow_up:true,
            shape_arrow_down:false
        });
    }

    styleOff() {
        this.setState({
            ...this.state,
            style:false,
            style_arrow_up:true,
            style_arrow_down:false
        });
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...assetsActions, ...uiActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicController);
