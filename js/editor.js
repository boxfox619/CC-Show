$(function(){
  initializeTitleTextBar();
  initializeDragableComponents();
});

function initializeTitleTextBar(){
  var replacement = $('.mdl-textfield__input.header-title');
  var headerTitle = $('.mdl-layout-title.header-title');
    replacement.hide();

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
}

/* ---------- drag & drop layout -----------*/

var controlComponent;
var xInElement, yInElement;
function initializeDragableComponents(){
  initializeDragMouseEvent();
  initializeDragableComponent($('.move_control'));
}

function initializeDragMouseEvent(){
  $('main').mousemove(function( event ) {
    if(controlComponent!=null&&controlComponent!=undefined){
      var xNum = 0;
      var yNum = 0;
      var rect = $('main')[0].getBoundingClientRect();
      var width = controlComponent.width();
      var height = controlComponent.height();
      if(controlComponent.hasClass('dragable-component')){
        xNum = 12;
        yNum = -12;
      }else{
        xNum = controlComponent.width()-xInElement;
        yNum = -(yInElement);
      }

      var x = event.pageX-width+xNum;
      var y = event.pageY-rect.top+yNum;
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

/* ---------- drag & drop accests -----------*/

function createAccest(){
  var accest = $('<div class="accest">test asdaasd</div>');
  addAccest(accest);
}

function addAccest(accest){
  $('main').append(accest);
  initializeAccest(accest);
}

function initializeAccest(accest){
  accest.mousedown(function(evt) {
    controlComponent = accest;
    var offset = accest.offset();
    xInElement = evt.pageX - offset.left;
    yInElement = evt.pageY - offset.top;
  });
}
