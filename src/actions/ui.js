export const actionTypes = {
  TOGGLE_DIALOG: 'TOGGLE_DIALOG',
  TOGGLE_SLIDE_MANAGER: 'TOGGLE_SLIDE_MANAGER'
}

export const dialogs = {
  SLIDE_MANAGER: 'SlideManager',
  ASSET_STORE: 'AssetStore',
  ASSET_EDITOR: 'AssetEditor',
  ACCOUNT_WITH_SNS: 'AccountDialog',
  FILL_COLOR_PICKER: 'FillColorPicker',
  EDGE_COLOR_PICKER: 'EdgeColorPicker'
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

export const toggleEdgeColorPicker = () => {
  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.EDGE_COLOR_PICKER
  }
}

export const toggleFillColorPicker = () => {
  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.FILL_COLOR_PICKER
  }
}