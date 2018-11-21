import update from 'immutability-helper';
export const SET_SLIDE_NAME = 'EDITOR.SLIDE.SET_SLIDE_NAME';
export const SET_SLIDE_THUMBNAIL = 'EDITOR.SLIDE.SET_SLIDE_THUMBNAIL';
export const MOVE_SLIDE = 'EDITOR.SLIDE.MOVE_SLIDE';
export const SET_SLIDE_NOTE = 'EDITOR.SLIDE.SET_SLIDE_NOTE';

export const currentSlideIdx = (state) => getSlideIdx(state, state.selectedSlideId);
export const getSlideIdx = (state, id) => state.slides.findIndex(s => s.id === id);

export const updateSlide = (state, changes) => update(state, {slides: changes(state.slides)});

export const ACTION_HANDLERS = {
    [SET_SLIDE_NAME]: (state, action) => updateSlide(state, {[currentSlideIdx(state)]: {name: {$set: action.name}}}),
    [SET_SLIDE_THUMBNAIL]: (state, action) => updateSlide(state, {[getSlideIdx(state, action.id)]: {thumbnail: action.thumbnail}}),
    [MOVE_SLIDE]: (state, action) => updateSlide(state, {$set: state.slides.splice(action.to, 0, state.slides.splice(action.from, 1)[0])}),
    [SET_SLIDE_NOTE]: (state, action) => updateSlide(state, {[currentSlideIdx(state)]: {note: {$set: action.note}}}),
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