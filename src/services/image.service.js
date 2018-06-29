import {setSelectedAssetAttribute} from 'services/editor/asset/asset.actions';
import {toggleProgressDialog} from 'services/ui/ui.actions';
import {loadLocalImage} from "./dom.service";
import axios from 'axios';
import store from '../store';

class ImageService {
  getImage(callback){
    loadLocalImage((e) => {
      store.dispatch(toggleProgressDialog());
      this.uploadImage(e.target.result, callback);
      store.dispatch(toggleProgressDialog());
    })
  }

  uploadImage(data, callback) {
    let result = {'result': false};
    axios.post('/assets/image', {data}).then(response => {
      result['result'] = true;
      result['data'] = response.data;
      callback(result);
    }).catch(e => {
      callback(result);
    });
  }

  setSelectedAssetImage(id, data) {
    store.dispatch(toggleProgressDialog());
    this.uploadImage(data, function (response) {
      if (response.result == true)
        dispatch(setSelectedAssetAttribute('value', response.data));
      store.dispatch(toggleProgressDialog());
    });
  }
}

export default new ImageService();
