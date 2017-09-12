import { actionTypes} from '../actions/slideshow';
import update from 'react-addons-update';

const initialState = {
    visibleSlideShow: false
}

const slideshow =  (state= initialState, action) => {
    switch(action.type) {
        case actionTypes.SLIDE_SHOW:
            return {
                ...state,
                visibleSlideShow: !state.visibleSlideShow
            }
        default:
            return state;
    }
}

export default slideshow;