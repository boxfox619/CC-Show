import axios from 'axios';

export const load = (callback) => {
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
