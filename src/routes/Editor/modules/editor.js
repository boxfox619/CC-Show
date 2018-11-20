// https://github.com/davezuko/react-redux-starter-kit/blob/master/src/routes/Counter/modules/counter.js
import * as slide from './slide';

export const SET_SIZE_UNIT = 'SET_SIZE_UNIT';
export const SET_POSITION_UNIT = 'SET_POSITION_UNIT';

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [SET_SIZE_UNIT]: (state, action) => {},
    [SET_POSITION_UNIT]: (state, action) => {},
    ...slide.ACTION_HANDLERS
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    sizeUnit: 'px',
    positionUnit: 'px',
    selectedSlide: 0,
    slideIdCount: 0,
    cachedAsset: undefined,
    slides: [...slide.initialState]
};
export default editorReducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}