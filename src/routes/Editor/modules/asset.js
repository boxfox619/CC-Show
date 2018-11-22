import {currentSlideIdx, updateCurrentSlide} from "./slide";
import {mapToImmutable} from '../../../core/store/reducers';

export const ASSET_CREATE = 'EDITOR.ASSET.ASSET_CREATE';
export const ASSET_SET_ATTRIBUTE = 'EDITOR.ASSET.ASSET_SET_ATTRIBUTE';
export const ASSET_SET_STYLE = 'EDITOR.ASSET.ASSET_SET_STYLE';
export const SELECT_ASSET = 'EDITOR.ASSET.SELECT_ASSET';
export const PASTE_ASSET = 'EDITOR.ASSET.PASTE_ASSET';
export const COPY_ASSET = 'EDITOR.ASSET.COPY_ASSET';
export const SORT_ASSET = 'EDITOR.ASSET.SORT_ASSET';
export const DELETE_ASSET = 'EDITOR.ASSET.DELETE_ASSET';

// ------------------------------------
// Actions
// ------------------------------------
export const createAsset = (assetType) => ({type: ASSET_CREATE, assetType});
export const setSelectedAssetAttribute = (attributeMap) => ({type: ASSET_SET_ATTRIBUTE, attributeMap});
export const setSelectedAssetStyle = (styleMap) => ({type: ASSET_SET_STYLE, styleMap});
export const selectAsset = (id) => ({type: SELECT_ASSET, id});
export const pasteAsset = () => ({type: PASTE_ASSET});
export const copySelectedAsset = () => ({type: COPY_ASSET});
export const sortAsset = (position) => ({type: SORT_ASSET, position});
export const deleteSelectedAsset = () => ({type: DELETE_ASSET});

// ------------------------------------
// Action Handler Utils
// ------------------------------------
export const updateAssets = (state, changes) => updateCurrentSlide(state, {assets: changes});
export const updateCurrentAsset = (state, changes) => updateAssets(state, {[currentAssetIdx(state)] : changes});
export const currentAssetIdx = (state) => {
    let currentSlide = state.slides[currentSlideIdx(state)];
    return currentSlide.assets.findIndex(asset => asset.id === currentSlide.selectedAssetId);
};
// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {
    [ASSET_CREATE]: (state, action) => updateAssets(state, {$push: {}}),
    [ASSET_SET_ATTRIBUTE]: (state, action) => updateCurrentAsset(state, mapToImmutable(action.attributeMap)),
    [ASSET_SET_STYLE]: (state, action) => updateCurrentAsset(state, {style: mapToImmutable(action.styleMap)}),
    [SELECT_ASSET]: (state, action) => updateCurrentSlide(state, {selectAssetIdx: {$set: action.id}}),
    [PASTE_ASSET]: (state, action) => updateAssets(state, {$push: {...state.cachedAsset}}),
    [COPY_ASSET]: (state, action) => ({cachedAsset : {$set: {...state.slides[currentSlideIdx(state)].assets[currentAssetIdx(state)]}}}),
    [SORT_ASSET]: (state, action) => {},
    [DELETE_ASSET]: (state, action) => updateAssets(state, {$splice: [currentAssetIdx(state), 1] }),
}