import {clearSelection, getScanvas} from "../../../services/dom.service";
import {calMagneticPosition, calMagneticSize} from "./canvas.guideline.service";
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

export const move = (e, state, assets, selectedAssetIdx) => {
    let selectedAsset = assets[selectedAssetIdx];
    let otherAssets = assets.filter((v, i) => i != selectedAssetIdx);
    let x = e.pageX;
    let y = e.pageY;
    let afterX = parseInt(percentWidthToPixel(selectedAsset.x)) + (x - state.xInElement);
    let afterY = parseInt(percentHeightToPixel(selectedAsset.y)) + (y - state.yInElement);
    afterX = calMagneticPosition('x', afterX, parseInt(selectedAsset.width), otherAssets);
    afterY = calMagneticPosition('y', afterY, parseInt(selectedAsset.height), otherAssets);
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

export const resize = (e, state, assets, selectedAssetIdx) => {
    let selectedAsset = assets[selectedAssetIdx];
    let otherAssets = assets.filter((v, i) => i != selectedAssetIdx);
    let devX = (state.resizeTarget.includes('left')) ? state.xInElement - e.pageX : e.pageX - state.xInElement;
    let devY = (state.resizeTarget.includes('top')) ? state.yInElement - e.pageY : e.pageY - state.yInElement;
    let currentX = parseInt(percentHeightToPixel(selectedAsset.x));
    let currentY = parseInt(percentWidthToPixel(selectedAsset.y));
    let currentWidth = parseInt(percentWidthToPixel(parseInt(selectedAsset.width)+'px'));
    let currentHeight = parseInt(percentHeightToPixel(parseInt(selectedAsset.height) + 'px'));
    let afterHeight = currentHeight + devY;
    let afterWidth = currentWidth + devX;
    let afterX = currentX - devX;
    let afterY = currentY - devY;
    afterWidth = calMagneticSize('x', afterX, afterWidth, otherAssets);
    afterHeight = calMagneticSize('y', afterY, afterHeight, otherAssets);
    afterX = calMagneticPosition('x', afterX, afterWidth, otherAssets);
    afterY = calMagneticPosition('y', afterY, afterHeight, otherAssets);

    if (afterWidth < 5 || afterHeight < 5) {
        return;
    }
    afterWidth += 'px';
    afterHeight += 'px';
    afterX += 'px';
    afterY += 'px';
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