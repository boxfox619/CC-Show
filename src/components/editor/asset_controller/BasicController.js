import React from 'react';
import * as actions from '../../../actions/assets';
import { connect } from 'react-redux';

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
        return(
            <div>
                <h1>Attribute</h1>
                <hr/>
                <p>W</p> <input id="width" type="text" value={this.props.width} onKeyDown={this.props.setWidth()}/>
                <p>H</p> <input id="height" type="text" value={this.props.heigth} onKeyDown={this.props.setHeight()}/>
                <p>X</p> <input id="x-postion" type="text" value={this.props.x_location} onKeyDown={this.props.setX_location()}/>
                <p>Y</p> <input id="y-postion" type="text" value={this.props.y_location} onKeyDown={this.props.setY_location()}/>
                <p>아이콘</p> <input id="angle" type="text" value={this.props.angle} onKeyDown={this.props.setAngle()}/>
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

const mapStateToProps = (dispatch) => {
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

export default connect(mapStateToProps)(BasicController);