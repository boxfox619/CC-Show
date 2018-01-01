export const load = (filter, callback) => {
  let result = {'result' : true};
  axios.get('/store/assets?filter='+filter).then(response => {
    result['data'] = response.data;
    callback(result);
  }).catch(e =>{
    result['result'] = false;
    callback(result);
  });
}

export const delete = (assetID, callback) => {
  let result = {'result' : true};
  axios.delete('/store/?id='+assetID).then(response => {
    callback(result);
  }).catch(e =>{
    result['result'] = false;
    callback(result);
  });
}
