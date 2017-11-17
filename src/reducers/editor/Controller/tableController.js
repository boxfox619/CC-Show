import update from 'react-addons-update';

export default function (state, action, actionTypes) {
  switch (action.type) {
    case actionTypes.CELL_SET_VALUE:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [state.slides[state.selectedSlide].selectedAsset]: {
                      cells: update(
                        state.slides[state.selectedSlide].assets[state.slides[state.selectedSlide].selectedAsset].cells, {
                          [action.i]: {
                            [j]: {
                              $set: action.value
                            }
                          }
                        }
                      )
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