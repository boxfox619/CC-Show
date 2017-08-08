import { combineReducers } from 'redux';
import assets from './assets';
import slideContext from './slideContext';

const reducers = combineReducers({
  assets, slideContext
});

export default reducers;
