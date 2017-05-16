var replacement = $('.mdl-textfield__input.header-title');
var headerTitle = $('.mdl-layout-title.header-title');

$(function(){
  replacement.hide();
  initializeDragMouseEvent();
  initializeDragableComponent($('.move_control'));
});

var focusout = function(){
  replacement.hide();
  headerTitle.text(replacement.val());
  headerTitle.show();
};

var headerClick = function(){
  replacement.val(headerTitle.text());
  headerTitle.hide();
  replacement.show();

  replacement.focusout(focusout);
  replacement.keyup(function(e) {
    if (e.keyCode == 13) focusout();
  });
  replacement.focus();
};

headerTitle.on('click', headerClick);
headerTitle.css('cursor', 'pointer');


/* ---------- drag & drop layout -----------*/
var controlComponent;

function initializeDragMouseEvent(){
  $('main').mousemove(function( event ) {
    if(controlComponent!=null&&controlComponent!=undefined){
      var rect = $('main')[0].getBoundingClientRect();
      var width = controlComponent.width();
      var height = controlComponent.height();
      var x = event.pageX-width+12;
      var y = event.pageY-rect.top-12;
      controlComponent.css({top: y, left: x, position:'absolute'});
    }
  });
  $('main').mouseleave(function(){
    controlComponent = null;
  });
}

function initializeDragableComponent(component){
  component.mouseup(function() {
    controlComponent = null;
  });
  component.mousedown(function() {
    controlComponent = component.closest('.dragable-component');
  });
}
