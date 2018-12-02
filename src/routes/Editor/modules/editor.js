// https://github.com/davezuko/react-redux-starter-kit/blob/master/src/routes/Counter/modules/counter.js
import {mapToImmutable} from '../../../core/store/reducers';
import {update} from 'immutability-helper';
import sagas from './sagas';
import * as slide from './slide';
import * as asset from './asset';

// ------------------------------------
// Constants
// ------------------------------------
export const INIT_SHOW_DATA = 'EDITOR.INIT_SHOW_DATA';
export const SET_SIZE_UNIT = 'EDITOR.SET_SIZE_UNIT';
export const SET_POSITION_UNIT = 'EDITOR.SET_POSITION_UNIT';
export const SAVE_SHOW_DATA = 'EDITOR.SAVE_SHOW_DATA';
export const TOGGLE_PROGRESS_DIALOG = 'EDITOR.TOGGLE_PROGRESS_DIALOG';
// ------------------------------------
// Actions
// ------------------------------------
export const initShowData = (showId) => ({type: INIT_SHOW_DATA, showId});
export const setSizeUnit = (unit) => ({type: SET_SIZE_UNIT, unit});
export const setPositionUnit = (unit) => ({type: SET_POSITION_UNIT, unit});
export const saveShowData = (canvas, showData) => ({type: SAVE_SHOW_DATA, canvas, showData});
export const toggleProgressDialog = (status) => ({type: TOGGLE_PROGRESS_DIALOG, status});


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [INIT_SHOW_DATA]: (state, action) => ({...mapToImmutable(action.data), showId: action.showId}),
    [SET_SIZE_UNIT]: (state, action) => ({sizeUnit: {$set: action.unit}}),
    [SET_POSITION_UNIT]: (state, action) => ({positionUnit: {$set: action.unit}}),
    [TOGGLE_PROGRESS_DIALOG]: (state, action) => ({progressDialog: {$set: action.status}}),
    ...slide.ACTION_HANDLERS,
    ...asset.ACTION_HANDLERS
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    showId: undefined,
    progressDialog: false,
    sizeUnit: 'px',
    positionUnit: 'px',
    selectedSlideId: 0,
    slideIdx: 0,
    assetIdx: 0,
    cachedAsset: undefined,
    slides: [...slide.initialState]
};

export default {
    reducer: (state = initialState, action) => {
        const handler = ACTION_HANDLERS[action.type];
        return handler ? update(handler(state, action)) : state
    },
    sagas
}