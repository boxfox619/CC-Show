import { combineReducers } from 'redux';
import editor from './editor/editor';
import slideContext from './editor/slideContext';
import account from './editor/account';
import ui from './editor/ui';
import asseteditor from './editor/asseteditor';

const reducers = combineReducers({
  editor, slideContext, account, ui, asseteditor
});

export default reducers;
