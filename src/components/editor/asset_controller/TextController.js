import React from 'react';
import * as actions from '../../../actions/assets';
import { connect } from 'react-redux';

class TextController extends React.Component{
    constructor(prop) {
        super(prop);
    }

    render(){
        return(
            <div>
                <div>
                    <h1>Text</h1>
                    <hr/>
                    <select>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>  
                    </select>
                    <input id="width" type="text" value={this.props.width} onKeyUp={this.props.setWidth()}/>
                    <input id="sort" type="checkbox" value="left"/>
                    <input id="sort" type="checkbox" value="middle"/>
                    <input id="sort" type="checkbox" value="right"/>
                    <button id="bold" onclike=""></button>
                    <button id="underline" onclike=""></button>
                    <button id="italic" onclike=""></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (dispatch) => {
    return {
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
        }
    }
}

export default connect(mapStateToProps)(TextController);
