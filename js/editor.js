$(function(){
  initializeTitleTextBar();
  initializeDragMouseEvent();
  accestRightClick();

    $( ".slide-list" ).sortable();
    $( ".slide-list" ).disableSelection();
    $('nav .mdl-layout__tab').on('click', function(){
    $(this).addClass('is-active');
      $('nav .mdl-layout__tab').not($(this)).removeClass('is-active');
    });
});


/* ---------- header accest creator -----------*/
$(function(){
  $('.accest-creator').on('click', function(){
    createAccest($(this).attr('data-type'), $(this).attr('attr'));
  });
});

/* ---------- slide controller -----------*/
var slide_html_list;
var current_idx;
var clearDoc;

$(function(){
  slide_html_list = new Array();
  clearDoc = $('editor').clone();
});

function getClearPPT(){
  var doc = $('editor').clone();
  doc.remove(doc.find('#controller'));
  return doc.html();
}

function createSlide(){
  $('editor').html(clearDoc.html());
  slide_html_list.append(clearDoc.html());
  // slide controller append
}

function viewSlide(idx){
slide_html_list[current_idx] = $('editor').html();
  $('editor').html(slideHtmlList[idx]);
    current_idx = idx;
}


/* ---------- accest controller -----------*/
var accest;
$(function(){
document.createElement('accest');
  var func = function(){
    if(accest!=null)
      accest.text($(this).val());
  }
  $('#text-field-text-preview').on('change', func);
  $('#text-field-text-preview').on('keyup', func);
  $('#font-selection').on('change', function(){
    accest.css('font-family', $('#font-selection').val());
  });
  $('#font-style-bold').change(function() {
    if(this.checked) {
      accest.css('font-weight', 'bold');
    }else{
      accest.css('font-weight', 'normal');
    }
  });
  $('#font-style-italic').change(function() {
    if(this.checked) {
      accest.css('font-style', 'italic');
    }else{
      accest.css('font-style', 'normal');
    }
  });
});

function eventSelectItem(target){
  if(target==null || !target.hasClass('selected')){
    $('.accest-controller').removeClass('on');
    accest = null;
    return;
  }
  accest = target;
    if(accest.attr('type')=='text'){
      $('#text-attribute-controller').addClass('on');
      $('#font-size-controller').val(parseFloat(accest.css('font-size')));
      var colorCode = hexc(accest.css('color'));
        if(colorCode == undefined){
          colorCode = '#000000';
        }
          $('#font-style-bold').prop('checked', false);
          $('#font-style-italic').prop('checked', false);
          if(accest.css('font-weight')=='bold'){
            $('#font-style-bold').prop('checked', true);
          }
            if(accest.css('font-style')=='italic'){
              $('#font-style-italic').prop('checked', true);
            }
      $('#text-field-text-preview').val(accest.text());
      $('#font-color-textfield').val(colorCode);
      $('#font-color-picker').val(colorCode);
    }else  if(accest.attr('type')=='video'){
      $('#video-attribute-controller').addClass('on');
      $('#video-url-controller').val('');
      $('#video-preview-controller').prop('checked', false);
    }
}

//font
function setFontSize(size){
  $('.selected').css('font-size',size+'px');
  $('.selected').css('line-height',size+'px');
}

function setFontColor(color){
    $('.selected').css('color', color);
    $('#font-color-picker').val(color);
    $('#font-color-textfield').val(color);
}

function hexc(colorval) {
  var color;
  try{
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
  }catch(err){}
  return color;
}



//video
function setVideoUrl(url){
  var suburl = url.substring(url.lastIndexOf('/')+1, url.length);
  $('.selected').find('iframe').attr('src', 'https://www.youtube.com/embed/'+url+'?ecver=2');
}

function setVideoPreview(check){
  if(check){
    $('.selected').find('iframe').show();
  }else{
    $('.selected').find('iframe').hide();
  }
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
  $('editor').mousemove(function( event ) {
    if(controlComponent!=null&&controlComponent!=undefined){
      var x = event.pageX;
      var y = event.pageY;
      var afterX = parseInt(controlComponent.css('left')) + (x - xInElement);
      var afterY = parseInt(controlComponent.css('top')) + (y - yInElement);
      xInElement = x;
      yInElement = y;

      moved = true;
      controlComponent.css({top: afterY, left: afterX, position:'absolute'});
    }
  });

  //mouse going out of window
  $('body').mouseleave(function(){
    controlComponent = null;
  });

  $('body').mousedown(function(e){
    var target = $(e.target);
    $('iframe').hide();
    if(!target.hasClass('move_control')&&$('.selected').length&&(target.hasClass('dragable-component')||target.parents('.dragable-component').length)){
      return;
    }
    xInElement = e.pageX;
    yInElement = e.pageY;

    if(!$('.selected').is(target)){
      $('.selected').removeClass('selected');
    }

    if(target.hasClass('move_control')){
      controlComponent = target.closest('.dragable-component');
      e.preventDefault();
    }

    if(target.prop("tagName").toLowerCase()=='accest'){
      controlComponent = target;
      target.addClass('selected');
      e.preventDefault();
    }
    if(target.prop("tagName").toLowerCase()=='input'&&target.hasClass('selected')){
      eventSelectItem(target);
    } else
      eventSelectItem(controlComponent);
    moved = false;
  });

  $('body').on('dblclick', function(e){
    var target = $(e.target);
  if(target.prop("tagName").toLowerCase()=='accest'){
    // if(target.attr('type')=='text'){ //text accest edit text function
    //   var input = $('<input type="'+ target.attr('type') +'" value="'+target.text()+'" class="'+target.attr('class')+' mdl-textfield__input" style="'+target.attr('style')+'">');
    //   target.replaceWith(input);
    //   input.focus();
    //   input.focusout(function(){
    //     target.text(input.val());
    //     if(input.val().length>0)
    //       input.replaceWith(target);
    //     else input.remove();
    //   });
    //   input.keyup(function(e) {
    //     if (e.keyCode == 13){
    //       input.focusout();
    //     }
    //   });
    //   e.preventDefault();
    // }
  }
  });

  $('body').mouseup(function(e) {
      controlComponent = null;
  });
}


/* ---------- drag & drop accests -----------*/

function createAccest(type, attr){
  var accest = $('<accest-warp><accest type="'+type+'"></accest></accest-warp>');
  if(type=='video'){
    accest.find('accest').css('width', '500px');
    accest.find('accest').css('height', '50px');
    accest.find('accest').append($('<iframe src="https://www.youtube.com/embed/Ogv9DOjk9Eo?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0; display:none;" allowfullscreen></iframe>'));
  }else if(type=='text'){
    accest.find('accest').text('text');
  }else if(type=='shape'){
    accest.find('accest').css('width', '50px');
    accest.find('accest').css('height', '50px');
    accest.find('accest').attr('shape', attr);
  }
  accest.find('accest').resizable({ handles: 'n,s,e,w,ne,se,nw,sw' });
  addAccest(accest);
}

function addAccest(accest){
  $('editor').append(accest);
}

function accestRightClick(){
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);
}

/* ---------- save -----------*/

function save(){
  $('editor').find( '.dragable-component' ).remove();
  var editorHtml = $('editor').html();
}
