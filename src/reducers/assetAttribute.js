import {
    actionTypes
} from '../actions/assetController';

const initialState = {
    width: '',
    height: '',
    x: '',
    y: '',
    angle: ''
}

const modifyAttribute = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MODIFY_WIDTH:
            return {
                ...state,
                width: action.value
            }
        case actionTypes.MODIFY_HEIGHT:
            return {
                ...state,
                height: action.value
            }
        case actionTypes.MODIFY_X:
            return {
                ...state,
                x: action.value
            }
        case actionTypes.MODIFY_Y:
            return {
                ...state,
                y: action.value
            }
        case actionTypes.MODIFY_ANGLE:
            return {
                ...state,
                angle: action.value
            }
        default:
            return state;
    }
}