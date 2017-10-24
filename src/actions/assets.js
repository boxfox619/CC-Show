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
  ASSET_SET_TEXT_FONT_WEIGHT: 'ASSET_SET_TEXT_FONT_CHARACTER_SPACING',
  ASSET_SET_TEXT_CHARACTER_SPACING: 'ASSET_SET_TEXT_CHARACTER_SPACING',
  ASSET_SET_TEXT_LINE_SPACING: 'ASSET_SET_TEXT_LINE_SPACING',
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
  ASSET_SET_IMAGE: 'ASSET_SET_IMAGE',
  ASSET_SET_VIDEO_CONTROLLER: 'ASSET_SET_VIDEO_CONTROLLER',
  ASSET_SET_VIDEO_AUTOPLAY: 'ASSET_SET_VIDEO_AUTOPLAY',
  ASSET_SET_VIDEO_LOOP: 'ASSET_SET_VIDEO_LOOP',
  ASSET_SET_BACKGROUND_COLOR: "ASSET_SET_BACKGROUND_COLOR",
  ASSET_SET_MULTIPLE_ATTRIBUTE: 'ASSET_SET_MULTIPLE_ATTRIBUTE',
  ASSET_SET_STYLE: 'ASSET_SET_STYLE',
  ASSET_CREATE: "ASSET_CREATE",
  ASSET_SELECTED: "ASSET_SELECTED",
  ASSET_COPY: 'ASSET_COPY',
  ASSET_SORT: 'ASSET_SORT',
  ASSET_DELETE: 'ASSET_DELETE',
  TOGGLE_VIDEO_PREVIEW: 'TOGGLE_VIDEO_PREVIEW',
  ASSET_SET_CHANGE_SHAPE: 'ASSET_SET_CHANGE_SHAPE',
  ASSET_SET_TEXT_SELECT_RANGE: 'ASSET_SET_TEXT_SELECT_RANGE'
};

export const createAsset = (assetType, value, style = {}) => {
  return {
    type: actionTypes.ASSET_CREATE,
    assetType,
    value,
    style
  }
};

export const setAssetValue = (id, value) =>{
  return {
    type: actionTypes.ASSET_SET_VALUE,
    id,
    value
  }
}

export const createCustomAsset = (assetId) =>{
  return {
    type: actionTypes.ASSET_CREATE,
    assetType: assetTypes.TYPE_CUSTOM,
    value: assetId
  }
}

export const createAssetByType = (type) => {
  switch(type){
    case assetTypes.TYPE_TEXT:
      return createAsset(type, '텍스트를 입력해 주세요', {'font-size': '12px'});
    case assetTypes.TYPE_IMAGE:
      return createAsset(type, '/images/AppIcon.png');
    case assetTypes.TYPE_VIDEO:
      return createAsset(type, 'https://www.youtube.com/watch?v=VQtonf1fv_s');
    case assetTypes.TYPE_SHAPE:
      return createAsset(type, 'square');
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

export function copyAsset(id, slide, x, y){
  return {
    type: actionTypes.ASSET_COPY,
    id,
    slide,
    x,
    y
  }
}

export function sortFirstAsset(id){
  return{
    type: actionTypes.ASSET_SORT,
    id,
    to: 'min'
  }
}

export function sortLastAsset(id){
  return{
    type: actionTypes.ASSET_SORT,
    id,
    to: 'max'
  }
}

export function sortBackAsset(id){
  return{
    type: actionTypes.ASSET_SORT,
    id,
    to: 'front'
  }
}

export function sortFrontAsset(id){
  return{
    type: actionTypes.ASSET_SORT,
    target: id,
    to: 'back'
  }
}

export function deleteAsset(id){
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

export function setAssetTextFont(font) {
  return{
    type: actionTypes.ASSET_SET_TEXT_FONT,
    font
  }
}

export function setAssetFontSize(fontSize) {
  fontSize+='px';
  return{
    type: actionTypes.ASSET_SET_TEXT_FONT_SIZE,
    fontSize
  }
}

export function setAssetTextCharacterSpacing(value) {
  value+='px';
  return{
    type: actionTypes.ASSET_SET_TEXT_CHARACTER_SPACING,
    value
  }
}

export function setAssetTextLineSpacing(value) {
  value+='%';
  return{
    type: actionTypes.ASSET_SET_TEXT_LINE_SPACING,
    value
  }
}

export function setAssetFontWeight(value) {
  return{
    type: actionTypes.ASSET_SET_TEXT_FONT_WEIGHT,
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

export function setAssetFontUnderline() {
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
  console.log(fillColor);
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
  weight+='px';
  console.log(weight);
  return{
    type: actionTypes.ASSET_SET_BORDER_WEIGHT,
    weight
  }
}

export function setAssetVideoURL(url){
  return{
    type: actionTypes.ASSET_SET_VIDEO_URL,
    url
  }
}

export function setAssetImage(value){
  return{
    type: actionTypes.ASSET_SET_IMAGE,
    value
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

export function setAssetStyle(style){
  return{
    type: actionTypes.ASSET_SET_STYLE,
    style
  }
}

export function toggleVideoPreview(){
  return{
    type: actionTypes.TOGGLE_VIDEO_PREVIEW
  }
}

export function setAssetChangeShape(shape){
  return{
    type: actionTypes.ASSET_SET_CHANGE_SHAPE,
    shape
  }
}

export function setTextSelectionRange(start, end){
  return {
    type: actionTypes.ASSET_SET_TEXT_SELECT_RANGE,
    start,
    end
  }
}
