export const colorPicker = {
  TEXT_COLOR: 'TextColor',
  FILL_COLOR: 'FillColor',
  BORDER_COLOR: 'BorderColor'
}

export const toggleFillColorPicker = () => {
  return {
    type: actionTypes.TOGGLE_DIALOG,
    colorPicker: colorPicker.FILL_COLOR
  }
}

export const toggleBorderColorPicker = () => {
  return {
    type: actionTypes.TOGGLE_DIALOG,
    colorPicker: colorPicker.BORDER_COLOR
  }
}

export const toggleTextColorPicker = () => {
  return {
    type: actionTypes.TOGGLE_DIALOG,
    colorPicker: colorPicker.TEXT_COLOR
  }
}
