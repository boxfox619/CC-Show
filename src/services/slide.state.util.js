export const getSelectedAsset = (state) => {
    let selectedAssetIndex = getSelectedAssetIndex(state);
    if (selectedAssetIndex!=undefined) {
        return getCurrentSlide(state).assets[selectedAssetIndex];
    }
}

export const getSelectedAssetIndex = (state) => {
    let currentSlide = getCurrentSlide(state);
    if (!!currentSlide && currentSlide.selectedAssetIndex != undefined) {
        let selectedAssetIndex = currentSlide.selectedAssetIndex;
        return selectedAssetIndex;
    }
}

export const getCurrentSlide = (state) => {
    let slides = state.editor.slides;
    if (slides.length > 0 && !!slides[state.editor.selectedSlide]) {
        let currentSlide = slides[state.editor.selectedSlide];
        return currentSlide;
    }
}