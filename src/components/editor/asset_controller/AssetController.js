import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../actions/assets';

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
       asset : state.assets.assets[getAssetIndex(state, state.selectedAsset)]
    }
}

const mapDispathchToProps = (dispatch) => {
     return {
         setWidth : (width) => { dispatch(actions.setWidth(width)) },
         setHeight : (height) => { dispatch(actions.setHeight(height)) },
         setX : (x) => { dispatch(actions.setX(x)) },
         setY : (y) => { dispatch(actions.setY(y)) },
         setAngle : (angle) => { dispatch(actions.setAngle(angle)) }
     }
}

function getAssetIndex(state, key) {
  let index = -1;
  state.assets.forEach(function (asset, i) {
    if (asset.id === key) {
      index = i;
    }
  });
  return index;
}

export default AssetController;
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