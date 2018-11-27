import {delay} from 'redux-saga'
import {call, put, fork, take, all} from 'redux-saga/effects'
import axios from 'axios';
import {SAVE_SHOW_DATA, TOGGLE_PROGRESS_DIALOG} from './editor';
import {SET_SLIDE_THUMBNAIL} from "./slide";

const selectorFilter = (node) => {
    return (node.tagName !== 'SELECTORLINE' && node.tagName !== 'SELECTORDOT')
};

export function* saveShowAfterTimeout(canvas, showData) {
    yield call(delay, 1000);
    try {
        yield put({type: TOGGLE_PROGRESS_DIALOG});
        let {dataUrl} = yield domtoimage.toPng(canvas, {filter: selectorFilter});
        yield put({type: SET_SLIDE_THUMBNAIL, thumbnail: dataUrl});
        let response = yield axios.post('/show/data', showData);
    } catch (e) {
        console.log(e);
    } finally {
        yield put({type: TOGGLE_PROGRESS_DIALOG, state: false});
    }
    yield done
}

//debounce save delay
export function* watchSaveAsync() {
    let task;
    while (true) {
        let {canvas, showData} = yield take(SAVE_SHOW_DATA);
        if (task) {
            yield cancel(task)
        }
        task = yield fork(saveShowAfterTimeout, canvas, showData)
    }
}

export default [
    watchSaveAsync()
]