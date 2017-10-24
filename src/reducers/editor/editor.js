import { actionTypes } from '../../actions/assets';
import { actionTypes as slideActionTypes } from '../../actions/slides';
import { getState } from '../../store';
import update from 'react-addons-update';
import * as assetTypes from '../../assetTypes';

import attributeController from './Controller/attributeController';
import shapeController from './Controller/shapeController';
import textController from './Controller/textController';
import videoController from './Controller/videoController';

const initialState = {
  sizeUnit: 'px',
  positionUnit: 'px',
  selectedSlide: 0,
  slideIdCount: 0,
  slides: [{
    name: 'TEST-SLIDE',
    id: 0,
    thumbnail: '',
    note: '',
    selectedAsset: undefined,
    assetIdCount: 0,
    assets: []
  }]
}

const defaultAsset = {
  id: '',
  type: '',
  value: '',
  height: '50px',
  width: '50px',
  x: '0px',
  y: '0px',
  angle: '0',
  style: {}
};

const editor = (state = initialState, action) => {
  state = attributeController(state, action, actionTypes);
  state = shapeController(state, action, actionTypes);
  state = textController(state, action, actionTypes);
  state = videoController(state, action, actionTypes);
  switch (action.type) {
    case actionTypes.ASSET_CREATE:
      let sizeUnit = getState().slideContext.sizeUnit;
      let positionUnit = getState().slideContext.positionUnit;
      let currentId = state.slides[state.selectedSlide].assetIdCount + 1;
      let newAsset = {
        ...defaultAsset,
        id: currentId,
        type: action.assetType,
        value: action.value,
        height: '50' + sizeUnit,
        width: '50' + sizeUnit,
        x: '0' + positionUnit,
        y: '0' + positionUnit,
        style: {
          'background-color': 'white',
          'border-color': 'white',
          'border-width': '0px'
        }
      };
      if (action.assetType === assetTypes.TYPE_TEXT) {
        newAsset = {
          ...newAsset,
          style: {
            ...newAsset.style,
            'font-family': '굴림',
            'font-size': '12px',
            'text-align': 'justify',
            'font-weight' : 'normal',
            'font-style' : 'normal',
            'text-decoration' : 'none',
            color: 'black',
            'letter-spacing': '0px',
            'line-height': '100%'
          }
        }
      } else if (action.assetType === assetTypes.TYPE_VIDEO) {
        newAsset = {
          ...newAsset,
          preview: false,
          style: {
            ...newAsset.style,
            videoController: false,
            videoLoop: false,
            videoAutoplay: false
          }
        }
      } else if (action.assetType === assetTypes.TYPE_IMAGE) {
      } else if (action.assetType === assetTypes.TYPE_SHAPE) {
        newAsset = {
          ...newAsset,
          style: {
            'border-color' : '#5a84b3',
            'background-color' : '#5a84b3',
            'border-width' : '1px'
          }
        }
      } else if(action.assetType === assetTypes.TYPE_TABLE){

      } else if (action.assetType === assetTypes.TYPE_CUSTOM) {
      } else {
        alert('type error');
      }
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assetIdCount: {
                $set: currentId
              },
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    $push: [newAsset]
                  })
              }
            }
          }
        )
      };
    case actionTypes.ASSET_SET_VALUE:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [getAssetIndex(state, action.id)]: {
                      value: {
                        $set: action.value
                      }
                    }
                  }
                )
              }
            }
          }
        )
      }
    case actionTypes.ASSET_SELECTED:
    if(state.slides.length>0){
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              selectedAsset: {
                $set: getAssetIndex(state, action.assetId)
              }
            }
          }
        )
      };
    }else{
      return {...state}
    }
    case actionTypes.ASSET_SET_BOTH_POSITION:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [state.slides[state.selectedSlide].selectedAsset]: {
                      x: {
                        $set: parseInt(action.x) + getState().slideContext.positionUnit
                      },
                      y: {
                        $set: parseInt(action.y) + getState().slideContext.positionUnit
                      }
                    }
                  })
              }
            }
          })
      }
    case actionTypes.ASSET_COPY:
    let currentAssetId = state.slides[state.selectedSlide].assetIdCount + 1;
    let copiedAsset = state.slides[action.slide].assets[getAssetIndex(state, action.id)];
    return {
      ...state,
      slides: update(
        state.slides, {
          [state.selectedSlide]: {
            $set: {
              ...state.slides[state.selectedSlide],
              assetIdCount: currentAssetId,
              assets: update(
                state.slides[state.selectedSlide].assets, {
                  $push: [{
                    ...copiedAsset,
                    id: currentAssetId,
                    x: action.x,
                    y: action.y
                  }]
                })
            }
          }
        }
      )
    }
    case actionTypes.ASSET_SORT:
    let assetsArr = state.slides[state.selectedSlide].assets;
    let targetIndex = getAssetIndex(state, action.target);
    let assetIndex = getAssetIndex(state, action.target);
    if(action.to=='min'){
      assetIndex = 0;
    }else if(action.to=='max'){
      assetIndex = assetsArr.length-1;
    }else if(action.to=='front'&&assetIndex>0){
      assetIndex -= 1;
    }else if(action.to=='back'&&assetIndex<assetsArr.length-1){
      assetIndex+=1;
    }
    return {
      ...state,
      slides: update(
        state.slides,{
          [state.selectedSlide]: {
            $set: {
              ...state.slides[state.selectedSlide],
              assets: insertItem(assetsArr, assetIndex, assetsArr.splice(targetIndex, 1)[0])
            }
          }
        }
      )
    }
    case actionTypes.ASSET_DELETE:
    return {
      ...state,
      slides: update(
        state.slides, {
          [state.selectedSlide]: {
            $set: {
              ...state.slides[state.selectedSlide],
              selectedAsset: undefined,
              assets: update(
              state.slides[state.selectedSlide].assets, {
                $splice: [[getAssetIndex(state, action.id), 1]]
              }
            )
            }
          }
        }
      )
    }
      case actionTypes.ASSET_SET_IMAGE:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [state.slides[state.selectedSlide].selectedAsset]: {
                      value: {
                          $set: action.value
                      }
                    }
                  }
                )
              }
            }
          }
        )
      }
    case actionTypes.ASSET_SET_STYLE:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [state.slides[state.selectedSlide].selectedAsset]: {
                      style: {
                        $set: JSON.parse(action.style)
                      }
                    }
                  }
                )
              }
            }
          }
        )
      }
    case actionTypes.ASSET_SET_MULTIPLE_ATTRIBUTE:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [state.slides[state.selectedSlide].selectedAsset]: action.attrs
                  })
              }
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
    case slideActionTypes.SLIDE_COPY:
      let target = action.target;
      return {
        ...state,
        slideIdCount: state.slideIdCount + 1,
        slides: update(
          state.slides, {
            $push: [{
              ...target,
              id: state.slideIdCount + 1
            }]
          })
      }
    case slideActionTypes.SLIDE_CREATE:
      return {
        ...state,
        slideIdCount: state.slideIdCount + 1,
        slides: update(
          state.slides, {
            $push: [{
              id: state.slideIdCount + 1,
              name: 'NEW-SLIDE' + (state.slideIdCount + 1),
              selectedAsset: undefined,
              assetIdCount: 0,
              assets: []
            }]
          })
      }
    case slideActionTypes.SLIDE_DELETE:
      let selectedSlide = state.selectedSlide;
      if (selectedSlide > state.slides.length && selectedSlide > 0) {
        selectedSlide -= 1;
      }
      return {
        ...state,
        selectedSlide,
        slides: update(
          state.slides, {
            $splice: [
              [getSlideIndex(state, action.target), 1]
            ]
          }
        )
      }
    case slideActionTypes.SLIDE_RENAME:
      return {
        ...state,
        slides: update(
          state.slides, {
            [getSlideIndex(state, action.target)]: {
              name: {
                $set: action.name
              }
            }
          }
        )
      }
    case slideActionTypes.SLIDE_SELECT:
      return {
        ...state,
        selectedSlide: getSlideIndex(state, action.target)
      }
    case slideActionTypes.SLIDE_SET_THUMBNAIL:
      return {
        ...state,
        slides: update(
          state.slides, {
            [getSlideIndex(state, action.target)]: {
              thumbnail: {
                $set: action.thumbnail
              }
            }
          }
        )
      }
    case slideActionTypes.EXCHANGE_SLIDE:
      return {
        ...state,
        slides: insertItem(state.slides, action.to, state.slides.splice(action.from, 1)[0])
      }
    case slideActionTypes.SLIDE_SET_NOTE:
    return {
      ...state,
      slides: update(
        state.slides, {
          [action.target]: {
            note: {
              $set: action.note
            }
          }
        }
      )
    };
    case slideActionTypes.INIT_SHOW_DATA:
    return {
      ...action.data
    }
    default:
      return state;
  }
}

function insertItem(array, index, item) {
  let newArray = array.slice();
  newArray.splice(index, 0, item);
  return newArray;
}

function getSlideIndex(state, key) {
  let index = -1;
  state.slides.forEach(function (slide, i) {
    if (slide.id == key) {
      index = i;
    }
  });
  return index;
}

function getAssetIndex(state, key) {
  let index = undefined;
  state.slides[state.selectedSlide].assets.forEach(function (asset, i) {
    if (asset.id == key) {
      index = i;
    }
  });
  return index;
}

export default editor;
