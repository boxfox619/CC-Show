import update from 'react-addons-update';
import * as actionTypes from './slide.actions';
import {insertItem} from '../util';

const initialState = {
  sizeUnit: 'px',
  positionUnit: 'px'
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

export default function(state, action){
    let currentSlideIndex = state.selectedSlide;
  switch (action.type) {
    case actionTypes.SLIDE_CONTEXT_SET_SIZE_UNIT:
      return {
        ...state,
        sizeUnit: action.unit
      }
    case actionTypes.SLIDE_CONTEXT_SET_POSITION_UNIT:
      return {
        ...state,
          positionUnit: action.unit
      }
      case actionTypes.SLIDE_CONTEXT_SET_SIZE_UNIT:
        return {
          ...state,
          sizeUnit: action.unit
        }
      case actionTypes.SLIDE_CONTEXT_SET_POSITION_UNIT:
        return {
          ...state,
          positionUnit: action.unit
        }
      case actionTypes.SLIDE_COPY:
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
      case actionTypes.SLIDE_CREATE:
        return {
          ...state,
          slideIdCount: state.slideIdCount + 1,
          slides: update(
            state.slides, {
              $push: [{
                id: state.slideIdCount + 1,
                name: 'NEW-SLIDE' + (state.slideIdCount + 1),
                selectedAssetIndex: undefined,
                assetIdCount: 0,
                assets: []
              }]
            })
        }
      case actionTypes.SLIDE_DELETE:
        let index = getSlideIndex(state, action.target);
        if (index > 0) {
            index = index - 1;
        }
        return {
          ...state,
          selectedSlide: index,
          slides: update(
            state.slides, {
              $splice: [
                [getSlideIndex(state, action.target), 1]
              ]
            }
          )
        }
      case actionTypes.SLIDE_RENAME:
          if (state.slides.length == 0) {
            return {...state};
          } else {
              return {
                  ...state,
                  slides: update(
                      state.slides, {
                          [currentSlideIndex]: {
                              name: {
                                  $set: action.name
                              }
                          }
                      }
                  )
              }
          }
      case actionTypes.SLIDE_SELECT:
        return {
          ...state,
          selectedSlide: getSlideIndex(state, action.target)
        }
      case actionTypes.SLIDE_SET_THUMBNAIL:
        return {
          ...state,
          slides: update(
            state.slides, {
              [action.target]: {
                thumbnail: {
                  $set: action.thumbnail
                }
              }
            }
          )
        }
      case actionTypes.EXCHANGE_SLIDE:
        return {
          ...state,
          slides: insertItem(state.slides, action.to, state.slides.splice(action.from, 1)[0])
        }
      case actionTypes.SLIDE_SET_NOTE:
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
    default:
      return state
  }
}
