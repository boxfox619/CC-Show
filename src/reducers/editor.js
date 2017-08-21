import { actionTypes } from '../actions/assets';
import { actionTypes as slideActionTypes } from '../actions/slides';
import { getState } from '../store';
import update from 'react-addons-update';

const initialState = {
  sizeUnit: 'px',
  positionUnit: 'px',
  selectedSlide: 0,
  slides:[{
      name: 'TEST-SLIDE',
      selectedAsset: undefined,
      assetIdCount: 0,
      assets: []
    }]
}

const editor = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.ASSET_CREATE:
      let sizeUnit = getState().slideContext.sizeUnit;
      let positionUnit = getState().slideContext.positionUnit;
      let currentId = state.slides[state.selectedSlide].assetIdCount + 1;
      return {
        ...state,
        slides:update(
          state.slides,
          {
            [state.selectedSlide]:{
              assetIdCount: {$set: currentId},
              assets: {$set: update(
                state.slides[state.selectedSlide].assets, {
                  $push: [{
                    id: currentId,
                    type: action.assetType,
                    value: action.value,
                    height: '50' + sizeUnit,
                    width: '50' + sizeUnit,
                    x: '0' + positionUnit,
                    y: '0' + positionUnit
                  }]
                })}
            }
          }
        )

      };
    case actionTypes.ASSET_SELECTED:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              selectedAsset: {$set:action.assetId}
            }
          }
        )
      };
    case actionTypes.ASSET_SET_WIDTH:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          width: { $set: parseInt(action.value)+getState().slideContext.sizeUnit }
                        }
                    })}
            }
          })
        }
    case actionTypes.ASSET_SET_HEIGHT:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          height: { $set: parseInt(action.value)+getState().slideContext.sizeUnit }
                        }
                    })}
            }
          })
        }
    case actionTypes.ASSET_SET_X_POSTION:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          x: { $set: parseInt(action.value)+getState().slideContext.positionUnit }
                        }
                    })}
            }
          })
        }
    case actionTypes.ASSET_SET_Y_POSTION:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          y: { $set: parseInt(action.value)+getState().slideContext.positionUnit }
                        }
                    })}
            }
          })
        }
    case actionTypes.ASSET_SET_BOTH_POSITION:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          x: { $set: parseInt(action.x)+getState().slideContext.positionUnit },
                          y: { $set: parseInt(action.y)+getState().slideContext.positionUnit }
                        }
                    })}
            }
          })
        }
    case actionTypes.ASSET_SET_ANGLE:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          angle: { $set: action.value }
                        }
                    })}
            }
          })
        }
    case actionTypes.ASSET_SET_FONT:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          font: { $set: action.font }
                        }
                    })}
            }
          })
        }
    case actionTypes.ASSET_SET_FONT_SIZE:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          fontSize: { $set: action.fontSize }
                        }
                    })}
            }
          })
        }
    case actionTypes.ASSET_SET_TEXT_SORT:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          sort: { $set: action.sort }
                        }
                    })}
            }
          })
        }
    case actionTypes.ASSET_SET_FONT_BOLD:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          bold: { $set: action.bold }
                        }
                    })}
            }
          })
        }
    case actionTypes.ASSET_SET_FONT_UNDERLINE:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          angle: { $set: action.underline }
                        }
                    })}
            }
          })
        }
    case actionTypes.ASSET_SET_FONT_ITALIC:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          italic: { $set: action.italic }
                        }
                    })}
            }
          })
        }
    case actionTypes.ASSET_SET_TEXT_FILL_COLOR:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          textFillColor: { $set: action.color }
                        }
                    })}
            }
          })
        }
    case actionTypes.ASSET_SET_TEXT_EDGE:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          edge: { $set: action.edge }
                        }
                    })}
            }
          }
        )
      }
    case actionTypes.ASSET_SET_VIDEO_URL:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          url: { $set: action.url }
                        }
                    })}
            }
          }
        )
      }
    case actionTypes.ASSET_SET_VIDEO_CONTROLLER:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          controller: { $set: action.controller }
                        }
                    })}
            }
          }
        )
      }
    case actionTypes.ASSET_SET_VIDEO_AUTOPLAY:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          autoplay: { $set: action.autoplay }
                        }
                    })}
            }
          }
        )
      }
    case actionTypes.ASSET_SET_VIDEO_LOOP:
    return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                          loop: { $set: action.loop }
                        }
                    })}
            }
          }
        )
      }
    case actionTypes.ASSET_SET_MULTIPLE_ATTRIBUTE:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [state.selectedSlide]:{
              assets: {$set: update(
                state.slides[state.selectedSlide].assets,
                    {
                        [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: action.attrs
                    })}
            }
          })
        }
    case slideActionTypes.SLIDE_CONTEXT_SET_SIZE_UNIT:
      return {
        ...state,
        sizeUnit: action.unit
      }
    case slideActionTypes.SLIDE_CONTEXT_SET_POSITION_UNIT:
      return {
        ...state,
          positionUnit: action.unit
        }
    case slideActionTypes.SLIDE_CREATE:
      return {
        ...state,
        slides: update(
          state.slides,
          { $push : [{
              name: 'NEW-SLIDE'+state.slides.length,
              selectedAsset: undefined,
              assetIdCount: 0,
              assets: []
          }]
        })
      }
    case slideActionTypes.SLIDE_REMOVE:
      return {
        ...state,
        slides: update(
          state.slides,
          {$splice: [[action.target, 1]]}
        )
      }
    case slideActionTypes.SLIDE_RENAME:
      return {
        ...state,
        slides: update(
          state.slides,
          {
            [action.target]:{
              name: { $set : action.name}
            }
          }
        )
      }
    case slideActionTypes.SLIDE_SELECT:
      return {
        ...state,
        selectedSlide: action.target
      }
    default:
      return state;
  }
}

function getAssetIndex(state, key) {
  let index = -1;
  state.slides[state.selectedSlide].assets.forEach(function (asset, i) {
    if (asset.id == key) {
      index = i;
    }
  });
  return index;
}

export default editor
