export const clearSelection = () => {
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }
}

export const getScanvas = () => {
  let scanvas = document.getElementsByTagName('scanvas')[0];
  return scanvas;
}

export const loadLocalImage = (callback) => {
  var fr = new FileReader();
  fr.onload = callback;
  var inputElement = document.createElement('input');
  inputElement.type = 'file';
  inputElement.addEventListener('change', function () {
    fr.readAsDataURL(inputElement.files[0]);
  });
  inputElement.dispatchEvent(new MouseEvent('click'));
}