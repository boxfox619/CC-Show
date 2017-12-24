import { combineReducers } from 'redux';
import editor from './editor/reducer';
import account from './account/reducer';
import ui from './ui/reducer';

const reducers = combineReducers({
  editor, slideContext, account, ui, asseteditor
});

export default reducers;
