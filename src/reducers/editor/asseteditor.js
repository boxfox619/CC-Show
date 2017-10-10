import { SET_TITLE, SET_HTML, SET_CSS, SET_JS, SET_PREVIEW} from '../../actions/asseteditor';
import combineReducers from 'redux';

const InitialState = {
  title: ''  ,
  htmlsource : '',
  csssource : '',
  jssource : '',  
  image : '',
}

const asseteditor = (state = InitialState, action) => {
    console.log(action);
    switch(action.type){
        case SET_TITLE:
            return {
                ...state,
                title: action.title
            }

        case SET_HTML:
            return{
                ...state,
                htmlsource : action.htmlsource
            }
        case SET_CSS :
            return{
                ...state,
                csssource : action.csssource
            }
        case SET_JS:
            return{
                ...state,
                jssource : action.jssource
            }

        case SET_PREVIEW:
            return{
                ...state,
                image : action.image
            }

        default : 
            return state;
    }
}


export default asseteditor;