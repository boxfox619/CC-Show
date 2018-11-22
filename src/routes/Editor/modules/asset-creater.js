import * as assetTypes from "constants/assetTypes";

const defaultAsset = {
    id: '',
    type: '',
    value: '',
    height: '50px',
    width: '50px',
    x: '0px',
    y: '0px',
    angle: '0',
    style: {}
};

const createClearAsset = (state, action) => {
    return {
        ...defaultAsset,
        id: state.assetIdx + 1,
        type: action.assetType,
        value: action.value,
        height: '50' + state.sizeUnit,
        width: '50' + state.sizeUnit,
        x: '0' + state.positionUnit,
        y: '0' + state.positionUnit,
        style: {
            'background-color': 'white',
            'border-color': 'white',
            'border-style': 'solid',
            'border-width': '0px'
        }
    }
};

export const createAsset = (state, action) => {
    let asset = createClearAsset(state, action);
    state.assetId = state.assetId + 1; //@TODO check this code is working
    if (action.assetType === assetTypes.TYPE_TEXT) {
        asset.style = {
            ...asset.style,
            'font-family': '굴림',
            'font-size': '12px',
            'text-align': 'justify',
            'font-weight': 'normal',
            'font-style': 'normal',
            'text-decoration': 'none',
            'color': 'black',
            'letter-spacing': '0px',
            'line-height': 'normal'
        };
    } else if (action.assetType === assetTypes.TYPE_VIDEO) {
        asset.preview = false;
        asset.videoController = false;
        asset.videoLoop = false;
        asset.videoAutoplay = false;
    } else if (action.assetType === assetTypes.TYPE_SHAPE) {
        asset.style = {
            ...asset.style,
            'border-color': '#5a84b3',
            'background-color': '#5a84b3',
            'border-width': '0px'
        };
    }
    return asset;
};