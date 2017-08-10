export const actionTypes = {
  ASSET_SET_LEFT: "ASSET_SET_LEFT",
  ASSET_SET_TOP: "ASSET_SET_TOP",
  ASSET_SET_WIDTH: "ASSET_SET_WIDTH",
  ASSET_SET_HEIGHT: "ASSET_SET_HEIGHT",
  ASSET_SET_VALUE: "ASSET_SET_VALUE",
  ASSET_SET_X_POSTION: 'ASSET_SET_X_POSTION',
  ASSET_SET_Y_POSTION: 'ASSET_Y_POSTION',
  ASSET_SET_BOTH_POSTION: 'ASSET_BOTH_POSTION',
  ASSET_SET_ANGLE: 'ASSET_SET_ANGLE',
  ASSET_SET_BORDER_COLOR: "ASSET_SET_BORDER_COLOR",
  ASSET_SET_BORDER_WIDTH: "ASSET_SET_BORDER_WIDTH",
  ASSET_SET_BACKGROUND_COLOR: "ASSET_SET_BACKGROUND_COLOR",
  ASSET_SET_MULTIPLE_ATTRIBUTE: 'ASSET_SET_MULTIPLE_ATTRIBUTE',
  ASSET_CREATE: "ASSET_CREATE",
  ASSET_SELECTED: "ASSET_SELECTED"
};

export const createAsset = (assetType, value) => {
  return {
    type: actionTypes.ASSET_CREATE,
    assetType,
    value
  }
};

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

export function setAssetWidth(value) {
  return {
    type: actionTypes.ASSET_SET_WIDTH,

    value
  }
}

export function setAssetHeight(value) {
  return {
    type: actionTypes.ASSET_SET_HEIGHT,
    value
  }
}

export function setAssetX(value) {
  return {
    type: actionTypes.ASSET_SET_X_POSTION,
    value
  }
}

export function setAssetY(value) {
  return {
    type: actionTypes.ASSET_SET_Y_POSTION,
    value
  }
}

export const setAssetXY = (x, y) =>{
  return {
    type: actionTypes.ASSET_SET_BOTH_POSTION,
    x,
    y
  }
}

export function setAssetAngle(value) {
  return {
    type: actionTypes.ASSET_SET_ANGLE,
    value
  }
}

export const setAttributes = (attrs) => {
  Object.keys(attrs).map(function(key, index) {
    attrs[key] = {$set: attrs[key]};
  });
   return {
     type: actionTypes.ASSET_SET_MULTIPLE_ATTRIBUTE,
     attrs
   }
}
