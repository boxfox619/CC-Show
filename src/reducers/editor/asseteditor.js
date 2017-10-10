import { SET_TITLE } from '../../actions/asseteditor';
import combineReducers from 'redux';

const InitialState = {
  title: ' '
}

const asseteditor = (state = InitialState, action) => {
    switch(action.type){
        case SET_TITLE:
            return {
                ...state,
                title: action.title
            }
        default :
            return state;
    }
}

export default asseteditor;
