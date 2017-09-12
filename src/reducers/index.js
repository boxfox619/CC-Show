import { combineReducers } from 'redux';
import editor from './editor';
import slideContext from './slideContext';
import account from './account';
import ui from './ui';
import slideshow from './slideshow';

const reducers = combineReducers({
  editor, slideContext, account, ui, slideshow
});

export default reducers;
