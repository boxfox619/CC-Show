import React from 'react';

class ImageController extends React.Component{
    render(){
        <div>
            <h1>Attribute</h1>
            <hr/>
            <p>W</p> <input id="width" type="text" value={this.props.width} onKeyUp={this.props.setWidth()}/>
            <p>H</p> <input id="height" type="text" value={this.props.heigth} onkeyUp={this.props.setHeight()}/>
            <p>X</p> <input id="x-postion" type="text" value={this.props.x_location} onkeyUp={this.props.setX_location()}/>
            <p>Y</p> <input id="y-postion" type="text" value={this.props.y_location} onkeyUp={this.props.setY_location()}/>
            <p>아이콘</p> <input id="angle" type="text" value={this.props.angle} onkeyUp={this.props.setAngle()}/>
        </div>
    }
}

function () {
    
}

const mapDispathchToProps = (dispatch) => {
    return {
        setWidth: (width) => {
            dispatch(actions.setWidth(width))
        },
        setHeight: (height) => {
            dispatch(actions.setHeight(height))
        },
        setX: (x) => {
            dispatch(actions.setX(x))
        },
        setY: (y) => {
            dispatch(actions.setY(y))
        },
        setAngle: (angle) => {
            dispatch(actions.setAngle(angle))
        }
    }
}

export default ImageController;
