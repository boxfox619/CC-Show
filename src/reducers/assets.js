import {
  actionTypes
} from '../actions/assets';
import {
  getState
} from '../store'; ===
=== =
import {
  actionTypes
} from '../actions/assets';
import {
  getState
} from '../store';
import update from 'react-addons-update';

const initialState = {
  assetIdCount: 0,
  selectedAsset: undefined,
  assets: []
}

const assets = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ASSET_CREATE:
      let sizeUnit = getState().slideContext.sizeUnit;
      let positionUnit = getState().slideContext.positionUnit;
      let currentId = state.assetIdCount + 1;
      return {
        ...state,
        assetIdCount: currentId,
        assets: update(
          state.assets, {
            $push: [{
              id: currentId,
              type: action.assetType,
              value: action.value,
              height: '20' + sizeUnit,
              width: '20' + sizeUnit,
              x: '0' + positionUnit,
              y: '0' + positionUnit
            }]
          })
      };
    case actionTypes.ASSET_SELECTED:
      return {
        ...state,
        selectedAsset: action.assetId
      };
    case actionTypes.ASSET_SET_WIDTH:
      return {
        ...state,
        assets: update(state.assets, {
          [getAssetIndex(state, state.selectedAsset)]: {
            width: {
              $set: action.value
            }
          }
        })
      }
    case actionTypes.ASSET_SET_HEIGHT:
      return {
        ...state,
        assets: update(state.assets, {
          [getAssetIndex(state, state.selectedAsset)]: {
            height: {
              $set: action.value
            }
          }
        })
      }
    case actionTypes.ASSET_SET_X_POSTION:
      return {
        ...state,
        assets: update(state.assets, {
          [getAssetIndex(state, state.selectedAsset)]: {
            x: {
              $set: action.value
            }
          }
        })
      }
    case actionTypes.ASSET_SET_Y_POSTION:
      return {
        ...state,
        assets: update(state.assets, {
          [getAssetIndex(state, state.selectedAsset)]: {
            y: {
              $set: action.value
            }
          }
        })
      }
    case actionTypes.ASSET_SET_ANGLE:
      return {
        ...state,
        assets: update(state.assets, {
          [getAssetIndex(state, state.selectedAsset)]: {
            angle: {
              $set: action.value
            }
          }
        })
      }
    default:
      return state;
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

export default assets