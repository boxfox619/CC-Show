import {toggleProgressDialog} from "../ui/actions";
import {actionTypes, updateSlideThumbnail} from './slide/actions';
import {updateAccountData} from '../account/actions';
import domtoimage from "dom-to-image";
import axios from "axios/index";
import {dispatch} from "../../store";

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
        let node = document.getElementsByTagName('scanvas')[0];
        let currentSilde = this.props.currentSilde;
        domtoimage.toPng(node, {filter: filter}).then(function (dataUrl) {
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
    })
        .catch(e =>{
            callback(result);
        });
}

export const loadShowData = () => {
    this.props.toggleProgressDialog();
    load(function (response) {
        if (response.result == true) {
            dispatch(updateAccountData(response.data.account.email, response.data.account.nickname, response.data.account.profile));
            dispatch(initShowData(response.showId, response.data.showData));
        }
        this.props.toggleProgressDialog();
    }.bind(this));
}

let timeoutId = undefined;
export const saveShowDataAfterTimeout = (showId) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
        saveShowData(showId);
    }, 1000);
}