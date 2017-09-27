export const actionTypes = {
  SLIDE_CONTEXT_SET_SIZE_UNIT : "SLIDE_CONTEXT_SET_SIZE_UNIT",
  SLIDE_CONTEXT_SET_POSITION_UNIT : "SLIDE_CONTEXT_SET_POSITION_UNIT",
  SLIDE_CREATE : 'SLIDE_CREATE',
  SLIDE_COPY : 'SLIDE_COPY',
  SLIDE_DELETE : 'SLIDE_DELETE',
  SLIDE_RENAME : 'SLIDE_RENAME',
  SLIDE_SELECT : 'SLIDE_SELECT',
  SLIDE_SET_THUMBNAIL: 'SLIDE_SET_THUMBNAIL',
  EXCHANGE_SLIDE : 'EXCHANGE_SLIDE',
  SLIDE_SET_NOTE : 'SLIDE_SET_NOTE',
  INIT_SHOW_DATA : 'INIT_SHOW_DATA'
};


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

export const renameSlide = (target, name) =>{
  return {
    type: actionTypes.SLIDE_RENAME,
    target: target,
    name
  }
}

export const selectSlide = (target) =>{
  return {
    type: actionTypes.SLIDE_SELECT,
    target: target.id
  }
}

export const updateThumbnailSlide = (target, thumbnail) => {
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

export const initShowData = (data) =>{
  return {
    type: actionTypes.INIT_SHOW_DATA,
    data
  }
}
