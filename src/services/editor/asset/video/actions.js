export const actionTypes = {
  ASSET_SET_VIDEO_URL: 'ASSET_SET_VIDEO_URL',
  ASSET_SET_VIDEO_CONTROLLER: 'ASSET_SET_VIDEO_CONTROLLER',
  ASSET_SET_VIDEO_AUTOPLAY: 'ASSET_SET_VIDEO_AUTOPLAY',
  ASSET_SET_VIDEO_LOOP: 'ASSET_SET_VIDEO_LOOP'
};

export function setAssetVideoURL(url) {
  return {
    type: actionTypes.ASSET_SET_VIDEO_URL,
    url
  }
}

export function setAssetVideoController() {
  return {
    type: actionTypes.ASSET_SET_VIDEO_CONTROLLER
  }
}

export function setAssetVideoAutoplay() {
  return {
    type: actionTypes.ASSET_SET_VIDEO_AUTOPLAY
  }
}

export function setAssetVideoLoop() {
  return {
    type: actionTypes.ASSET_SET_VIDEO_LOOP
  }
}
