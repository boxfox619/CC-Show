import {setSelectAssetStyle, getSelectedAssetStyle} from './ControllerUtil';

let textSelectionRange = {
  start: 0,
  end: 0
}

export default function(state, action, actionTypes){
  switch (action.type) {
  case actionTypes.ASSET_SET_TEXT_SELECT_RANGE:
    textSelectionRange.start = action.start;
    textSelectionRange.end = action.end;
    return state
  case actionTypes.ASSET_SET_TEXT_COLOR:
    return setSelectAssetStyle(state, 'color', action.textColor)
  case actionTypes.ASSET_SET_TEXT_FONT:
    return setSelectAssetStyle(state, 'font-family', action.font)
  case actionTypes.ASSET_SET_TEXT_FONT_SIZE:
    return setSelectAssetStyle(state, 'font-size', action.fontSize)
  case actionTypes.ASSET_SET_TEXT_FONT_WEIGHT:
    return setSelectAssetStyle(state, 'font-width', action.value)
  case actionTypes.ASSET_SET_TEXT_CHARACTER_SPACING:
    return setSelectAssetStyle(state, 'letter-spacing', action.value)
  case actionTypes.ASSET_SET_TEXT_LINE_SPACING:
    return setSelectAssetStyle(state, 'line-height', action.value)
  case actionTypes.ASSET_SET_TEXT_SORT:
    return setSelectAssetStyle(state, 'text-align', action.sort)
  case actionTypes.ASSET_SET_TEXT_FONT_BOLD:
    return setSelectAssetStyle(state, 'font-weight', (getSelectedAssetStyle(state, 'font-weight') == 'bold') ? 'normal' :  'bold')
  case actionTypes.ASSET_SET_TEXT_FONT_UNDERLINE:
    return setSelectAssetStyle(state, 'text-decoration', (getSelectedAssetStyle(state, 'text-decoration') == 'underline') ? 'none' : 'underline')
  case actionTypes.ASSET_SET_TEXT_FONT_ITALIC:
    return setSelectAssetStyle(state, 'font-style', (getSelectedAssetStyle(state, 'font-style') == 'italic') ? 'normal' : 'italic')
  case actionTypes.ASSET_SET_TEXT_FONT_STRIKETHROUGH:
    return setSelectAssetStyle(state, 'text-decoration', (getSelectedAssetStyle(state, 'text-decoration') == 'line-through') ? 'none' : 'line-through')
  default:
      return state;
  }
}
