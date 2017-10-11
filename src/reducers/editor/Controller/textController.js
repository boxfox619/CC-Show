import update from 'react-addons-update';
export default function(state, action, actionTypes){
  switch (action.type) {
  case actionTypes.ASSET_SET_TEXT_COLOR:
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
                      'color': {
                        $set: action.textColor
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
  case actionTypes.ASSET_SET_TEXT_FONT:
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
                      'font-family': {
                        $set: action.font
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
  case actionTypes.ASSET_SET_TEXT_FONT_SIZE:
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
                      'font-size': {
                        $set: action.fontSize
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
    case actionTypes.ASSET_SET_TEXT_FONT_WEIGHT:
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
                      'font-width': {
                        $set: action.value
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
    case actionTypes.ASSET_SET_TEXT_CHARACTER_SPACING:
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
                      'letter-spacing': {
                        $set: action.value
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
    case actionTypes.ASSET_SET_TEXT_LINE_SPACING:
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
                      'line-height': {
                        $set: action.value
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
    case actionTypes.ASSET_SET_TEXT_SORT:
    return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [state.slides[state.selectedSlide].selectedAsset]: {
                      style: { 'text-align': { $set: action.sort } }
                    }
                  }
                )
              }
            }
          }
        )
      }
    case actionTypes.ASSET_SET_TEXT_FONT_BOLD:
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
                        'font-weight': {
                          $set: (state.slides[state.selectedSlide].assets[state.slides[state.selectedSlide].selectedAsset].style['font-weight']=='bold') ? 'normal' :  'bold'
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
    case actionTypes.ASSET_SET_TEXT_FONT_UNDERLINE:
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
                        'text-decoration': {
                          $set: (state.slides[state.selectedSlide].assets[state.slides[state.selectedSlide].selectedAsset].style['text-decoration'] == 'underline') ? 'none' : 'underline'
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
    case actionTypes.ASSET_SET_TEXT_FONT_ITALIC:
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
                        'font-style': {
                          $set: (state.slides[state.selectedSlide].assets[state.slides[state.selectedSlide].selectedAsset].style['font-style'] == 'italic') ? 'normal' : 'italic'
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
    case actionTypes.ASSET_SET_TEXT_FONT_STRIKETHROUGH:
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
                        'text-decoration': {
                          $set: (state.slides[state.selectedSlide].assets[state.slides[state.selectedSlide].selectedAsset].style['text-decoration'] == 'line-through') ? 'none' : 'line-through'
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
