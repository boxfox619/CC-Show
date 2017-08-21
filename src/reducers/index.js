import { combineReducers } from 'redux';
import editor from './editor';
import slideContext from './slideContext';
import account from './account';

const reducers = combineReducers({
  editor, slideContext, account
});

export default reducers;
