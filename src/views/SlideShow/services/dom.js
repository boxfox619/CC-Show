export const initSlideShow = () => {
    window.addEventListener("keydown", this.handleKeyDown, true);
    window.addEventListener('contextmenu', function (e) { e.preventDefault(); }, false);
    document.oncontextmenu = function () {
      return false;
    };
}
