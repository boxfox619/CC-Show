import sagas from './sagas';
import {update} from 'immutability-helper';

export const LOAD_SHOW_DATA = 'SHOW.LOAD_SHOW_DATA';
export const SET_SHOW_DATA = 'SHOW.SET_SHOW_DATA';

export const loadShowData = () => ({type: LOAD_SHOW_DATA});


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [SET_SHOW_DATA]: (state, action) => ({data: {$set: action.data}})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};


export default {
    reducer: (state = initialState, action) => {
        const handler = ACTION_HANDLERS[action.type];
        return handler ? update(handler(state, action)) : state
    },
    sagas
}