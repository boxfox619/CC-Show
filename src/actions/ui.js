export const actionTypes = {
  TOGGLE_DIALOG: 'TOGGLE_DIALOG',
  RELEASE_DIALOG: 'RELEASE_DIALOG',
  TOGGLE_SLIDE_MANAGER: 'TOGGLE_SLIDE_MANAGER'
}

export const dialogs = {
  SLIDE_MANAGER: 'SlideManager',
  ASSET_STORE: 'AssetStore',
  ASSET_EDITOR: 'AssetEditor',
  ACCOUNT_WITH_SNS: 'AccountDialog',
  SLIDE_SHOW: 'SLIDE_SHOW',
  PROGRESS: 'PROGRESS',
  COLOR_PICKER: 'COLOR_PICKER'
}

export const colorPicker = {
  TEXT_COLOR: 'TextColor',
  FILL_COLOR: 'FillColor',
  BORDER_COLOR: 'BorderColor'
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

export const toggleSlideShow = () => {
  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.SLIDE_SHOW
  }
}

export const toggleProgressDialog = () => {
  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.PROGRESS
  }
}

export const releaseDialog = () => {

  return {
    type: actionTypes.RELEASE_DIALOG
  }
}
