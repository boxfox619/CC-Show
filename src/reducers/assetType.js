import {} from '../actions/assetController';

const initialState = {
    assetType: TEXT,
    attribute: []
}

const assetType = (state = initialState, actions) => {
    let width = getState().assetAttribute.width;
    let height = getState().assetAttribute.height;
    let x = getState().assetAttribute.x;
    let y = getState().assetAttribute.y;
    let angle = getState().assetAttribute.angle;
    switch (action.type) {
        case TEXT:
            return {
                ...state,
                assetType: TEXT,
                attribute: [...attribute, {
                    ...state,
                    width: width,
                    height: height,
                    x: x,
                    y: y,
                    angle: angle
                }]
            }
        case VIDEO:
            return {
                ...state,
                assetType: TEXT,
                attribute: [...attribute, {
                    ...state,
                    width: width,
                    height: height,
                    x: x,
                    y: y,
                    angle: angle
                }]
            }
        case SHAPE:
            return {
                ...state,
                assetType: TEXT,
                attribute: [...attribute, {
                    ...state,
                    width: width,
                    height: height,
                    x: x,
                    y: y,
                    angle: angle
                }]
            }
        default:
            return state;
    }
}

export default assetController;