import asset from './asset/asset.reducer';
import slide from './slide/slide.reducer';
import * as actionTypes from 'constants/actionTypes';

const initialState = {
    sizeUnit: 'px',
    positionUnit: 'px',
    selectedSlide: 0,
    slideIdCount: 0,
    cachedAsset: undefined,
    slides: [{
        name: 'TEST-SLIDE',
        id: 0,
        thumbnail: '',
        note: '',
        selectedAssetIndex: undefined,
        assetIdCount: 0,
        assets: []
    }]
}

const reducer = (state = initialState, action) => {
    state = asset(state, action);
    state = slide(state, action);
    switch (action.type) {
        case actionTypes.INIT_SHOW_DATA:
            return {
                ...action.data,
                showId: action.showId
            }
    }
    return state;
}

export default reducer;
