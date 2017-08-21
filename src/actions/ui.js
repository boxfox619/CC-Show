export const actionTypes = {
  SLIDE_MANAGER : 'SLIDE_MANAGER'
}

export const showSlideManager = ()=>{
  return {
    type: actionTypes.VISIBLE_SLIDE_MANAGER,
    state: true
  }
}

export const hideSlideManager = ()=>{
  return {
    type: actionTypes.SLIDE_MANAGER,
    state: false
  }
}
