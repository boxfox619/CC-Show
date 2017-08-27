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
        this.loadImage = this.loadImage.bind(this);
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
                    <div className={styles.controller_sub_wrapper}>
                        <img className={styles.ic_ellipse_gray} src="./resource/Dashboard_PPT Editor/ic_ellipse_gray.png"/>
                        <input className={styles.controller_sub_title} type="text" name="" value="스타일" readonly/>
                        <img onclick="shapeOn()" src="../../../../../document/design/RESOURCE/Dashboard_PPT Editor/ic_arrow_up.png" id="shape-on" className={styles.show_items_button}/>
                        <img onclick="shapeOff()" src="../../../../../document/design/RESOURCE/Dashboard_PPT Editor/ic_arrow_down.png" id="shape-off" className={styles.show_items_button}/>
                    </div>
                    <div className={styles.items} id={styles.shape_items}>
                        <div>
                            <textarea rows="" cols=""></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    loadImage(){
        var fr = new FileReader();
        fr.onload = (e)=> {
        this.setState({
            ...this.state,
            src: e.target.result
        });
        axios.put('/store/update/',{
            id: this.props.id,
            target: 'thumbnail',
            data: e.target.result
        }).then(response => {
            console.log('test');
        });
        };
        var inputElement = document.createElement("input");
        inputElement.type = "file";
        inputElement.addEventListener("change", function(){
            fr.readAsDataURL(inputElement.files[0]);
        });
        inputElement.dispatchEvent(new MouseEvent("click"));

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