export const actionTypes = {
  ASSET_SET_LEFT: "ASSET_SET_LEFT",
  ASSET_SET_TOP: "ASSET_SET_TOP",
  ASSET_SET_WIDTH: "ASSET_SET_WIDTH",
  ASSET_SET_HEIGHT: "ASSET_SET_HEIGHT",
  ASSET_SET_VALUE: "ASSET_SET_VALUE",
  ASSET_SET_BORDER_COLOR: "ASSET_SET_BORDER_COLOR",
  ASSET_SET_BORDER_WIDTH: "ASSET_SET_BORDER_WIDTH",
  ASSET_SET_BACKGROUND_COLOR: "ASSET_SET_BACKGROUND_COLOR",
  ASSET_CREATE: "ASSET_CREATE",
  ASSET_SELECTED: "ASSET_SELECTED",
  MODIFY_WIDTH: 'MODIFY_WIDTH',
  MODIFY_HEIGHT: 'MODIFY_HEIGHT',
  MODIFY_X: 'MODIFY_X',
  MODIFY_Y: 'MODIFY_Y',
  MODIFY_ANGLE: 'MODIFY_ANGLE'
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

export function modifyWidth() {
  return {
    type: actionTypes.MODIFY_WIDTH,
    value
  }
}

export function modifyHeight() {
  return {
    type: actionTypes.MODIFY_HEIGHT,
    value
  }
}

export function modifyX() {
  return {
    type: actionTypes.MODIFY_X,
    value
  }
}

export function modifyY() {
  return {
    type: actionTypes.MODIFY_Y,
    value
  }
}

export function modifyAngle() {
  return {
    type: actionTypes.MODIFY_ANGLE,
    value
  }
}