import sagas from './sagas';
import {update} from 'immutability-helper';

export const LOAD_SHOW_LIST = 'SHOW.LOAD_SHOW_LIST';
export const SET_SHOW_LIST = 'SHOW.SET_SHOW_LIST';

export const loadShowList = () => ({type: LOAD_SHOW_LIST});
//@TODO Implement show modify functions
//@TODO Rename Show routes already exists to Play

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [SET_SHOW_LIST]: (state, action) => ({showList: {$set: action.showList}})
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    showList: []
};

export default {
    reducer: (state = initialState, action) => {
        const handler = ACTION_HANDLERS[action.type];
        return handler ? update(handler(state, action)) : state
    },
    sagas
}