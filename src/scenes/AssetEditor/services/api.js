export const upload = (data, scallback) => {
  let result = {'result' : false};
  axios.put('/update', data)
  .then(function (response) {
    result['result'] = true;
    callback(result);
  })
  .catch(function (error) {
    callback(result);
  });
}
