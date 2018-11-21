import update from 'immutability-helper';

export const SET_SLIDE_NAME = 'EDITOR.SLIDE.SET_SLIDE_NAME';
export const SET_SLIDE_THUMBNAIL = 'EDITOR.SLIDE.SET_SLIDE_THUMBNAIL';
export const MOVE_SLIDE = 'EDITOR.SLIDE.MOVE_SLIDE';
export const SET_SLIDE_NOTE = 'EDITOR.SLIDE.SET_SLIDE_NOTE';
export const SELECT_SLIDE = 'EDITOR.SLIDE.SELECT_SLIDE';
export const CREATE_NEW_SLIDE = 'EDITOR.SLIDE.CREATE_NEW_SLIDE';
export const DELETE_SLIDE = 'Editor.SLIDE.DELETE_SLIDE';
export const COPY_SLIDE = 'EDITOR.SLIDE.COPY_SLIDE';

// ------------------------------------
// Actions
// ------------------------------------
export const setSlideName = (id, name) => ({type: SET_SLIDE_NAME, id, name});
export const setSlideThumbnail = (id, thumbnail) => ({type: SET_SLIDE_THUMBNAIL, id, thumbnail});
export const moveSlide = (from, to) => ({type: MOVE_SLIDE, from, to});
export const setSlideNote = (note) => ({type: SET_SLIDE_NOTE, note});
export const selectSlide = (id) => ({type: SELECT_SLIDE, id});
export const createSlide = () => ({type: CREATE_NEW_SLIDE});
export const deleteSlide = (id) => ({type: DELETE_SLIDE, id});
export const copySlide = (id) => ({type: COPY_SLIDE, id});


// ------------------------------------
// Action Handlers
// ------------------------------------
export const currentSlideIdx = (state) => getSlideIdx(state, state.selectedSlideId);
export const getSlideIdx = (state, id) => state.slides.findIndex(s => s.id === id);
export const updateSlide = (state, changes) => update(state, {slides: changes(state.slides)});

export const ACTION_HANDLERS = {
    [SELECT_SLIDE]: (state, action) => update(state, {selectedSlideId: {$set: action.id}}),
    [CREATE_NEW_SLIDE]: (state) => update(state, {slideIdx: {$set: state.slideIdx+1}, slides: {$push: [initialState]}}),
    [DELETE_SLIDE]: (state, action) => updateSlide(state, {$splice: [getSlideIdx(action.id), 1]}),
    [COPY_SLIDE]: (state, action) => updateSlide(state, {$push : [...state.slides.filter(s => s.id !== action.id)]}),
    [SET_SLIDE_NAME]: (state, action) => updateSlide(state, {[getSlideIdx(state, action.id)]: {name: {$set: action.name}}}),
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