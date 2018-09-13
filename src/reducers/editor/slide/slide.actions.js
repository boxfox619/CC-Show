import * as actionTypes from 'constants/actionTypes';

export const setSizeUnit = (unit) => {
  return {
    type: actionTypes.SLIDE_CONTEXT_SET_SIZE_UNIT,
    unit
  }
};

export const setPositionUnit = (unit) => {
  return {
    type: actionTypes.SLIDE_CONTEXT_SET_POSITION_UNIT,
    unit
  }
};

export const setSlideNote = (target, note) => {
  return {
    type: actionTypes.SLIDE_SET_NOTE,
    target,
    note
  }
}

export const createSlide = () =>{
  return {
    type: actionTypes.SLIDE_CREATE
  }
}

export const copySlide = (target) => {
  return {
    type: actionTypes.SLIDE_COPY,
    target
  }
}

export const deleteSlide = (target) =>{
  return {
    type: actionTypes.SLIDE_DELETE,
    target: target
  }
}

export const renameCurrentSlide = (name) =>{
  return {
    type: actionTypes.SLIDE_RENAME,
    name
  }
}

export const selectSlide = (slideId) =>{
  return {
    type: actionTypes.SLIDE_SELECT,
    target: slideId
  }
}

export const shareSlide = (target) => {
    return (dispatch) =>{
      /*
      * @TODO implement share slide
      */
    }
}

export const updateSlideThumbnail = (target, thumbnail) => {
  return {
    type: actionTypes.SLIDE_SET_THUMBNAIL,
    target,
    thumbnail
  }
}

export const exchangeSlide = (to, from) => {
  return {
    type: actionTypes.EXCHANGE_SLIDE,
    to,
    from
  }
}