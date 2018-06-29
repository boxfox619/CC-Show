export const SLIDE_CONTEXT_SET_SIZE_UNIT = "SLIDE_CONTEXT_SET_SIZE_UNIT";
export const SLIDE_CONTEXT_SET_POSITION_UNIT = "SLIDE_CONTEXT_SET_POSITION_UNIT";
export const SLIDE_CREATE = 'SLIDE_CREATE';
export const SLIDE_COPY = 'SLIDE_COPY';
export const SLIDE_DELETE = 'SLIDE_DELETE';
export const SLIDE_RENAME = 'SLIDE_RENAME';
export const SLIDE_SELECT = 'SLIDE_SELECT';
export const SLIDE_SET_THUMBNAIL= 'SLIDE_SET_THUMBNAIL';
export const EXCHANGE_SLIDE = 'EXCHANGE_SLIDE';
export const SLIDE_SET_NOTE = 'SLIDE_SET_NOTE';


export const setSizeUnit = (unit) => {
  return {
    type: SLIDE_CONTEXT_SET_SIZE_UNIT,
    unit
  }
};

export const setPositionUnit = (unit) => {
  return {
    type: SLIDE_CONTEXT_SET_POSITION_UNIT,
    unit
  }
};

export const setSlideNote = (target, note) => {
  return {
    type: SLIDE_SET_NOTE,
    target,
    note
  }
}

export const createSlide = () =>{
  return {
    type: SLIDE_CREATE
  }
}

export const copySlide = (target) => {
  return {
    type: SLIDE_COPY,
    target
  }
}

export const deleteSlide = (target) =>{
  return {
    type: SLIDE_DELETE,
    target: target
  }
}

export const renameCurrentSlide = (name) =>{
  return {
    type: SLIDE_RENAME,
    name
  }
}

export const selectSlide = (slideId) =>{
  return {
    type: SLIDE_SELECT,
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
    type: SLIDE_SET_THUMBNAIL,
    target,
    thumbnail
  }
}

export const exchangeSlide = (to, from) => {
  return {
    type: EXCHANGE_SLIDE,
    to,
    from
  }
}