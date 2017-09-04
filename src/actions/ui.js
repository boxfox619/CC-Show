export const actionTypes = {
  SLIDE_MANAGER : 'SLIDE_MANAGER',
  ASSET_STORE: 'ASSET_STORE',
  ASSET_EDITOR: 'ASSET_EDITOR',
  ACCOUNT_DIALOG: 'ACCOUNT_DIALOG'
}

export const toggleSlideManager = ()=>{
  return {
    type: actionTypes.SLIDE_MANAGER
  }
}

export const toggleAssetStore = ()=>{
  return {
    type: actionTypes.ASSET_STORE
  }
}

export const toggleAssetEditor = ()=>{
  return {
    type: actionTypes.ASSET_EDITOR
  }
}

export const toggleAccountDialog = ()=>{
  return {
    type: actionTypes.ACCOUNT_DIALOG
  }
}
