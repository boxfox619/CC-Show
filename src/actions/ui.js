export const actionTypes = {
  TOGGLE_DIALOG: 'TOGGLE_DIALOG',
  TOGGLE_SLIDE_MANAGER: 'TOGGLE_SLIDE_MANAGER'
}

export const dialogs = {
  SLIDE_MANAGER: 'SlideManager',
  ASSET_STORE: 'AssetStore',
  ASSET_EDITOR: 'AssetEditor',
  ACCOUNT_WITH_SNS: 'AccountDialog'
}

export const toggleSlideManager = ()=>{
  console.log('a');
  return {
    type: actionTypes.TOGGLE_SLIDE_MANAGER
  }
}

export const toggleAssetStore = ()=>{
  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.ASSET_STORE
  }
}

export const toggleAssetEditor = ()=>{
  console.log('a');
  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.ASSET_EDITOR
  }
}

export const toggleAccountDialog = ()=>{

  return {
    type: actionTypes.TOGGLE_DIALOG,
    target: dialogs.ACCOUNT_WITH_SNS
  }
}
