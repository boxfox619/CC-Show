import { actionTypes } from '../actions/ui';
import update from 'react-addons-update';

const initialState = {
  visibleSlideManager: false
}

const editor = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SLIDE_MANAGER:
      return {
        ...state,
        visibleSlideManager : action.state
      };
    default:
      return state;
  }
}

export default editor
