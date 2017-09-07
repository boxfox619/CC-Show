import { actionTypes, dialogs } from '../actions/ui';
import update from 'react-addons-update';

const initialState = {
  dialog: undefined,
  visibleSlideManager: false
}

const ui = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DIALOG:
      return {
        ...state,
        dialog : (state.dialog!=action.target)? action.target : undefined
      };
    case actionTypes.TOGGLE_SLIDE_MANAGER:
      return {
        ...state,
        visibleSlideManager : !state.visibleSlideManager
      };
      break;
    default:
      return state;
  }
}

export default ui;
