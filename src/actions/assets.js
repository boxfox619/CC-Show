export const actionTypes = {
  ASSET_SET_LEFT: "ASSET_SET_LEFT",
  ASSET_SET_TOP: "ASSET_SET_TOP",
  ASSET_SET_WIDTH: "ASSET_SET_WIDTH",
  ASSET_SET_HEIGHT: "ASSET_SET_HEIGHT",
  ASSET_SET_VALUE: "ASSET_SET_VALUE",
  ASSET_SET_X_POSTION: 'ASSET_SET_X_POSTION',
  ASSET_Y_POSTION: 'ASSET_Y_POSTION',
  ASSET_SET_ANGLE: 'ASSET_SET_ANGLE'
  ASSET_SET_BORDER_COLOR: "ASSET_SET_BORDER_COLOR",
  ASSET_SET_BORDER_WIDTH: "ASSET_SET_BORDER_WIDTH",
  ASSET_SET_BACKGROUND_COLOR: "ASSET_SET_BACKGROUND_COLOR",
  ASSET_CREATE: "ASSET_CREATE",
  ASSET_SELECTED: "ASSET_SELECTED",
};

export const createAsset = (assetType, value) => {
  return {
    type: actionTypes.ASSET_CREATE,
    assetType,
    value
  }
};

export const setSelectedAsset = (assetId) => {
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

export function setWidth(value) {
  return {
    type: actionTypes.ASSET_SET_WIDTH,
    value
  }
}

export function setHeight(value) {
  return {
    type: actionTypes.ASSET_SET_HEIGHT,
    value
  }
}

export function setX(value) {
  return {
    type: actionTypes.ASSET_SET_X_POSTION,
    value
  }
}

export function setY(value) {
  return {
    type: actionTypes.ASSET_Y_POSTION,
    value
  }
}

export function setAngle(value) {
  return {
    type: actionTypes.ASSET_SET_ANGLE,
    value
  }
}