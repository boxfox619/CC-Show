import * as actionTypes from '../../actions/slides';

const initialState = {
  sizeUnit: 'px',
  positionUnit: 'px'
}

const slideContext = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SLIDE_CONTEXT_SET_SIZE_UNIT:
      return {
        ...state,
        sizeUnit: action.unit
      }
    case actionTypes.SLIDE_CONTEXT_SET_POSITION_UNIT:
      return {
        ...state,
          positionUnit: action.unit
      }
    default:
      return state
  }
}

export default slideContext;
