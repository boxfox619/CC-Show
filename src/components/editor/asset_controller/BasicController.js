import React from 'react';
import * as actions from '../../../actions/assets';
import { connect } from 'react-redux';

import styles from './AssetController.css';
class BasicController extends React.Component{
    constructor(prop) {
        super(prop);
        this.setWidth=this.setWidth.bind(this);
        this.setHeight=this.setHeight.bind(this);
        this.setX_location=this.setX_location.bind(this);
        this.setY_location=this.setY_location.bind(this);
        this.setAngle=this.setAngle.bind(this);
    }

    render(){
        console.log(this.props.width, this.props.height);
        return(
            <div>
                <div>
                    <div className={styles.controller_sub_wrapper}>
                        <img className={styles.ic_ellipse_gray} src="../../../../../document/design/RESOURCE/Dashboard_PPT Editor/ic_ellipse_gray.png"/>
                        <input className={styles.controller_sub_title} type="text" name="" value="속성" readonly/>
                        <img onclick="attributeOn()" src="../../../../../document/design/RESOURCE/Dashboard_PPT Editor/ic_arrow_up.png" id="attribute-on" className={styles.show_items_button}/>
                        <img onclick="attributeOff()" src="../../../../../document/design/RESOURCE/Dashboard_PPT Editor/ic_arrow_down.png" id="attribute-off"
                        className={styles.show_items_button}/>
                    </div>
                    <div className={styles.items} id={styles.attribute_items}>
                        <div className={styles.control_item}>
                            <input className={styles.attribute_item_title} type="text" name="" value="W :" readonly/><input type="text" className={styles.attribute_item_input} value={this.props.width} onKeyDown={this.setWidth()}/>
                        </div>
                        <div className={styles.control_item}>
                            <input className={styles.attribute_item_title} type="text" name="" value="H :" readonly/><input type="text" className={styles.attribute_item_input } value={this.props.height} onKeyDown={this.setHeight()}/>
                        </div>
                        <div className={styles.control_item}>
                            <input className={styles.attribute_item_title} type="text" name="" value="x :" readonly/><input type="text" className={styles.attribute_item_input} value={this.props.x} onKeyDown={this.setX_location()}/>
                        </div>
                        <div className={styles.control_item}>
                            <input className={styles.attribute_item_title} type="text" name="" value="Y :" readonly/><input type="text" className={styles.attribute_item_input} value={this.props.y} onKeyDown={this.setY_location()}/>
                        </div>
                        <div className={styles.control_item}>
                            <input className={styles.attribute_item_title} type="text" name="" value="A :" readonly/><input type="text" className={styles.attribute_item_input} value={this.props.angle} onKeyDown={this.setAngle()}/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div>
                    <div className={styles.controller_sub_wrapper}>
                        <img className={styles.ic_ellipse_gray} src="./resource/Dashboard_PPT Editor/ic_ellipse_gray.png"/>
                        <input className={styles.controller_sub_title} type="text" name="" value="도형" readonly/>
                        <img onclick="shapeOn()" src="../../../../../document/design/RESOURCE/Dashboard_PPT Editor/ic_arrow_up.png" id="shape-on" className={styles.show_items_button}/>
                        <img onclick="shapeOff()" src="../../../../../document/design/RESOURCE/Dashboard_PPT Editor/ic_arrow_down.png" id="shape-off" className={styles.show_items_button}/>
                    </div>
                    <div className={styles.items} id={styles.shape_items}>
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
                    <div>
                    <div className={styles.controller_sub_wrapper}/>
                        <img className={styles.ic_ellipse_gray} src="../../../../../document/design/RESOURCE/Dashboard_PPT Editor/ic_ellipse_gray.png"/>
                        <input className={styles.controller_sub_title} type="text" name="" value="스타일" readonly/>
                        <img onclick="styleOn()" src="../../../../../document/design/RESOURCE/Dashboard_PPT Editor/ic_arrow_up.png" id="style-on" className={styles.show_items_button}/>
                        <img onclick="styleOff()" src="../../../../../document/design/RESOURCE/Dashboard_PPT Editor/ic_arrow_down.png" id="style-off" className={styles.show_items_button}/>
                    </div>
                    <div className={styles.items} id={styles.style_items}>
                        <textarea rows="" cols=""></textarea>
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