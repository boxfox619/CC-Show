export const actionTypes = {
  SLIDE_CONTEXT_SET_SIZE_UNIT : "SLIDE_CONTEXT_SET_SIZE_UNIT",
  SLIDE_CONTEXT_SET_POSITION_UNIT : "SLIDE_CONTEXT_SET_POSITION_UNIT"
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
