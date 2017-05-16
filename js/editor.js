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
      if(event.pageX-width<0){
        x=0;
      }else if(event.pageX+12> $(document).width()){
        x = $(document).width()-width;
      }
      if(y<0){
        y =0;
      }
      controlComponent.css({top: y, left: x, position:'absolute'});
    }
  });
  $('body').mouseleave(function(){
    controlComponent = null;
  });
  $('body').mouseup(function() {
    controlComponent = null;
  });
}

function initializeDragableComponent(component){
  component.mousedown(function() {
    controlComponent = component.closest('.dragable-component');
  });
}
