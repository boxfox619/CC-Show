export const actionTypes = {
  SLIDE_CONTEXT_SET_SIZE_UNIT : "SLIDE_CONTEXT_SET_SIZE_UNIT",
  SLIDE_CONTEXT_SET_POSITION_UNIT : "SLIDE_CONTEXT_SET_POSITION_UNIT",
  SLIDE_CREATE : 'SLIDE_CREATE',
  SLIDE_COPY : 'SLIDE_COPY',
  SLIDE_DELETE : 'SLIDE_DELETE',
  SLIDE_RENAME : 'SLIDE_RENAME',
  SLIDE_SELECT : 'SLIDE_SELECT',
  EXCHANGE_SLIDE : 'EXCHANGE_SLIDE'
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
    target: target.id
  }
}

export const renameSlide = (target, name) =>{
  return {
    type: actionTypes.SLIDE_RENAME,
    target: target.id,
    name
  }
}

export const selectSlide = (target) =>{
  return {
    type: actionTypes.SLIDE_SELECT,
    target: target.id
  }
}

export const exchangeSlide = (to, from) => {
  return {
    type: actionTypes.EXCHANGE_SLIDE,
    to,
    from
  }
}
