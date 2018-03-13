import * as assetTypes from './assetTypes';

export const actionTypes = {
    ASSET_SET_MULTIPLE_ATTRIBUTE: 'ASSET_SET_MULTIPLE_ATTRIBUTE',
    ASSET_SET_STYLE: 'ASSET_SET_STYLE',
    ASSET_CREATE: "ASSET_CREATE",
    ASSET_SELECTED: "ASSET_SELECTED",
    ASSET_COPY: 'ASSET_COPY',
    ASSET_SORT: 'ASSET_SORT',
    ASSET_DELETE: 'ASSET_DELETE',
    ASSET_SET_VALUE: "ASSET_SET_VALUE",
    ASSET_SET_ATTRIBUTE: "ASSET_SET_ATTRIBUTE"
};

export const createAsset = (assetType, value, style = {}) => {
    return {
        type: actionTypes.ASSET_CREATE,
        assetType,
        value,
        style
    }
};

export const setSelectedAssetAttribute = (attrName, attr) => {
    return {
        type: actionTypes.ASSET_SET_ATTRIBUTE,
        attrName,
        attr
    }
}

export const setSelectedAssetStyle = (styleName, style) => {
    return {
        type: actionTypes.ASSET_SET_ATTRIBUTE,
        styleName,
        style
    }
}

export const setAssetValue = (id, value) => {
    return {
        type: actionTypes.ASSET_SET_VALUE,
        id,
        value
    }
}

export const createCustomAsset = (assetId) => {
    return {
        type: actionTypes.ASSET_CREATE,
        assetType: assetTypes.TYPE_CUSTOM,
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
        type: actionTypes.ASSET_SELECTED,
        assetId
    }
};

export const assetDeselected = () => {
    return {
        type: actionTypes.ASSET_SELECTED,
        assetId: undefined
    }
}

export function copyAsset(id, slide, x, y) {
    return {
        type: actionTypes.ASSET_COPY,
        id,
        slide,
        x,
        y
    }
}

export function sortFirstAsset(id) {
    return {
        type: actionTypes.ASSET_SORT,
        id,
        to: 'min'
    }
}

export function sortLastAsset(id) {
    return {
        type: actionTypes.ASSET_SORT,
        id,
        to: 'max'
    }
}

export function sortBackAsset(id) {
    return {
        type: actionTypes.ASSET_SORT,
        id,
        to: 'front'
    }
}

export function sortFrontAsset(id) {
    return {
        type: actionTypes.ASSET_SORT,
        target: id,
        to: 'back'
    }
}

export function deleteAsset(id) {
    return {
        type: actionTypes.ASSET_DELETE,
        id
    }
}

export const setAttributes = (attrs) => {
    Object.keys(attrs).map(function (key, index) {
        attrs[key] = {
            $set: attrs[key]
        };
    });
    return {
        type: actionTypes.ASSET_SET_MULTIPLE_ATTRIBUTE,
        attrs
    }
}

export function setAssetStyle(style) {
    return {
        type: actionTypes.ASSET_SET_STYLE,
        style
    }
}
