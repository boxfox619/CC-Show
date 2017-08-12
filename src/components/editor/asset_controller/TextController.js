import React from 'react';
import actions from '../../../actions/assets';

class TextController extends React.Component{
    render(){
        <div>
            <div>
                <h1>Attribute</h1>
                <hr/>
                <p>W</p> <input id="width" type="text" value={this.props.width} onKeyUp={this.props.setWidth()}/>
                <p>H</p> <input id="height" type="text" value={this.props.heigth} onkeyUp={this.props.setHeight()}/>
                <p>X</p> <input id="x-postion" type="text" value={this.props.x_location} onkeyUp={this.props.setX_location()}/>
                <p>Y</p> <input id="y-postion" type="text" value={this.props.y_location} onkeyUp={this.props.setY_location()}/>
                <p>아이콘</p> <input id="angle" type="text" value={this.props.angle} onkeyUp={this.props.setAngle()}/>
            </div>
            <div>
                <h1>Text</h1>
                <hr/>
                <input id="width" type="text" value={this.props.width} onKeyUp={this.props.setWidth()}/>

                <button></button>
                <button></button>
            </div>
        </div>
    }
}

function () {
    
}

const mapDispathchToProps = (dispatch) => {
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
        },
        setFont: (font) => {
            dispatch(actions.setAssetFont(font))
        },
        setFontSize: (fontSize) => {
            dispatch(actions.setAssetFontSize(fontsize))
        },
        setTextSort: (sort) => {
            dispatch(actions.setAssetTextSort(sort))
        },
        setFontBold: (bold) => {
            dispatch(actions.setAssetFontBold(bold))
        },
        setFontUnderline: (underline) => {
            dispatch(actions.setAssetFontUnderline(underline))
        },
        setFontItalic: (italic) => {
            dispatch(actions.setAssetFontItalic(italic))
        },
        setTextFillColor: (color) => {
            dispatch(actions.setAssetTextFillColor(color))
        },
        setTextEdge: (color, weight) => {
            dispatch(actions.setAssetTextEdge(color, weight))
        },
    }
}

export default TextController;
