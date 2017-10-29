import update from 'react-addons-update';

export const setSelectAssetStyle = (state, styleName, styleAttr) => {
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
                    [styleName]: {
                      $set: styleAttr
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
}

export const updateSelectedAssetValue = (state, value) => {
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
                    $set: value
                  }
                }
              }
            )
          }
        }
      }
    )
  }
}

export const replaceSelectAssetObj = (state, objName, obj)=>{
  return {
    ...state,
    slides: update(
      state.slides, {
        [state.selectedSlide]: {
          assets: {
            $set: update(
              state.slides[state.selectedSlide].assets, {
                [state.slides[state.selectedSlide].selectedAsset]: {
                  [objName]: {
                    $set: obj
                  }
                }
              }
            )
          }
        }
      }
    )
  }
}

export const getSelectedAssetStyle = (state, styleName)=>{
  return getSelectedAsset(state).style[styleName];
}

export const getSelectedAssetValue = (state) =>{
  return state.slides[state.selectedSlide].assets[state.slides[state.selectedSlide].selectedAsset].value;
}

export const getSelectedAsset = (state) =>{
  return state.slides[state.selectedSlide].assets[state.slides[state.selectedSlide].selectedAsset];
}
