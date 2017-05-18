$(function(){
  initializeTitleTextBar();
  initializeDragMouseEvent();
  accestRightClick();
});

/* ---------- accest controller -----------*/

function eventSelectItem(target){
  if(target==null || target.prop('tagName').toLowerCase()!='accest'){
    $('.accest-controller').removeClass('on');
    return;
  }
  var accest = target;
    if(accest.attr('type')=='text'){
      $('#text-attribute-controller').addClass('on');
      $('#font-size-controller').val(accest.css('font-size'));
    }
}

function setFontSize(size){
  $('.selected').css('font-size',size+'px');
}

/* ---------- title text bar(page name) -----------*/
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

var controlComponent, selectComponent;
var moved;
var xInElement, yInElement;

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
      moved = true;
      controlComponent.css({top: y, left: x, position:'absolute'});
    }
  });

  //mouse going out of window
  $('body').mouseleave(function(){
    controlComponent = null;
  });

  $('body').mousedown(function(e){
    var target = $(e.target);
    if(!target.hasClass('move_control')&&$('.selected').length>0&&$('.selected').prop('tagName').toLowerCase()=='accest'&&(target.hasClass('dragable-component')||target.parents('.dragable-component').length)){

      return;
    }

    if(!$('.selected').is(target))
      $('.selected').removeClass('selected');

    if(target.hasClass('move_control')){
      controlComponent = target.closest('.dragable-component');
      e.preventDefault();
    }
    if(target.prop("tagName").toLowerCase()=='accest'){
      controlComponent = target;
      var offset = target.offset();
      xInElement = e.pageX - offset.left;
      yInElement = e.pageY - offset.top;
      target.addClass('selected');
      e.preventDefault();
    }
    eventSelectItem(controlComponent);
    moved = false;
  });

  $('body').on('dblclick', function(e){
    var target = $(e.target);
  if(target.prop("tagName").toLowerCase()=='accest'){
    if(target.attr('type')=='text'){ //text accest edit text function
      var input = $('<input type="'+ target.attr('type') +'" value="'+target.text()+'" class="'+target.attr('class')+' mdl-textfield__input" style="'+target.attr('style')+'">');
      target.replaceWith(input);
      input.focus();
      input.focusout(function(){
        target.text(input.val());
        if(input.val().length>0)
          input.replaceWith(target);
        else input.remove();
      });
      input.keyup(function(e) {
        if (e.keyCode == 13){
          input.focusout();
        }
      });
      e.preventDefault();
    }
  }
  });

  $('body').mouseup(function(e) {
      controlComponent = null;
  });
}


/* ---------- drag & drop accests -----------*/

function createAccest(){
  var accest = $('<accest type="text" >test asdaasd</accest>');
  addAccest(accest);
}

function addAccest(accest){
  $('main').append(accest);
}

function accestRightClick(){
    document.addEventListener('contextmenu', function(e) {

        e.preventDefault();
    }, false);

}

/* ---------- save -----------*/

function save(){
  $('main').find( '.dragable-component' ).remove();
  var mainHtml = $('main').html();
}
