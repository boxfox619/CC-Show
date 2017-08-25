export const actionTypes = {
  SLIDE_MANAGER : 'SLIDE_MANAGER',
  ASSET_STORE: 'ASSET_STORE',
  ASSET_EDITOR: 'ASSET_EDITOR'
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
