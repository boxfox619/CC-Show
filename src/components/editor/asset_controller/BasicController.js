import React from 'react';

class BasicController extends React.Component{
    constructor(prop) {
        super(prop);
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
}

function setWidth() {
    if(event.keyCode==13) {
        let value=document.getElementById().value;
        this.props.setWidth(value);
    }
}

function setHeight() {
    if(event.keyCode==13) {
        let value=document.getElementById().value;
        this.props.setHeight(value);
    }
}

function setX_location() {
    if(event.keyCode==13){
        let value=document.getElementById().value;
        this.props.setY(value);
    }
}

function setY_location() {
    if(event.keyCode==13){
        let value=document.getElementById().value;
        this.props.setX(value);
    }
}

function setAngle() {
    if(event.keyCode==13){
        let value=document.getElementById().value;
        this.props.setAngle(value);
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

export default connect(mapStateToProps)(AssetController);