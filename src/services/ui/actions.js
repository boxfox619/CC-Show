import dialogs from './dialogs';
import colorPicker from './colorPicker';

export const actionTypes = {
  TOGGLE_DIALOG: 'TOGGLE_DIALOG',
  RELEASE_DIALOG: 'RELEASE_DIALOG',
  TOGGLE_SLIDE_MANAGER: 'TOGGLE_SLIDE_MANAGER'
}

export const showColorPicker = (styleClass, defaultColor) => {
  return {
      type: actionTypes.TOGGLE_DIALOG,
      target: dialogs.COLOR_PICKER,
      colorPicker: {
          styleClass,
          defaultColor
      }
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
