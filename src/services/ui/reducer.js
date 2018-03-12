import { actionTypes } from './actions';
import dialogs from './dialogs';

const initialState = {
  dialog: undefined,
  visibleSlideManager: false,
  colorPicker: undefined
}

function getUiParameter(action, state){
  if(action.target==dialogs.ASSET_EDITOR){
    return action.assetId
  }
}

const ui = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DIALOG:
      return {
        ...state,
        uiParameter : getUiParameter(action, state),
        dialog : (state.dialog!=action.target)? action.target : undefined,
        colorPicker : (state.colorPicker===action.colorPicker)? state.colorPicker : action.colorPicker
      };
    case actionTypes.RELEASE_DIALOG:
      return {
        ...state,
        dialog : undefined,
        visibleSlideManager: false
      }
    case actionTypes.TOGGLE_SLIDE_MANAGER:
      return {
        ...state,
        visibleSlideManager : !state.visibleSlideManager
      };
    default:
      return state;
  }
}

export default ui;
