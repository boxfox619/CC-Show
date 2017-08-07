import * as actionTypes from '../actions/assets';

const initialState = {
  assetIdCount: 0,
  assets: {}
}

const assets = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ASSET_CREATE:
      let sizeUnit = state.context.sizeUnit;
      let positionUnit = state.context.positionUnit;
      var newArray = this.state.arr.slice();
      newArray.push("new value");
      return {
        ...state,
        assets: [...assets, {
          id: ++assetIdCount+'',
          type: action.assetType,
          value: action.value,
          height: '20'+sizeUnit,
          width: '20'+sizeUnit,
          x: '0'+positionUnit,
          y: '0'+positionUnit
        }]
      }
    default:
      return state
  }
}

export default assets
