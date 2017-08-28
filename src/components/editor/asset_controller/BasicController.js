import React from 'react';
import * as actions from '../../../actions/assets';
import { connect } from 'react-redux';

import styles from './AssetController.css';
class BasicController extends React.Component{
    constructor(prop) {
        super(prop);
        this.state = {
            src: ''
        }

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
                        <div className={styles.controller_sub_title}>속성

                        <img onclick={this.attributeOn()} src="/images/ic_arrow_up.png" id={styles.attribute_on}  className={styles.show_items_button}/>
                        <img onclick={this.attributeOff()} src="/images/ic_arrow_down.png" id={styles.attribute_off}className={styles.show_items_button}/>
                        </div>
                    </div>
                    <div className={styles.items} id={styles.attribute_items}>
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
                                <img onclick={this.shapeOn()} src="/images/ic_arrow_up.png" id={styles.shape_on} className={styles.show_items_button}/>
                                <img onclick={this.shapeOff()} src="/images/ic_arrow_down.png" id={styles.shape_off} className={styles.show_items_button}/>
                            </div>
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
                    <div className={styles.controller_sub_wrapper}>
                        <div className={styles.controller_sub_title}>스타일
                            <img onclick={this.shapeOn()} src="/images/ic_arrow_up.png" id={styles.shape_on} className={styles.show_items_button}/>
                            <img onclick={this.shapeOff()} src="/images/ic_arrow_down.png" id={styles.shape_off} className={styles.show_items_button}/>
                        </div>
                    </div>
                    <div className={styles.items} id={styles.style_items}>
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
        console.log('this is attributeOn');
        let d = document;
        d.getElementById('attribute_on').style.display = "none";
        d.getElementById('attribute_off').style.display = "block";
        d.getElementById('attribute_items').style.display = "block";
    }

    shapeOn() {
        console.log('this is shapeOn');
        let d = document;
        d.getElementById('shape_on').style.display = "none"
        d.getElementById('shape_off').style.display = "block"
        d.getElementById('shape_items').style.display = "block";
    }

    styleOn() {
        console.log('this is styleOn');
        let d = document;
        d.getElementById('style_on').style.display = "none"
        d.getElementById('style_off').style.display = "block"
        d.getElementById('style_items').style.display = "block";
    }

    attributeOff() {
        console.log('this is attributeOff');
        let d = document;
        d.getElementById('attribute_off').style.display = "none"
        d.getElementById('attribute_on').style.display = "block"
        d.getElementById('attribute_items').style.display = "none";
    }

    shapeOff() {
        console.log('this is shapeOff');
        let d = document;
        d.getElementById('shape_off').style.display = "none"
        d.getElementById('shape_on').style.display = "block"
        d.getElementById('shape_items').style.display = "none";
    }

    styleOff() {
        console.log('this is style');
        let d = document;
        d.getElementById('style_off').style.display = "none"
        d.getElementById('style_on').style.display = "block"
        d.getElementById('style_items').style.display = "none";
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
