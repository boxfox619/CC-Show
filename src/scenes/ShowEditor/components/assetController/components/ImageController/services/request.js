export const uploadImage = (data, callback) =>{
  let result = {'result' : false};
  axios.post('/assets/image', {data}).then(response => {
    result['result'] = true;
    result['data'] = data;
    callback(result);
  })
  .catch(e =>{
    callback(result);
  });
};
