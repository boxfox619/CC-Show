import React from 'react';

class TextAttributeController extends React.Component{
    render(){
        <div>
            <h1>Attribute</h1>
            <hr/>
            <p>W</p> <input type="text" value={this.props.width} onKeyUp={this.props.setWidth}/>
            <p>H</p> <input type="text" value={this.props.heigth} onkeyUp={this.props.setHeight}/>
            <p>X</p> <input type="text" value={this.props.x_location} onkeyUp={this.props.setX_location}/>
            <p>Y</p> <input type="text" value={this.props.y_location} onkeyUp={this.props.setY_location}/>
            <p>아이콘</p> <input type="text" value={this.props.angle} onkeyUp={this.props.setAngle}/>
        </div>
    }
}
