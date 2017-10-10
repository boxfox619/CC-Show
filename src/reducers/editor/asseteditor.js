import { actionTypes } from '../../actions/asseteditor';
import combineReducers from 'redux';

const InitialState = {
  title: ''  ,
  htmlsource : '',
  csssource : '',
  jssource : '',
  image : ''
}

const asseteditor = (state = InitialState, action) => {
    switch(action.type){
        case actionTypes.SET_TITLE:
            return {
                ...state,
                title: action.title
            }

        case actionTypes.SET_HTML:
            return{
                ...state,
                htmlsource : action.htmlsource
            }
        case actionTypes.SET_CSS :
            return{
                ...state,
                csssource : action.csssource
            }
        case actionTypes.SET_JS:
            return{
                ...state,
                jssource : action.jssource
            }

        case actionTypes.SET_PREVIEW:
            return{
                ...state,
                image : action.image
            }

        default :
            return state;
    }
}


export default asseteditor;
