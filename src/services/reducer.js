import { combineReducers } from 'redux';
import editor from './editor/reducer';
import account from './account/reducer';
import ui from './ui/reducer';

const reducers = combineReducers({
  editor, account, ui
});

export default reducers;
