
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
            if (selectedAssetX == assetX  || selectedAssetX == (assetX + assetWidth)) {
                guidelines.push({left: selectedAssetX + 6 + 'px', top: minY, height});
            }
            if (selectedAssetY == assetY || selectedAssetY == (assetY + assetHeight)) {
                guidelines.push({top: selectedAssetY + 6 + 'px', left: minX, width});
            }
            if ((selectedAssetXEnd) == (assetX + assetWidth) || selectedAssetXEnd == assetX) {
                guidelines.push({left: selectedAssetXEnd + 10 + 'px', top: minY, height});
            }
            if ((selectedAssetYEnd) == (assetY + assetHeight) || selectedAssetYEnd == assetY) {
                guidelines.push({top: selectedAssetYEnd + 10 + 'px', left: minX, width});
            }
        }
    });
    return guidelines;
}

export const calMagneticPosition = (type, position, size, assets) => {
    let sub = 100;
    let result = position;
    let endPosition = position + size;
    assets.map(asset => {
        let assetPosition = parseInt(asset[type]);
        let assetSize = parseInt(asset[type == 'x' ? 'width' : 'height']);
        let assetEndPosition = assetPosition + assetSize;
        let abs = Math.abs(position - assetPosition);
        if (abs <= 2 && sub > abs) {
            result = assetPosition;
            return;
        }
        abs = Math.abs(endPosition - assetEndPosition);
        if (abs <= 3 && sub > abs) {
            result = position - (endPosition - assetEndPosition);
            return;
        }
        abs = Math.abs(position - assetEndPosition);
        if (abs <= 3 && sub > abs) {
            result = assetEndPosition;
            return;
        }
        abs = Math.abs(endPosition - assetPosition);
        if (abs <= 3 && sub > abs) {
            result = assetPosition - size;
            return;
        }



    })
    return result;
}

export const calMagneticSize = (type, position, size, assets) => {
    let sub = 100;
    let result = size;
    let endPosition = position + size;
    assets.map(asset => {
        let assetPosition = parseInt(asset[type]);
        let assetSize = parseInt(asset[type == 'x' ? 'width' : 'height']);
        let assetEndPosition = assetPosition + assetSize;
        let abs = Math.abs(endPosition - assetPosition);
        if (abs <= 2 && sub > abs) {
            result = assetPosition - position;
            return;
        }
        abs = Math.abs(endPosition - assetEndPosition);
        if (abs <= 3 && sub > abs) {
            result = assetEndPosition - assetPosition;
            return;
        }

    })
    return result;
}