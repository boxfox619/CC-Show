export const actionTypes = {
  ASSET_SET_LEFT: "ASSET_SET_LEFT",
  ASSET_SET_TOP: "ASSET_SET_TOP",
  ASSET_SET_WIDTH: "ASSET_SET_WIDTH",
  ASSET_SET_HEIGHT: "ASSET_SET_HEIGHT",
  ASSET_SET_VALUE: "ASSET_SET_VALUE",
  ASSET_SET_X_POSTION: 'ASSET_SET_X_POSTION',
  ASSET_SET_Y_POSTION: 'ASSET_SET_Y_POSTION',
  ASSET_SET_BOTH_POSITION: 'ASSET_SET_BOTH_POSITION',
  ASSET_SET_ANGLE: 'ASSET_SET_ANGLE',
  ASSET_SET_FONT: 'ASSET_SET_FONT',
  ASSET_SET_FONT_SIZE: 'ASSET_SET_FONT_SIZE',
  ASSET_SET_TEXT_SORT: 'ASSET_SET_TEXT_SORT',
  ASSET_SET_FONT_BOLD: 'ASSET_SET_FONT_BOLD',
  ASSET_SET_FONT_UNDERLINE: 'ASSET_SET_FONT_UNDERLINE',
  ASSET_SET_FONT_ITALIC: 'ASSET_SET_FONT_ITALIC',
  ASSET_SET_TEXT_FILL_COLOR: 'ASSET_SET_TEXT_FILL_COLOR',
  ASSET_SET_TEXT_EDGE: 'ASSET_SET_TEXT_EDGE',
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

export function setAssetFont(font) {
  return{
    type: actionTypes.ASSET_SET_FONT,
    font
  }
}

export function setAssetFontSize(fontSize) {
  return{
    type: actionTypes.ASSET_SET_FONT_SIZE,
    fontSize
  }
}

export function setAssetTextSort(sort) {
  return{
    type: actionTypes.ASSET_SET_TEXT_SORT,
    sort
  }
}

export function setAssetFontBold(bold) {
  return{
    type: actionTypes.ASSET_SET_FONT_BOLD,
    bold
  }
}

export function setAssetFontUnderline(underline) {
  return{
    type: actionTypes.ASSET_SET_FONT_UNDERLINE,
    underline
  }
}

export function setAssetFontItalic(italic) {
  return{
    type: actionTypes.ASSET_SET_FONT_ITALIC,
    italic
  }
}

export function setAssetTextFillColor(color) {
  return{
    type: actionTypes.ASSET_SET_TEXT_FILL_COLOR,
    color
  }
}

export function setAssetTextEdge(color, weight) {
  return{
    type: actionTypes.ASSET_SET_TEXT_EDGE,
    color,
    weight
  }
}