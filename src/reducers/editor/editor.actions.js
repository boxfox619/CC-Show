import {toggleProgressDialog} from "reducers/ui/ui.actions";
import {actionTypes, updateSlideThumbnail} from './slide/slide.actions';
import {updateAccountData} from '../account/account.actions';
import {getScanvas} from "../../services/dom.service";
import domtoimage from "dom-to-image";
import axios from "axios/index";

export * from './slide/slide.actions';
export * from './asset/asset.actions';
import * as types from 'constants/actionTypes';

const uploadShow = (showId, showData, callback) => {
    let result = {'result': false};
    axios.post('/show/data', {showId, showData}).then(response => {
        result['result'] = true;
        callback(result);
    }).catch(e => {
        callback(result);
    });
}

export const saveShow = (showId) => {
    return (dispatch, getState) => {
        let filter = (node) => {
            return (node.tagName !== 'SELECTORLINE' && node.tagName !== 'SELECTORDOT')
        };
        let canvas = getScanvas();
        let currentSilde = getState().editor.selectedSlide;
        domtoimage.toPng(canvas, {filter: filter}).then(function (dataUrl) {
            dispatch(updateSlideThumbnail(currentSilde, dataUrl));
            if (showId != undefined) {
                dispatch(toggleProgressDialog());
                uploadShow(showId, getState().editor, function (response) {
                    dispatch(toggleProgressDialog());
                });
            }
        }).catch(function (error) {
            console.error(error);
        });

    };
};

export const initShow = (showId, data) => {
    return {
        type: types.INIT_SHOW_DATA,
        showId,
        data
    }
}

const load = (callback) => {
    var url = new URL(window.location.href);
    var showId = url.searchParams.get("show");
    let result = {'result' : false};
    axios.get('/show/data?id='+showId).then(response => {
        result['result'] = true;
        result['data'] = response.data;
        result['showId'] = showId;
        callback(result);
    }).catch(e => {
        callback(result);
    });
}

export const loadShow = () => {
    return (dispatch, getState) => {
        dispatch(toggleProgressDialog());
        load(function (response) {
            if (response.result == true) {
                dispatch(updateAccountData(response.data.account.email, response.data.account.nickname, response.data.account.profile));
                dispatch(initShow(response.showId, response.data.showData));
            }
            dispatch(toggleProgressDialog());
        });
    }
}

let timeoutId = undefined;
export const saveShowAfterTimeout = (showId) => {
    return (dispatch, getState) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            dispatch(saveShow(showId));
        }, 1000);
    }
}