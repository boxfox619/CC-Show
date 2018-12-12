import {LOAD_SHOW_LIST, SET_SHOW_LIST} from './show';
import {put, fork, take} from 'redux-saga/effects';
import axios from 'axios';

export function* loadShowList() {
    try {
        const response = yield axios.post('/show/list/');
        yield put({type: SET_SHOW_LIST, data: response.showList});
    } catch (e) {
        console.log(e);
    }
}

export function* watchLoadShowList() {
    let task;
    while (true) {
        yield take(LOAD_SHOW_LIST);
        if (task) {
            yield cancel(task);
        }
        task = yield fork(loadShowList)
    }
}

export default [
    watchLoadShowList()
]