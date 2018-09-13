import * as actionTypes from 'constants/actionTypes';
import update from 'react-addons-update';
import {createAssetReducer as create} from './asset.create.reducer';
import {insertItem} from '../util';

const updateAsset = (state, updateData) => {
    let currentSlide = state.slides[state.selectedSlide];
    let selectedAssetIndex = (currentSlide) ? currentSlide.selectedAssetIndex : undefined;

    return updateCurrentSlide(state, {
        assets: {
            $set: update(
                currentSlide.assets, {[selectedAssetIndex]: updateData}
            )
        }
    })
}

const updateCurrentSlide = (state, updateData) => {
    return {
        ...state,
        slides: update(
            state.slides, {
                [state.selectedSlide]: updateData
            }
        )
    }

}


export default function (state, action) {
    let currentSlide = state.slides[state.selectedSlide];
    let selectedAssetIndex = (currentSlide) ? currentSlide.selectedAssetIndex : undefined;
    let currentAsset = (currentSlide) ? currentSlide.assets[selectedAssetIndex] : undefined;
    let assetIdCount = (currentSlide) ? currentSlide.assetIdCount : undefined;
    let currentAssetId = state.selectedSlide + ':' + (assetIdCount + 1);

    switch (action.type) {
        case actionTypes.ASSET_CREATE:
            return create(state, action);
        case actionTypes.ASSET_SET_ATTRIBUTE:
            currentAsset[action.attrName] = action.attr;
            return updateAsset(state, {$set: currentAsset});
        case actionTypes.ASSET_SET_STYLE:
            currentAsset.style[action.styleName] = action.style;
            return updateAsset(state, {$set: currentAsset});
        case actionTypes.ASSET_SELECTED:
            if (state.slides.length > 0) {
                return updateCurrentSlide(state, {
                    selectedAssetIndex: {
                        $set: getAssetIndex(currentSlide, action.assetId)
                    }
                });
            } else {
                return {...state}
            }
        case actionTypes.ASSET_PASTE:
            if (!!state.cachedAsset)
                return updateCurrentSlide(state, {
                    $set: {
                        ...currentSlide,
                        assetIdCount: assetIdCount + 1,
                        assets: update(
                            currentSlide.assets, {
                                $push: [{
                                    ...state.cachedAsset,
                                    id: currentAssetId,
                                    x: action.x,
                                    y: action.y
                                }]
                            })
                    }
                });
            else {
                return {...state}
            }
        case actionTypes.ASSET_COPY:
            return {
                ...state,
                cachedAsset: {...currentSlide.assets[getAssetIndex(currentSlide, action.id)]}
            }
        case actionTypes.ASSET_SORT:
            let assetsArr = currentSlide.assets;
            let targetIndex = getAssetIndex(currentSlide, action.target);
            let assetIndex = getAssetIndex(currentSlide, action.target);
            if (action.to == 'min') {
                assetIndex = 0;
            } else if (action.to == 'max') {
                assetIndex = assetsArr.length - 1;
            } else if (action.to == 'front' && assetIndex > 0) {
                assetIndex -= 1;
            } else if (action.to == 'back' && assetIndex < assetsArr.length - 1) {
                assetIndex += 1;
            }
            return updateCurrentSlide(state, {
                $set: {
                    ...currentSlide,
                    assets: insertItem(assetsArr, assetIndex, assetsArr.splice(targetIndex, 1)[0])
                }
            });
        case actionTypes.ASSET_DELETE:
            return updateCurrentSlide(state, {
                $set: {
                    ...currentSlide,
                    selectedAssetIndex: undefined,
                    assets: update(
                        currentSlide.assets, {
                            $splice: [[getAssetIndex(currentSlide, action.id), 1]]
                        }
                    )
                }
            });
        case actionTypes.ASSET_SET_STYLE:
            return updateAsset(state, {
                style: {
                    $set: JSON.parse(action.style)
                }
            });
        case actionTypes.ASSET_SET_MULTIPLE_ATTRIBUTE:
            return updateAsset(state, action.attrs);
        default:
            return state;
    }
}

function getAssetIndex(currentSlide, key) {
    let index = undefined;
    currentSlide.assets.forEach(function (asset, i) {
        if (asset.id == key) {
            index = i;
        }
    });
    return index;
}
