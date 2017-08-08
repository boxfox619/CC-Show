import { combineReducers } from 'redux';
import assets from './assets';
import slideContext from './slideContext';
import assetAttribute from './assetAttribute';

const reducers = combineReducers({
  assets, slideContext, assetAttribute
});

export default reducers;
