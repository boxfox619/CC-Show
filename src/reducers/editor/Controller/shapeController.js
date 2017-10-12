import update from 'react-addons-update';
export default function(state, action, actionTypes){
  switch (action.type) {
    case actionTypes.ASSET_SET_FILL_COLOR:
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
                        'background-color': {
                          $set: action.fillColor
                        }
                      }
                    }
                  }
                )
              }
            }
          }
        )
      }
    case actionTypes.ASSET_SET_BORDER_COLOR:
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
                        'border-color': {
                          $set: action.borderColor
                        }
                      }
                    }
                  }
                )
              }
            }
          }
        )
      }
    case actionTypes.ASSET_SET_BORDER_WEIGHT:
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
                        'border-width': {
                          $set: action.weight
                        }
                      }
                    }
                  }
                )
              }
            }
          }
        )
      }
      case actionTypes.ASSET_SET_CHANGE_SHAPE:
      console.log(action);
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [state.slides[state.selectedSlide].selectedAsset]: {
                      value: { $set: action.shape }
                    }
                  }
                )
              }
            }
          }
        )
      }
    default:
      return state;
  }
}
