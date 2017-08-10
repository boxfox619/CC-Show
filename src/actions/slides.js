export const actionTypes = {
  SLIDE_CONTEXT_SET_SIZE_UNIT : "SLIDE_CONTEXT_SET_SIZE_UNIT",
  SLIDE_CONTEXT_SET_POSITION_UNIT : "SLIDE_CONTEXT_SET_POSITION_UNIT",
  SLIDE_CREATE : 'SLIDE_CREATE',
  SLIDE_DELETE : 'SLIDE_DELETE',
  SLIDE_RENAME : 'SLIDE_RENAME',
  SLIDE_SELECT : 'SLIDE_SELECT',
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

export const deleteSlide = (target) =>{
  return {
    type: actionTypes.SLIDE_DELETE,
    target
  }
}

export const renameSlide = (target, name) =>{
  return {
    type: actionTypes.SLIDE_RENAME,
    target,
    name
  }
}

export const selectSlide = (target) =>{
  return {
    type: actionTypes.SLIDE_SELECT,
    target
  }
}
