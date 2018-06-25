const TAG_ASSET = 'ASSET';
const TAG_COL_RESIZER = 'COL-RESIZER';
const TAG_SELECTORDOT = 'SELECTORDOT';
const TAG_SELECTORLINE = 'SELECTORLINE';

function getAssetNode(parent, child) {
  var node = child.parentNode;
  while (node != null) {
    if (node.tagName == parent) {
      return node;
    }
    node = node.parentNode;
  }
  return null;
}

function clearSelection() {
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }
}

function percentHeightToPixel(val) {
  if (val.endsWith('%')) {
    return parseInt(val) / 100 * parseInt(this.height) + 'px';
  }
  return val;
}

function percentWidthToPixel(val) {
  if (val.endsWith('%')) {
    return parseInt(val) / 100 * parseInt(this.width) + 'px';
  }
  return val;
}

function pixelHeightToPercent(val) {
  if (val.endsWith('px')) {
    return parseInt(val) / parseInt(this.height) * 100 + '%';
  }
  return val;
}

function pixelWidthToPercent(val) {
  if (val.endsWith('px')) {
    return parseInt(val) / parseInt(this.width) * 100 + '%';
  }
  return val;
}

export const move = (state, e) => {
  let x = e.pageX;
  let y = e.pageY;
  let afterX = parseInt(percentWidthToPixel(state.selectedAsset.x))
      + (x - state.xInElement) + 'px';
  let afterY = parseInt(percentHeightToPixel(state.selectedAsset.y))
      + (y - state.yInElement) + 'px';
  if (this.selectedAsset.x.endsWith('%')) {
    afterX = pixelWidthToPercent(afterX);
    afterY = pixelHeightToPercent(afterY);
  }
  return {
    attr: {'x': afterX, 'y': afterY},
    state: {xInElement: x, yInElement: y}
  };
}

export const resize = (state, e) =>{
  let devX = (state.resizeTarget.includes('left')) ? state.xInElement - e.pageX : e.pageX - state.xInElement;
  let devY = (state.resizeTarget.includes('top')) ? state.yInElement - e.pageY : e.pageY - state.yInElement;
  let currentX = parseInt(percentHeightToPixel(state.selectedAsset.x));
  let currentY = parseInt(percentWidthToPixel(state.selectedAsset.y));
  let currentWidth = parseInt(percentWidthToPixel(state.selectedAsset.width));
  let currentHeight = parseInt(percentHeightToPixel(state.selectedAsset.height));
  let afterHeight = currentHeight + devY + 'px';
  let afterWidth = currentWidth + devX + 'px';
  let afterX = currentX - devX + 'px';
  let afterY = currentY - devY + 'px';
  if (parseInt(afterWidth) < 5 || parseInt(afterHeight) < 5) {
    return;
  }
  if (state.selectedAsset.x.endsWith('%')) {
    afterY = pixelHeightToPercent(afterY);
    afterX = pixelWidthToPercent(afterX);
  }
  if (state.selectedAsset.width.endsWith('%')) {
    afterHeight = pixelHeightToPercent(afterHeight);
    afterWidth = pixelWidthToPercent(afterWidth);
  }
  let modifyAttrs;
  switch (state.resizeTarget) {
    case 'topleft':
      modifyAttrs = {
        'height': afterHeight,
        'y': afterY,
        'width': afterWidth,
        'x': afterX
      };
      break;
    case 'topright':
      modifyAttrs = {
        'height': afterHeight,
        'y': afterY,
        'width': afterWidth
      };
      break;
    case 'bottomleft':
      modifyAttrs = {
        'height': afterHeight,
        'width': afterWidth,
        'x': afterX
      };
      break;
    case 'bottomright':
      modifyAttrs = {'height': afterHeight, 'width': afterWidth};
      break;
    case 'top':
      modifyAttrs = {'height': afterHeight, 'y': afterY};
      break;
    case 'left':
      modifyAttrs = {'width': afterWidth, 'x': afterX};
      break;
    case 'bottom':
      modifyAttrs = {'height': afterHeight};
      break;
    case 'right':
      modifyAttrs = {'width': afterWidth};
      break;
  }
  return {
    state: {xInElement: e.pageX, yInElement: e.pageY},
    attrs: modifyAttrs
  };
}

export const down = (state, e) => {
    document.activeElement.blur();
    let modifyState = {};

    if (getAssetNode(TAG_ASSET, e.target)) {
        if (state.selectedAssetId == getAssetNode(TAG_ASSET, e.target).id && this.state.doubleClicked) {
            return;
        }
        if (e.target.tagName == TAG_COL_RESIZER) {
            return;
        }
        modifyState.doubleClicked = false;
        modifyState.selectedAssetId = getAssetNode(TAG_ASSET, e.target).id;
        modifyState.mouseAction = 'move';
        if (e.target.tagName == TAG_SELECTORDOT || e.target.tagName
            == TAG_SELECTORLINE) {
            modifyState.mouseAction = 'resize';
            modifyState.resizeTarget = e.target.getAttribute('target');
        }
        modifyState.xInElement = e.pageX;
        modifyState.yInElement = e.pageY;
        e.preventDefault();
    } else {
        modifyState.doubleClicked = false;
        modifyState.selectedAssetId = undefined;
        e.preventDefault();
        clearSelection();
    }
    return modifyState;
}