import {setSelectedAssetAttribute} from '../actions';
import {toggleProgressDialog} from "services/ui/actions";
import axios from 'axios';

const uploadImage = (data, callback) => {
    let result = {'result': false};
    axios.post('/assets/image', {data}).then(response => {
        result['result'] = true;
        result['data'] = data;
        callback(result);
    }).catch(e => {
        callback(result);
    });
};

export const setSelectedAssetImage = (id, data) => {
    return (dispatch, getState) => {
        dispatch(toggleProgressDialog());
        uploadImage(data, function (response) {
            if (response.result == true)
                dispatch(setSelectedAssetAttribute('value', response.data));
            dispatch(toggleProgressDialog());
        });
    };
};