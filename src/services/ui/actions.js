import dialogs from './dialogs';

export const TOGGLE_DIALOG = 'TOGGLE_DIALOG';
export const RELEASE_DIALOG = 'RELEASE_DIALOG';
export const TOGGLE_SLIDE_MANAGER = 'TOGGLE_SLIDE_MANAGER';

export const showColorPicker = (styleClass, defaultColor) => {
  return {
      type: TOGGLE_DIALOG,
      target: dialogs.COLOR_PICKER,
      colorPicker: {
          styleClass,
          defaultColor
      }
  }
}

export const toggleSlideManager = () => {
  return {
    type: TOGGLE_SLIDE_MANAGER
  }
}

export const toggleAssetStore = () => {
  return {
    type: TOGGLE_DIALOG,
    target: dialogs.ASSET_STORE
  }
}

export const toggleAssetEditor = () => {
  return {
    type: TOGGLE_DIALOG,
    target: dialogs.ASSET_EDITOR
  }
}

export const toggleSlideShow = () => {
  return {
    type: TOGGLE_DIALOG,
    target: dialogs.SLIDE_SHOW
  }
}

export const toggleProgressDialog = () => {
  return {
    type: TOGGLE_DIALOG,
    target: dialogs.PROGRESS
  }
}

export const releaseDialog = () => {

  return {
    type: RELEASE_DIALOG
  }
}
