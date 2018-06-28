import {toggleProgressDialog} from "services/ui/actions";
import {actionTypes, updateSlideThumbnail} from './slide/actions';
import {updateAccountData} from '../account/actions';
import {getScanvas} from "../dom.service";
import domtoimage from "dom-to-image";
import axios from "axios/index";

export * from './slide/actions';
export * from './asset/actions';
export const INIT_SHOW_DATA = 'INIT_SHOW_DATA';

const uploadShowData = (showId, showData, callback) => {
    let result = {'result': false};
    axios.post('/show/data', {showId, showData}).then(response => {
        result['result'] = true;
        callback(result);
    }).catch(e => {
        callback(result);
    });
}

export const saveShowData = (showId) => {
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
                uploadShowData(showId, getState().editor, function (response) {
                    dispatch(toggleProgressDialog());
                });
            }
        }).catch(function (error) {
            console.error(error);
        });

    };
};

export const initShowData = (showId, data) => {
    return {
        type: INIT_SHOW_DATA,
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

export const loadShowData = () => {
    return (dispatch, getState) => {
        dispatch(toggleProgressDialog());
        load(function (response) {
            if (response.result == true) {
                dispatch(updateAccountData(response.data.account.email, response.data.account.nickname, response.data.account.profile));
                dispatch(initShowData(response.showId, response.data.showData));
            }
            dispatch(toggleProgressDialog());
        });
    }
}

let timeoutId = undefined;
export const saveShowDataAfterTimeout = (showId) => {
    return (dispatch, getState) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            dispatch(saveShowData(showId));
        }, 1000);
    }
}