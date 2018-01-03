import update from 'react-addons-update';
import {actionTypes} from './actions';

export default function(state, action){
  switch (action.type) {
    case actionTypes.ASSET_SET_ANGLE:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [state.slides[state.selectedSlide].selectedAsset]: {
                      angle: {
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
    case actionTypes.ASSET_SET_WIDTH:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [state.slides[state.selectedSlide].selectedAsset]: {
                      width: {
                        $set: parseInt(action.value) + state.sizeUnit
                      }
                    }
                  }
                )
              }
            }
          }
        )
      }
    case actionTypes.ASSET_SET_HEIGHT:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [state.slides[state.selectedSlide].selectedAsset]: {
                      height: {
                        $set: parseInt(action.value) + state.sizeUnit
                      }
                    }
                  }
                )
              }
            }
          }
        )
      }
    case actionTypes.ASSET_SET_X_POSTION:
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
                        $set: parseInt(action.value) + state.positionUnit
                      }
                    }
                  }
                )
              }
            }
          }
        )
      }
    case actionTypes.ASSET_SET_Y_POSTION:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [state.slides[state.selectedSlide].selectedAsset]: {
                      y: {
                        $set: parseInt(action.value) + state.positionUnit
                      }
                    }
                  }
                )
              }
            }
          }
        )
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
                          $set: parseInt(action.x) + state.positionUnit
                        },
                        y: {
                          $set: parseInt(action.y) + state.positionUnit
                        }
                      }
                    })
                }
              }
            })
      }
    default:
      return state;
  }
}
