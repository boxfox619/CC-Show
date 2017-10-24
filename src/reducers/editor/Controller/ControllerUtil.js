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

export const getSelectedAssetStyle = (state, styleName)=>{
  return state.slides[state.selectedSlide].assets[state.slides[state.selectedSlide].selectedAsset].style[styleName];
}
