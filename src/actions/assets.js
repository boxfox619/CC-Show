export const actionTypes = {
  ASSET_SET_LEFT : "ASSET_SET_LEFT",
  ASSET_SET_TOP : "ASSET_SET_TOP",
  ASSET_SET_WIDTH : "ASSET_SET_WIDTH",
  ASSET_SET_HEIGHT : "ASSET_SET_HEIGHT",
  ASSET_SET_VALUE : "ASSET_SET_VALUE",
  ASSET_SET_BORDER_COLOR : "ASSET_SET_BORDER_COLOR",
  ASSET_SET_BORDER_WIDTH : "ASSET_SET_BORDER_WIDTH",
  ASSET_SET_BACKGROUND_COLOR : "ASSET_SET_BACKGROUND_COLOR",
  ASSET_CREATE : "ASSET_CREATE",
  ASSET_SELECTED : "ASSET_SELECTED"
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

export const assetDeselected = () =>{
  return {
    type: actionTypes.ASSET_SELECTED,
    assetId: undefined
  }
}
