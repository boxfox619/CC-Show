export const SET_SLIDE_NAME = 'EDITOR.SLIDE.SET_SLIDE_NAME';
export const COPY_SLIDE = 'EDITOR.SLIDE.COPY_SLIDE';
export const DELETE_SLIDE = 'EDITOR.SLIDE.DELETE_SLIDE';
export const RENAME_SLIDE = 'EDITOR.SLIDE.RENAME_SLIDE';
export const SHARE_SLIDE = 'EDITOR.SLIDE.SHARE_SLIDE';
export const SET_SLIDE_THUMBNAIL = 'EDITOR.SLIDE.SET_SLIDE_THUMBNAIL';
export const EXCHANGE_SLIDE = 'EDITOR.SLIDE.EXCHANGE_SLIDE';
export const SET_SLIDE_NOTE = 'EDITOR.SLIDE.SET_SLIDE_NOTE';

export const ACTION_HANDLERS = {
    [SET_SLIDE_NAME]: (state, action) => {},
    [COPY_SLIDE]: (state, action) => {},
    [DELETE_SLIDE]: (state, action) => {},
    [RENAME_SLIDE]: (state, action) => {},
    [SHARE_SLIDE]: (state, action) => {},
    [SET_SLIDE_THUMBNAIL]: (state, action) => {},
    [EXCHANGE_SLIDE]: (state, action) => {},
    [SET_SLIDE_NOTE]: (state, action) => {},
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