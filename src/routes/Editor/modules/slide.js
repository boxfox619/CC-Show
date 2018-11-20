export const SET_SLIDE_NAME = 'SLIDE.SET_SLIDE_NAME';
export const CREATE_NEW_SLIDE = 'SLIDE.CREATE_NEW_SLIDE';

export const ACTION_HANDLERS = {
    [SET_SLIDE_NAME]: (state, action) => {},
    [CREATE_NEW_SLIDE]: (state, action) => {}
};

export const initialState = {
    name: 'TEST-SLIDE',
    id: 0,
    thumbnail: '',
    note: '',
    selectedAssetIndex: undefined,
    assetIdCount: 0,
    assets: []
}