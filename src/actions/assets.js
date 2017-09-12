import * as assetTypes from '../assetTypes';
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
  ASSET_SET_TEXT_FONT: 'ASSET_SET_TEXT_FONT',
  ASSET_SET_TEXT_FONT_SIZE: 'ASSET_SET_TEXT_FONT_SIZE',
  ASSET_SET_TEXT_SORT: 'ASSET_SET_TEXT_SORT',
  ASSET_SET_TEXT_FONT_BOLD: 'ASSET_SET_TEXT_FONT_BOLD',
  ASSET_SET_TEXT_FONT_UNDERLINE: 'ASSET_SET_TEXT_FONT_UNDERLINE',
  ASSET_SET_TEXT_FONT_ITALIC: 'ASSET_SET_TEXT_FONT_ITALIC',
  ASSET_SET_TEXT_FONT_STRIKETHROUGH: 'ASSET_SET_TEXT_FONT_STRIKETHROUGH',
  ASSET_SET_TEXT_COLOR: 'ASSET_SET_TEXT_COLOR',
  ASSET_SET_FILL_COLOR: 'ASSET_SET_FILL_COLOR',
  ASSET_SET_BORDER_COLOR: 'ASSET_SET_EDGE_COLOR',
  ASSET_SET_BORDER_WEIGHT: 'ASSET_SET_EDGE_WEIGHT',
  ASSET_SET_VIDEO_URL: 'ASSET_SET_VIDEO_URL',
  ASSET_SET_VIDEO_CONTROLLER: 'ASSET_SET_VIDEO_CONTROLLER',
  ASSET_SET_VIDEO_AUTOPLAY: 'ASSET_SET_VIDEO_AUTOPLAY',
  ASSET_SET_VIDEO_LOOP: 'ASSET_SET_VIDEO_LOOP',
  ASSET_SET_BACKGROUND_COLOR: "ASSET_SET_BACKGROUND_COLOR",
  ASSET_SET_MULTIPLE_ATTRIBUTE: 'ASSET_SET_MULTIPLE_ATTRIBUTE',
  ASSET_CREATE: "ASSET_CREATE",
  ASSET_SELECTED: "ASSET_SELECTED"
};

export const createAsset = (assetType, value, style = {}) => {
  return {
    type: actionTypes.ASSET_CREATE,
    assetType,
    value,
    style
  }
};

export const createAssetByType = (type) => {
  switch(type){
    case assetTypes.TYPE_TEXT:
      return createAsset(type, '텍스트를 입력해 주세요', {'font-size': '12px'});
    case assetTypes.TYPE_IMAGE:
      return createAsset(type, 'https://github.com/rlatjdfo112/CC-Show/blob/master/document/design/ICON/App%20Icon.png?raw=true');
    case assetTypes.TYPE_VIDEO:
      return createAsset(type, 'https://www.youtube.com/watch?v=VQtonf1fv_s');
    case assetTypes.TYPE_SHAPE:
      return createAsset(type, '');
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

export function setAssetTextFont(font) {
  return{
    type: actionTypes.ASSET_SET_TEXT_FONT,
    font
  }
}

export function setAssetFontSize(fontSize) {
  return{
    type: actionTypes.ASSET_SET_TEXT_FONT_SIZE,
    fontSize
  }
}

export function setAssetTextLineSpacing(value) {
  return{
    type: actionTypes.ASSET_SET_TEXT_LINESPACING,
    value
  }
}

export function setAssetTextSort(sort) {
  return{
    type: actionTypes.ASSET_SET_TEXT_SORT,
    sort
  }
}

export function setAssetFontBold() {
  return{
    type: actionTypes.ASSET_SET_TEXT_FONT_BOLD
  }
}

export function setAssetFontStrikethrough() {
  return{
    type: actionTypes.ASSET_SET_TEXT_FONT_STRIKETHROUGH
  }
}

export function setAssetFont() {
  return{
    type: actionTypes.ASSET_SET_TEXT_FONT_UNDERLINE
  }
}

export function setAssetFontItalic() {
  return{
    type: actionTypes.ASSET_SET_TEXT_FONT_ITALIC
  }
}

export function setFontStrikethrough() {
  return{
    type: actionTypes.ASSET_SET_TEXT_FONT_STRIKETHROUGH
  }
}

export function setAssetTextColor(textColor) {
  return{
    type: actionTypes.ASSET_SET_TEXT_COLOR,
    textColor
  }
}

export function setAssetFillColor(fillColor) {
  return{
    type: actionTypes.ASSET_SET_FILL_COLOR,
    fillColor
  }
}

export function setAssetBorderColor(borderColor) {
  return{
    type: actionTypes.ASSET_SET_BORDER_COLOR,
    borderColor
  }
}

export function setAssetEdgeWeight(weight) {
  return{
    type: actionTypes.ASSET_SET_BORDER_WEIGHT,
    borderWeight
  }
}

export function setAssetVideoURL(url){
  return{
    type: actionTypes.ASSET_SET_VIDEO_URL,
    url
  }
}

export function setAssetVideoController(){
  return{
    type: actionTypes.ASSET_SET_VIDEO_CONTROLLER
  }
}

export function setAssetVideoAutoplay(){
  return{
    type: actionTypes.ASSET_SET_VIDEO_AUTOPLAY
  }
}

export function setAssetVideoLoop(){
  return{
    type: actionTypes.ASSET_SET_VIDEO_LOOP
  }
}