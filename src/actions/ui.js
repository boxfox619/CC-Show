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
  SLIDE_SHOW: 'SLIDE_SHOW'
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

export const toggleAccountDialog = () => {

  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.ACCOUNT_WITH_SNS
  }
}

export const releaseDialog = () => {

  return {
    type: actionTypes.RELEASE_DIALOG
  }
}