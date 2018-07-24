import { clearSelection, getScanvas } from "../../../services/dom.service";
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

function percentHeightToPixel(val) {
    if (!val) {
        val = '0px';
    } else if (val.endsWith('%')) {
        console.log(val, getScanvas().offsetHeight);
        return parseInt(val) / 100 * parseInt(getScanvas().offsetHeight) + 'px';
    }
    return val;
}

function percentWidthToPixel(val) {
    if (!val) {
        val = '0px';
    } else if (val.endsWith('%')) {
        return parseInt(val) / 100 * parseInt(getScanvas().offsetWidth) + 'px';
    }
    return val;
}

function pixelHeightToPercent(val) {
    if (!val) {
        val = '0%';
    } else if (val.endsWith('px')) {
        return parseInt(val) / parseInt(getScanvas().offsetHeight) * 100 + '%';
    }
    return val;
}

function pixelWidthToPercent(val) {
    if (!val) {
        val = '0%';
    } else if (val.endsWith('px')) {
        return parseInt(val) / parseInt(getScanvas().offsetWidth) * 100 + '%';
    }
    return val;
}

export const calGuideLine = (assets, selectedIndex) => {
    let guidelines = []
    let selectedAsset = assets[selectedIndex];
    let selectedAssetX = parseInt(selectedAsset.x);
    let selectedAssetY = parseInt(selectedAsset.y);
    let selectedAssetWidth = parseInt(selectedAsset.width);
    let selectedAssetHeight = parseInt(selectedAsset.height);
    let selectedAssetXEnd = selectedAssetX + selectedAssetWidth;
    let selectedAssetYEnd = selectedAssetY + selectedAssetHeight;
    assets.map((asset, idx) => {
        if (selectedIndex != idx) {
            let assetX = parseInt(asset.x);
            let assetY = parseInt(asset.y);
            let assetWidth = parseInt(asset.width);
            let assetHeight = parseInt(asset.height);
            let minY = Math.min(selectedAssetY, assetY);
            let height = Math.max(selectedAssetYEnd, assetY + assetHeight) - minY + 12;
            let minX = Math.min(selectedAssetX, assetX);
            let width = Math.max(selectedAssetXEnd, assetX + assetWidth) - minX + 12;
            if (selectedAssetX == assetX) {
                guidelines.push({left: selectedAssetX + 6 + 'px', top: minY, height});
            }
            if (selectedAssetY == assetY) {
                guidelines.push({top: selectedAssetY + 6 + 'px', left: minX, width});
            }
            if ((selectedAssetXEnd) == (assetX + assetWidth)) {
                guidelines.push({left: selectedAssetXEnd + 10 + 'px', top: minY, height});
            }
            if ((selectedAssetYEnd) == (assetY + assetHeight)) {
                guidelines.push({top: selectedAssetYEnd + 10 + 'px', left: minX, width});
            }
        }
    });
    return guidelines;
}

export const calPositionX = (x, assets) => {
    let result = x;
    let sub = 100;
    assets.map(asset => {
        let assetX = parseInt(asset.x);
        let abs = Math.abs(x - assetX);
        console.log(abs);
        if (abs <= 2 && sub > Math.abs(x - assetX)) {
            result = assetX;
        }
    })
    return result;
}

export const calPositionY = (y, assets) => {
    let result = y;
    let sub = 100;
    assets.map(asset => {
        let assetY = parseInt(asset.y);
        let abs = Math.abs(y - assetY);
        if (abs <= 2 && sub > Math.abs(y - assetY)) {
            result = assetY;
        }
    })
    return result;
}

export const move = (e, state, assets, selectedAssetIdx) => {
    let selectedAsset = assets[selectedAssetIdx];
    let x = e.pageX;
    let y = e.pageY;
    let afterX = parseInt(percentWidthToPixel(selectedAsset.x)) + (x - state.xInElement);
    let afterY = parseInt(percentHeightToPixel(selectedAsset.y)) + (y - state.yInElement);
    afterX = calPositionX(afterX, assets.filter((a, i) => i!=selectedAssetIdx));
    afterY = calPositionY(afterY, assets.filter((a, i) => i!=selectedAssetIdx));
    afterX = afterX + 'px';
    afterY = afterY + 'px';
    if (selectedAsset.x.endsWith('%')) {
        afterX = pixelWidthToPercent(afterX);
        afterY = pixelHeightToPercent(afterY);
    }
    return {
        attrs: {'x': afterX, 'y': afterY},
        state: {xInElement: x, yInElement: y}
    };
}

export const resize = (e, state, selectedAsset) => {
    let devX = (state.resizeTarget.includes('left')) ? state.xInElement - e.pageX : e.pageX - state.xInElement;
    let devY = (state.resizeTarget.includes('top')) ? state.yInElement - e.pageY : e.pageY - state.yInElement;
    let currentX = parseInt(percentHeightToPixel(selectedAsset.x));
    let currentY = parseInt(percentWidthToPixel(selectedAsset.y));
    let currentWidth = parseInt(percentWidthToPixel(parseInt(selectedAsset.width)+'px'));
    let currentHeight = parseInt(percentHeightToPixel(parseInt(selectedAsset.height)+'px'));
    let afterHeight = currentHeight + devY + 'px';
    let afterWidth = currentWidth + devX + 'px';
    let afterX = currentX - devX + 'px';
    let afterY = currentY - devY + 'px';
    if (parseInt(afterWidth) < 5 || parseInt(afterHeight) < 5) {
        return;
    }
    if (selectedAsset.x.endsWith('%')) {
        afterY = pixelHeightToPercent(afterY);
        afterX = pixelWidthToPercent(afterX);
    }
    if (selectedAsset.x.endsWith('%')) {
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

export const down = (e, state) => {
    document.activeElement.blur();
    let modifyState = {};

    if (getAssetNode(TAG_ASSET, e.target)) {
        if (state.selectedAssetId == getAssetNode(TAG_ASSET, e.target).id && state.doubleClicked) {
            return;
        }
        if (e.target.tagName == TAG_COL_RESIZER) {
            return;
        }
        modifyState.doubleClicked = false;
        modifyState.selectedAsset = getAssetNode(TAG_ASSET, e.target);
        modifyState.selectedAssetId = modifyState.selectedAsset.id;
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