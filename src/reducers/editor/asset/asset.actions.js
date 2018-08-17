import * as assetTypes from 'constants/assetTypes';
import * as types from 'constants/actionTypes';

export const createAsset = (assetType, value, style = {}) => {
    return {
        type: types.ASSET_CREATE,
        assetType,
        value,
        style
    }
};

export const setSelectedAssetAttribute = (attrName, attr) => {
    return {
        type: types.ASSET_SET_ATTRIBUTE,
        attrName,
        attr
    }
}

export const setSelectedAssetStyle = (styleName, style) => {
    return {
        type: types.ASSET_SET_STYLE,
        styleName,
        style
    }
}

export const setSelectedAssetAttributes = (attrs) => {
    Object.keys(attrs).map(function (key, index) {
        attrs[key] = {
            $set: attrs[key]
        };
    });
    return {
        type: types.ASSET_SET_MULTIPLE_ATTRIBUTE,
        attrs
    }
}



export const createCustomAsset = (assetId) => {
    return {
        type: types.ASSET_CREATE,
        assettype: types.assetTypes.TYPE_CUSTOM,
        value: assetId
    }
}

export const createAssetByType = (type) => {
    switch (type) {
        case assetTypes.TYPE_TEXT:
            return createAsset(type, '텍스트를 입력해 주세요', {
                'font-size': '12px'
            });
        case assetTypes.TYPE_IMAGE:
            return createAsset(type, '/images/AppIcon.png');
        case assetTypes.TYPE_VIDEO:
            return createAsset(type, 'https://www.youtube.com/watch?v=VQtonf1fv_s');
        case assetTypes.TYPE_SHAPE:
            return createAsset(type, 'square');
        case assetTypes.TYPE_TABLE:
            return createAsset(type, [['a', 'a'], ['a', 'a']]);
        default:
            return createAsset(type, 'asdasd');
    }
}

export const assetSelected = (assetId) => {
    return {
        type: types.ASSET_SELECTED,
        assetId
    }
};

export function pasteAsset(x, y) {
    return {
        type: types.ASSET_PASTE,
        x,
        y
    }
}

export function sortFirstAsset(id) {
    return {
        type: types.ASSET_SORT,
        id,
        to: 'min'
    }
}

export function sortLastAsset(id) {
    return {
        type: types.ASSET_SORT,
        id,
        to: 'max'
    }
}

export function sortBackAsset(id) {
    return {
        type: types.ASSET_SORT,
        id,
        to: 'front'
    }
}

export function sortFrontAsset(id) {
    return {
        type: types.ASSET_SORT,
        target: id,
        to: 'back'
    }
}

export function copyAsset(id) {
    return {
        type: types.ASSET_COPY,
        id
    }
}

export function cutAsset(id) {
    return (dispatch) => {
        dispatch(copyAsset(id));
        dispatch(deleteAsset(id));
    }
}

export function deleteAsset(id) {
    return {
        type: types.ASSET_DELETE,
        id
    }
}
