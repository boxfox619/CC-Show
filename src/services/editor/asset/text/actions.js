export const actionTypes = {
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
  ASSET_SET_TEXT_COLOR: 'ASSET_SET_TEXT_COLOR'
};

export function setAssetTextFont(font) {
  return {
    type: actionTypes.ASSET_SET_TEXT_FONT,
    font
  }
}

export function setAssetFontSize(fontSize) {
  return {
    type: actionTypes.ASSET_SET_TEXT_FONT_SIZE,
    fontSize
  }
}

export function setAssetTextCharacterSpacing(value) {
  return {
    type: actionTypes.ASSET_SET_TEXT_CHARACTER_SPACING,
    value
  }
}

export function setAssetTextLineSpacing(value) {
  return {
    type: actionTypes.ASSET_SET_TEXT_LINE_SPACING,
    value
  }
}

export function setAssetFontWeight(value) {
  return {
    type: actionTypes.ASSET_SET_TEXT_FONT_WEIGHT,
    value
  }
}

export function setAssetTextSort(sort) {
  return {
    type: actionTypes.ASSET_SET_TEXT_SORT,
    sort
  }
}

export function setAssetFontBold() {
  return {
    type: actionTypes.ASSET_SET_TEXT_FONT_BOLD
  }
}

export function setAssetFontStrikethrough() {
  return {
    type: actionTypes.ASSET_SET_TEXT_FONT_STRIKETHROUGH
  }
}

export function setAssetFontUnderline() {
  return {
    type: actionTypes.ASSET_SET_TEXT_FONT_UNDERLINE
  }
}

export function setAssetFontItalic() {
  return {
    type: actionTypes.ASSET_SET_TEXT_FONT_ITALIC
  }
}

export function setFontStrikethrough() {
  return {
    type: actionTypes.ASSET_SET_TEXT_FONT_STRIKETHROUGH
  }
}

export function setAssetTextColor(textColor) {
  return {
    type: actionTypes.ASSET_SET_TEXT_COLOR,
    textColor
  }
}
