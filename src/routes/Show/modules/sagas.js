import {LOAD_SHOW_DATA, SET_SHOW_DATA} from './show';
import {call, put, fork, take, all} from 'redux-saga/effects';
import axios from 'axios';

export function* loadShowData() {
    try {
        const url = new URL(window.location.href);
        const showId = url.searchParams.get('show');
        if(showId != null){
            const response = yield axios.post('/show/play/', {showId});
            yield put({type: SET_SHOW_DATA, data: response.data});
        }
    } catch (e) {
        console.log(e);
    }
    yield done
}

//debounce save delay
export function* watchLoadShow() {
    let task;
    while (true) {
        yield take(LOAD_SHOW_DATA);
        if (task) {
            yield cancel(task);
        }
        task = yield fork(loadShowData)
    }
}

export default [
    watchLoadShow()
]