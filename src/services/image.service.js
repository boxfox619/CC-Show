import {setSelectedAssetAttribute} from 'services/editor/asset/actions';
import {toggleProgressDialog} from 'services/ui/actions';
import axios from 'axios';
import store from '../store';

class ImageService {
  getImage(callback){
    this.loadLocalImage((e) => {
      store.dispatch(toggleProgressDialog());
      this.uploadImage(e.target.result, callback);
      store.dispatch(toggleProgressDialog());
    })
  }

  loadLocalImage(callback) {
    var fr = new FileReader();
    fr.onload = callback;
    var inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.addEventListener('change', function () {
      fr.readAsDataURL(inputElement.files[0]);
    });
    inputElement.dispatchEvent(new MouseEvent('click'));
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
    uploadImage(data, function (response) {
      if (response.result == true)
        dispatch(setSelectedAssetAttribute('value', response.data));
      store.dispatch(toggleProgressDialog());
    });
  }
}

export default new ImageService();
