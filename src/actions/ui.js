export const actionTypes = {
  TOGGLE_DIALOG: 'TOGGLE_DIALOG',
  TOGGLE_SLIDE_MANAGER: 'TOGGLE_SLIDE_MANAGER',
  SLIDE_SHOW: 'SLIDE_SHOW'
}

export const dialogs = {
  SLIDE_MANAGER: 'SlideManager',
  ASSET_STORE: 'AssetStore',
  ASSET_EDITOR: 'AssetEditor',
  ACCOUNT_WITH_SNS: 'AccountDialog',
  COLOR_PICKER: 'ColorPicker'
}

export const colorPicker = {
  TEXT_COLOR: 'TextColor',
  FILL_COLOR: 'FillColor',
  BORDER_COLOR: 'BorderColor'
}

export const toggleSlideManager = () => {
  return {
    type: actionTypes.TOGGLE_SLIDE_MANAGER
  }
}

export const toggleAssetStore = () => {
  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.ASSET_STORE
  }
}

export const toggleAssetEditor = () => {
  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.ASSET_EDITOR
  }
}

export const toggleAccountDialog = () => {

  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.ACCOUNT_WITH_SNS
  }
}

export const toggleFillColorPicker = () => {
  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.COLOR_PICKER,
    colorPicker: colorPicker.FILL_COLOR
  }
}

export const toggleBorderColorPicker = () => {
  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.COLOR_PICKER,
    colorPicker: colorPicker.BORDER_COLOR
  }
}

export const toggleTextColorPicker = () => {
  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.COLOR_PICKER,
    colorPicker: colorPicker.TEXT_COLOR
  }
}

export const slideshow = () => {
  return {
    type: actionTypes.SLIDE_SHOW
  }
}
