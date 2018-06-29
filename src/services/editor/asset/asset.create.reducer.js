import * as assetTypes from "./asset.types";
import update from "react-addons-update";

const defaultAsset = {
  id: '',
  type: '',
  value: '',
  height: '50px',
  width: '50px',
  x: '0px',
  y: '0px',
  angle: '0',
  style: {}
};

export const createAssetReducer = (state, action) =>{
  let currentSlide = state.slides[state.selectedSlide];
  let assetIdCount = (currentSlide) ? currentSlide.assetIdCount : undefined;
  let currentAssetId = state.selectedSlide + ':' + (assetIdCount + 1);
  let sizeUnit = state.sizeUnit;
  let positionUnit = state.positionUnit;

  let newAsset = {
    ...defaultAsset,
    id: currentAssetId,
    type: action.assetType,
    value: action.value,
    height: '50' + sizeUnit,
    width: '50' + sizeUnit,
    x: '0' + positionUnit,
    y: '0' + positionUnit,
    style: {
      'background-color': 'white',
      'border-color': 'white',
      'border-style': 'solid',
      'border-width': '0px'
    }
  };
  if (action.assetType === assetTypes.TYPE_TEXT) {
    newAsset = {
      ...newAsset,
      subStyle: [],
      style: {
        ...newAsset.style,
        'font-family': '굴림',
        'font-size': '12px',
        'text-align': 'justify',
        'font-weight': 'normal',
        'font-style': 'normal',
        'text-decoration': 'none',
        color: 'black',
        'letter-spacing': '0px',
        'line-height': 'normal'
      }
    }
  } else if (action.assetType === assetTypes.TYPE_VIDEO) {
    newAsset = {
      ...newAsset,
      preview: false,
      style: {
        ...newAsset.style,
        videoController: false,
        videoLoop: false,
        videoAutoplay: false
      }
    }
  } else if (action.assetType === assetTypes.TYPE_IMAGE) {
  } else if (action.assetType === assetTypes.TYPE_SHAPE) {
    newAsset = {
      ...newAsset,
      style: {
        'border-color': '#5a84b3',
        'background-color': '#5a84b3',
        'border-width': '0px'
      }
    }
  } else if (action.assetType === assetTypes.TYPE_TABLE) {
    newAsset = {
      ...newAsset,
      cells: [[{'width': '20px'}, {'width': '20px'}], [{'width': '20px'}, {'width': '20px'}]],
      style: {
        'border-color': 'black',
        'border-width': '0px',
        'background-color': 'white'
      }
    }
  } else if (action.assetType === assetTypes.TYPE_CUSTOM) {
  }
  return {
    ...state,
    slides: update(
        state.slides, {
          [state.selectedSlide]: {
            assetIdCount: {
              $set: assetIdCount + 1
            },
            assets: {
              $set: update(
                  currentSlide.assets, {
                    $push: [newAsset]
                  })
            }
          }
        }
    )
  };
}