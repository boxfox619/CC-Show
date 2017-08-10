import { combineReducers } from 'redux';
import editor from './editor';
import slideContext from './slideContext';

const reducers = combineReducers({
  editor, slideContext
});

export default reducers;
