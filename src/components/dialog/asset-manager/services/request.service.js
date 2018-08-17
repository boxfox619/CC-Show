import axios from 'axios';

export const load = (filter, callback) => {
  let result = {'result' : true};
  axios.get('/store/assets?filter='+filter).then(response => {
    result['data'] = [{id: 'asd', title:'asdas', content: 'asdasdasdadads'}];
    callback(result);
  }).catch(e =>{
    result['result'] = false;
    callback(result);
  });
};

export const deleteAsset = (assetID, callback) => {
  let result = {'result' : true};
  axios.delete('/store/?id='+assetID).then(response => {
    callback(result);
  }).catch(e =>{
    result['result'] = false;
    callback(result);
  });
};

export const saveAsset = (data, callback) =>{
    let result = {'result': true};
    axios.put('/store', data).then(response => {
        callback(result);
    }).catch(e => {
        result['result'] = false;
        callback(result);
    });
}

export const createAsset = (callback) => {
  let result = {'result': true};
  axios.post('/store').then(response => {
    result['assetId'] = response.data;
    callback(result);
  }).catch(e => {
    result['result'] = false;
    callback(result);
  });
}
