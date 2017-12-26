export const actionTypes = {
  ASSET_SET_FILL_COLOR: 'ASSET_SET_FILL_COLOR',
  ASSET_SET_BORDER_COLOR: 'ASSET_SET_EDGE_COLOR',
  ASSET_SET_BORDER_WEIGHT: 'ASSET_SET_EDGE_WEIGHT',
  ASSET_SET_CHANGE_SHAPE: 'ASSET_SET_CHANGE_SHAPE'
};

export function setAssetFillColor(fillColor) {
  return {
    type: actionTypes.ASSET_SET_FILL_COLOR,
    fillColor
  }
}

export function setAssetBorderColor(borderColor) {
  return {
    type: actionTypes.ASSET_SET_BORDER_COLOR,
    borderColor
  }
}

export function setAssetEdgeWeight(weight) {
  weight += 'px';
  return {
    type: actionTypes.ASSET_SET_BORDER_WEIGHT,
    weight
  }
}

export function setAssetChangeShape(shape) {
  return {
    type: actionTypes.ASSET_SET_CHANGE_SHAPE,
    shape
  }
}
