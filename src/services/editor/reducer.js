import asset from './asset/reducer';
import slide from './slide/reducer';

const initialState = {
  sizeUnit: 'px',
  positionUnit: 'px',
  selectedSlide: 0,
  slideIdCount: 0,
  slides: [{
    name: 'TEST-SLIDE',
    id: 0,
    thumbnail: '',
    note: '',
    selectedAsset: undefined,
    assetIdCount: 0,
    assets: []
  }]
}

const reducer = (state = initialState, action) => {
  state = asset(state, action);
  state = slide(state, action);
  return state;
}

export default slideContext;
