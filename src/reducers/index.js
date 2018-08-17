import { combineReducers } from 'redux';
import editor from './editor/editor.reducer';
import account from './account/account.reducer';
import ui from './ui/ui.reducer';

const reducers = combineReducers({
  editor, account, ui
});

export default reducers;
