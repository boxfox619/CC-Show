import update from 'react-addons-update';
export default function(state, action, actionTypes){
  switch (action.type) {
    case actionTypes.ASSET_SET_VIDEO_URL:
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
                        $set: action.url
                      }
                    }
                  }
                )
              }
            }
          }
        )
      }
    case actionTypes.TOGGLE_VIDEO_PREVIEW:
    let preview = state.slides[state.selectedSlide].assets[state.slides[state.selectedSlide].selectedAsset].preview;
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [state.slides[state.selectedSlide].selectedAsset]: {
                      preview: {
                        $set: !preview
                      }
                    }
                  }
                )
              }
            }
          }
        )
      }
    case actionTypes.ASSET_SET_VIDEO_CONTROLLER:
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
                        videoController: {
                          $set: !state.slides[state.selectedSlide].assets[state.slides[state.selectedSlide].selectedAsset].style.videoController
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
    case actionTypes.ASSET_SET_VIDEO_AUTOPLAY:
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
                        videoAutoplay: {
                          $set: !state.slides[state.selectedSlide].assets[state.slides[state.selectedSlide].selectedAsset].style.videoAutoplay
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
    case actionTypes.ASSET_SET_VIDEO_LOOP:
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
                        videoLoop: {
                          $set: !state.slides[state.selectedSlide].assets[state.slides[state.selectedSlide].selectedAsset].style.videoLoop
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
    default:
      return state;
  }
}
