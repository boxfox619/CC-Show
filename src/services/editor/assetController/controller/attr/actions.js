import * as assetTypes from '../assetTypes';
export const actionTypes = {
  ASSET_SET_WIDTH: "ASSET_SET_WIDTH",
  ASSET_SET_HEIGHT: "ASSET_SET_HEIGHT",
  ASSET_SET_VALUE: "ASSET_SET_VALUE",
  ASSET_SET_X_POSTION: 'ASSET_SET_X_POSTION',
  ASSET_SET_Y_POSTION: 'ASSET_SET_Y_POSTION',
  ASSET_SET_BOTH_POSITION: 'ASSET_SET_BOTH_POSITION',
  ASSET_SET_ANGLE: 'ASSET_SET_ANGLE'
};

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

export const setAssetXY = (x, y) => {
  return {
    type: actionTypes.ASSET_SET_BOTH_POSITION,
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
