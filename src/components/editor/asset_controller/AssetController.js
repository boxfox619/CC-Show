import React from 'react';

let asset_attribute={
    width : 20,
    height : 20,
    x,
    y,
    angle
};

class AssetController extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            type: this.props.assetType
        }
    }

    checkType(){

    }

    render() {
        
    }
}

const mapStateToProps = (state) => {
    return {
        width : state.assetAttribute.width,
        height : state.assetAttribute.height,
        x_location : state.assetAttribute.x,
        y_location : state.assetAttribute.y,
        angle : state.assetAttribute.angle
    }
}

const mapDispathchToProps = (dispatch) =>  {
    return {
        handleText : () => {dispatch(actions.text())},
        handleVideo : () => {dispatch(actions.Video())},
        handleShape : () => {dispatch(actions.Shape())},
    }
}
//         text_sort : [ 
//     {type : 'left', displayName : '왼쪽 맞춤'},
//     {type : 'middle', displayName : '가운데 맞춤'},
//     {type : 'right', displayName : '오른쪽 맞춤'}
// ],
// text_type : [ 
//     {type : 'bold', displayName : '굵게'},
//     {type : 'italic', displayName: '기울임 꼴'},
//     {type : 'underline', displayName: '밑줄'}
// ]

// styles : [
//     {type : 'Attribute', width : '0px', height : '0px', x : '0', y : '0', angle : '0'},
//     {type : 'Text', font : '', size : ''}
// ]