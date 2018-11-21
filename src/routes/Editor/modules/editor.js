// https://github.com/davezuko/react-redux-starter-kit/blob/master/src/routes/Counter/modules/counter.js
import update from 'immutability-helper';
import * as slide from './slide';

// ------------------------------------
// Constants
// ------------------------------------
export const INIT_SHOW_DATA = 'EDITOR.INIT_SHOW_DATA';
export const SET_SIZE_UNIT = 'EDITOR.SET_SIZE_UNIT';
export const SET_POSITION_UNIT = 'EDITOR.SET_POSITION_UNIT';

// ------------------------------------
// Actions
// ------------------------------------
export const initShowData = (showId) => ({type: INIT_SHOW_DATA, showId});
export const setSizeUnit = (unit) => ({type: SET_SIZE_UNIT, unit});
export const setPositionUnit = (unit) => ({type: SET_POSITION_UNIT, unit});

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [INIT_SHOW_DATA]: (state, action) => ({...action.data, showId: action.showId}),
    [SET_SIZE_UNIT]: (state, action) => update(state, {sizeUnit: {$set: action.unit}}),
    [SET_POSITION_UNIT]: (state, action) => action.id(state, {positionUnit: {$set: action.unit}}),
    ...slide.ACTION_HANDLERS
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    sizeUnit: 'px',
    positionUnit: 'px',
    selectedSlideId: 0,
    slideIdx: 0,
    cachedAsset: undefined,
    slides: [...slide.initialState]
};
export default editorReducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state
}