import { combineReducers } from 'redux';
import editor from './editor';
import slideContext from './slideContext';
import account from './account';
import ui from './ui';

const reducers = combineReducers({
  editor, slideContext, account, ui
});

export default reducers;
