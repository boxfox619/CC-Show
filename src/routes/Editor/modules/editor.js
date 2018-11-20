// https://github.com/davezuko/react-redux-starter-kit/blob/master/src/routes/Counter/modules/counter.js
import * as slide from './slide';
import {SELECT_SLIDE} from "./slide";

export const INIT_SHOW_DATA = 'EDITOR.INIT_SHOW_DATA';
export const SET_SIZE_UNIT = 'EDITOR.SET_SIZE_UNIT';
export const SET_POSITION_UNIT = 'EDITOR.SET_POSITION_UNIT';
export const SELECT_SLIDE = 'EDITOR.SELECT_SLIDE';
export const CREATE_NEW_SLIDE = 'EDITOR.CREATE_NEW_SLIDE';

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [INIT_SHOW_DATA]: (state, action) => {},
    [SET_SIZE_UNIT]: (state, action) => {},
    [SET_POSITION_UNIT]: (state, action) => {},
    [SELECT_SLIDE]: (state, action) => {},
    [CREATE_NEW_SLIDE]: (state, action) => {},
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