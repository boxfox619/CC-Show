import axios from 'axios';

export const createShow = (name, callback) =>{
  let result = {result: false};
  axios.post('/show/create', {name})
    .then(response => {
      result['result'] = true;
      callback(result);
    }).catch(err => {
      callback(result);
    });
}

export const loadShowList = (callback) =>{
  let result = {result: false};
  axios.get('/show/list')
    .then(response => {
      result['result'] = true;
      result['data'] = response.data;
      callback(result);
    }).catch(err => {
      callback(result);
    });
}

export const deleteShow = (id, callback) =>{
  axios.post('/show/delete', {id})
    .then(response => {
      callback(true);
    }).catch(err => {
      callback(false);
    });
}
