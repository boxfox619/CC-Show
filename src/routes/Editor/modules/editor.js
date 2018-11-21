// https://github.com/davezuko/react-redux-starter-kit/blob/master/src/routes/Counter/modules/counter.js
import update from 'immutability-helper';
import * as slide from './slide';

// ------------------------------------
// Constants
// ------------------------------------
export const INIT_SHOW_DATA = 'EDITOR.INIT_SHOW_DATA';
export const SET_SIZE_UNIT = 'EDITOR.SET_SIZE_UNIT';
export const SET_POSITION_UNIT = 'EDITOR.SET_POSITION_UNIT';
export const SELECT_SLIDE = 'EDITOR.SELECT_SLIDE';
export const CREATE_NEW_SLIDE = 'EDITOR.CREATE_NEW_SLIDE';
export const DELETE_SLIDE = 'Editor.DELETE_SLIDE';
export const COPY_SLIDE = 'EDITOR.COPY_SLIDE';

// ------------------------------------
// Actions
// ------------------------------------
export const initShowData = (showId) => ({type: INIT_SHOW_DATA, showId});
export const setSizeUnit = (unit) => ({type: SET_SIZE_UNIT, unit});
export const setPositionUnit = (unit) => ({type: SET_POSITION_UNIT, unit});
export const selectSlide = (id) => ({type: SELECT_SLIDE, id});
export const createSlide = () => ({type: CREATE_NEW_SLIDE});
export const deleteSlide = (id) => ({type: DELETE_SLIDE, id});
export const copySlide = (id) => ({type: COPY_SLIDE, id});

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [INIT_SHOW_DATA]: (state, action) => ({...action.data, showId: action.showId}),
    [SET_SIZE_UNIT]: (state, action) => update(state, {sizeUnit: {$set: action.unit}}),
    [SET_POSITION_UNIT]: (state, action) => action.id(state, {positionUnit: {$set: action.unit}}),
    [SELECT_SLIDE]: (state, action) => update(state, {selectedSlide: {$set: action.id}}),
    [CREATE_NEW_SLIDE]: (state) => update(state, {slideIdx: {$set: state.slideIdx+1}, slides: {$push: [slide.initialState]}}),
    [DELETE_SLIDE]: (state, action) => update(state,{slides: {$splice: [state.slides.findIndex(s => s.id !== action.id), 1]}}),
    [COPY_SLIDE]: (state, action) => update(state, {slides: {$push : [...state.slides.filter(s => s.id !== action.id)]}}),
    ...slide.ACTION_HANDLERS
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    sizeUnit: 'px',
    positionUnit: 'px',
    selectedSlide: 0,
    slideIdx: 0,
    cachedAsset: undefined,
    slides: [...slide.initialState]
};
export default editorReducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state
}