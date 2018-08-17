import dialogs from 'constants/dialogs';
import * as types from 'constants/actionTypes';


export const showColorPicker = (styleClass, defaultColor) => {
  return {
      type: types.TOGGLE_DIALOG,
      target: dialogs.COLOR_PICKER,
      colorPicker: {
          styleClass,
          defaultColor
      }
  }
}

export const toggleSlideManager = () => {
  return {
    type: types.TOGGLE_SLIDE_MANAGER
  }
}

export const toggleAssetManager = () => {
  return {
    type: types.TOGGLE_DIALOG,
    target: dialogs.ASSET_STORE
  }
}

export const toggleAssetEditor = () => {
  return {
    type: types.TOGGLE_DIALOG,
    target: dialogs.ASSET_EDITOR
  }
}

export const toggleSlideShow = () => {
  return {
    type: types.TOGGLE_DIALOG,
    target: dialogs.SLIDE_SHOW
  }
}

export const toggleProgressDialog = () => {
  return {
    type: types.TOGGLE_DIALOG,
    target: dialogs.PROGRESS
  }
}

export const releaseDialog = () => {

  return {
    type: types.RELEASE_DIALOG
  }
}
