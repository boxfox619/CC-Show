import React from 'react';
import * as actions from '../../../actions/assets';
import { connect } from 'react-redux';

import styles from './AssetController.css';
class BasicController extends React.Component{
    constructor(prop) {
        super(prop);
        this.state = {
            attribute_arrow_up:true,
            attribute_arrow_down:false,
            attribute:false,
            shape_arrow_up:true,
            shape_arrow_down:false,
            shape:false,
            style_arrow_up:true,
            style_arrow_down:false,
            style:false
        };

        this.setWidth=this.setWidth.bind(this);
        this.setHeight=this.setHeight.bind(this);
        this.setX_location=this.setX_location.bind(this);
        this.setY_location=this.setY_location.bind(this);
        this.setAngle=this.setAngle.bind(this);

        this.attributeOn=this.attributeOn.bind(this);
        this.attributeOff=this.attributeOff.bind(this);
        this.shapeOn=this.shapeOn.bind(this);
        this.shapeOff=this.shapeOff.bind(this);
        this.styleOn=this.styleOn.bind(this);
        this.styleOff=this.styleOff.bind(this);

    }

    render(){
        console.log(this.props.width, this.props.height);
        return(
            <div>
                <div>
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
                                <input type="text" className={styles.attribute_item_input} value={this.props.width} onKeyDown={this.setWidth()}/>
                            </div>
                            <div className={styles.control_item}>
                                <span className={styles.attribute_item_title}>W :</span>
                                <input type="text" className={styles.attribute_item_input } value={this.props.height} onKeyDown={this.setHeight()}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.control_item}>
                                <span className={styles.attribute_item_title}>X :</span>
                                <input type="text" className={styles.attribute_item_input} value={this.props.x} onKeyDown={this.setX_location()}/>
                            </div>
                            <div className={styles.control_item}>
                                <span className={styles.attribute_item_title}>Y :</span>
                                <input type="text" className={styles.attribute_item_input} value={this.props.y} onKeyDown={this.setY_location()}/>
                            </div>
                        </div>
                        <div className={styles.control_item}>
                            <span className={styles.attribute_item_title}>A :</span>
                            <input type="text" className={styles.attribute_item_input} value={this.props.angle} onKeyDown={this.setAngle()}/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div>
                    <div className={styles.controller_sub_wrapper}>
                            <div className={styles.controller_sub_title}>도형
                                <img onClick={this.shapeOn.bind()} src="/images/ic_arrow_up.png" style={this.state.shape_arrow_up ? {} : {display:'none'}} className={styles.show_items_button}/>
                                <img onClick={this.shapeOff.bind()} src="/images/ic_arrow_down.png" style={this.state.shape_arrow_down ? {} : {display:'none'}} className={styles.show_items_button}/>
                            </div>
                    </div>
                    <div style={this.state.shape ? {} : {display:'none'}} className={styles.items}>
                        <div className={styles.control_item}>
                            asdfds
                        </div>
                        <div className={styles.control_item}>
                            asdffsad
                        </div>
                    </div>
                </div>
                <hr/>
                <div>
                    <div className={styles.controller_sub_wrapper}>
                        <div className={styles.controller_sub_title}>스타일
                            <img onClick={this.styleOn.bind()} src="/images/ic_arrow_up.png" style={this.state.style_arrow_up ? {display:'block'} : {display:'none'}} className={styles.show_items_button}/>
                            <img onClick={this.styleOff.bind()} src="/images/ic_arrow_down.png" style={this.state.style_arrow_down ? {display:'block'} : {display:'none'}} className={styles.show_items_button}/>
                        </div>
                    </div>
                    <div style={this.state.style ? {} : {display:'none'}} className={styles.items}>
                        <div>
                            <textarea id={styles.input_style} rows="" cols=""></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    setWidth() {
        if(event.keyCode==13) {
            let value=document.getElementById().value;
            this.props.setWidth(value);
        }
    }

    setHeight() {
        if(event.keyCode==13) {
            let value=document.getElementById().value;
            this.props.setHeight(value);
        }
    }

    setX_location() {
        if(event.keyCode==13){
            let value=document.getElementById().value;
            this.props.setY(value);
        }
    }

    setY_location() {
        if(event.keyCode==13){
            let value=document.getElementById().value;
            this.props.setX(value);
        }
    }

    setAngle() {
        if(event.keyCode==13){
            let value=document.getElementById().value;
            this.props.setAngle(value);
        }
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
    return {
        setWidth: (width) => {
            dispatch(actions.setAssetWidth(width))
        },
        setHeight: (height) => {
            dispatch(actions.setAssetHeight(height))
        },
        setX: (x) => {
            dispatch(actions.setAssetX(x))
        },
        setY: (y) => {
            dispatch(actions.setAssetY(y))
        },
        setAngle: (angle) => {
            dispatch(actions.setAssetAngle(angle))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicController);
