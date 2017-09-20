import { actionTypes } from '../actions/assets';
import { actionTypes as slideActionTypes } from '../actions/slides';
import { getState } from '../store';
import update from 'react-addons-update';
import * as assetTypes from '../assetTypes';

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
          fillColor: 'withe',
          borderColor: 'withe',
          edgeWeight: '0'
        }
      };
      if (action.assetType === assetTypes.TYPE_TEXT) {
        newAsset = {
          ...newAsset,
          style: {
            font: '',
            fontsize: '0',
            sort: '',
            fontBold: false,
            fontItalic: false,
            fontUnderline: false,
            fontStrikethrough: false,
            textColor: ' '
          }
        }
      } else if (action.assetType === assetTypes.TYPE_VIDEO) {
        newAsset = {
          ...newAsset,
          style: {
            videoController: false,
            videoLoop: false,
            videoAutoplay: false
          }
        }
      } else if (action.assetType === assetTypes.TYPE_IMAGE) {
        newAsset = {
          ...newAsset,
          style: {}
        }
      } else if (action.assetType === assetTypes.TYPE_SHAPE) {
        newAsset = {
          ...newAsset,
          style: {}
        }
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
      console.log('asvav'+action.value);
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
    case actionTypes.ASSET_SELECTED:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              selectedAsset: {
                $set: action.assetId
              }
            }
          }
        )
      };
    case actionTypes.ASSET_SET_WIDTH:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      width: {
                        $set: parseInt(action.value) + getState().slideContext.sizeUnit
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      height: {
                        $set: parseInt(action.value) + getState().slideContext.sizeUnit
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      x: {
                        $set: parseInt(action.value) + getState().slideContext.positionUnit
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      y: {
                        $set: parseInt(action.value) + getState().slideContext.positionUnit
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
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
            $set: {assetIdCount: currentAssetId,
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
    case actionTypes.ASSET_SET_X_POSTION:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
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
    case actionTypes.ASSET_SET_TEXT_COLOR:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        textColor: {
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        font: {
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        fontsize: {
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        fontWeight: {
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        characterSpacing: {
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        lineSpacing: {
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
      case actionTypes.ASSET_SET_IMAGE_URL:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        url: {
                          $set: action.url
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        sort: {
                          $set: action.sort
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
    case actionTypes.ASSET_SET_TEXT_FONT_BOLD:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        fontBold: {
                          $set: !state.slides[state.selectedSlide].assets[getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)].style.text.fontBold
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        fontUnderline: {
                          $set: !state.slides[state.selectedSlide].assets[getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)].style.text.fontUnderline
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        fontItalic: {
                          $set: !state.slides[state.selectedSlide].assets[getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)].style.text.fontItalic
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        fontStrikethrough: {
                          $set: !state.slides[state.selectedSlide].assets[getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)].style.text.fontStrikethrough
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
    case actionTypes.ASSET_SET_FILL_COLOR:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        fillColor: {
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        borderColor: {
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        borderWeight: {
                          $set: action.borderWeight
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
    case actionTypes.ASSET_SET_VIDEO_URL:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
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
    case actionTypes.ASSET_SET_VIDEO_CONTROLLER:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        video: {
                          videoController: {
                            $set: !state.slides[state.selectedSlide].assets[getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)].style.video.videoController
                          }
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        videoAutoplay: {
                          $set: !state.slides[state.selectedSlide].assets[getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)].style.video.videoAutoplay
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
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: {
                      style: {
                        videoLoop: {
                          $set: !state.slides[state.selectedSlide].assets[getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)].style.video.videoLoop
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
    case actionTypes.ASSET_SET_MULTIPLE_ATTRIBUTE:
      return {
        ...state,
        slides: update(
          state.slides, {
            [state.selectedSlide]: {
              assets: {
                $set: update(
                  state.slides[state.selectedSlide].assets, {
                    [getAssetIndex(state, state.slides[state.selectedSlide].selectedAsset)]: action.attrs
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
  let index = -1;
  state.slides[state.selectedSlide].assets.forEach(function (asset, i) {
    if (asset.id == key) {
      index = i;
    }
  });
  return index;
}

export default editor;
