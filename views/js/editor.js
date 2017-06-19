$(function(){
  initializeTitleTextBar();
  initializeDragMouseEvent();
  accestRightClick();

    $('nav .mdl-layout__tab').on('click', function(){
      if($(this).attr('view')!=null)
        viewController($(this).attr('view'));
    });
});

/* ---------- font controller part values ----------*/
var fontSizes = [2, 4, 6, 8, 12, 14, 24, 32, 64];
var fontFamilyArr = ["Agency FB", "Antiqua", "Architect" , "Arial", "BankFuturistic", "BankGothic", "Blackletter", "Blagovest", "Calibri", "Comic Sans MS", "Courier", "Cursive", "Decorative", "Fantasy", "Fraktur", "Frosty", "Garamond", "Georgia", "Helvetica", "Impact", "Minion", "Modern", "Monospace", "Open Sans",
"Palatino", "Roman", "Sans-serif", "Serif", "Script", "Swiss", "Times", "Times New Roman", "Tw Cen MT", "Verdana"];
/* ---------- font controller part values end ----------*/



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

/* ---------- slide controller -----------*/
var slide_html_list;
var current_idx = 0;
var clearDoc;
var sliderCleanItem;
var sliderItemClick;

$(function(){
  slide_html_list = new Array();
  sliderCleanItem = $( ".slide-list" ).children(0).clone();
  $( '.slide-list li[idx="0"] div' ).addClass('is-selected');
  sliderItemClick = function(){ viewSlide($(this).attr('idx')); };
  clearDoc = $('editor').clone();
  $( ".slide-list" ).sortable();
  $( ".slide-list" ).disableSelection();
  $( ".slide-list li" ).on('click', sliderItemClick);
  slide_html_list.push($('editor').html());
});

function getClearPPT(){
  var doc = $('editor').clone();
  return doc.html();
}

function createSlide(){
  var idx = slide_html_list.length;
  $( ".slide-list" ).append(sliderCleanItem.clone().attr('idx', idx).on('click', sliderItemClick));
  slide_html_list.push(clearDoc.html());
  viewSlide(idx);
}

function viewSlide(idx){
  $('.slide-list li .is-selected').removeClass('is-selected');
  $('.slide-list li[idx="'+idx+'"] div').addClass('is-selected');
  slide_html_list[current_idx] = $('editor').html();
  $('editor').html(slide_html_list[idx]);
  current_idx = idx;
}


/* ---------- accest controller -----------*/

$(function(){
document.createElement('accest');
  var func = function(){
    if($('.selected')!=null)
      $('.selected').text($(this).val());
  }


  /* ------------------------------------------
     ---------- font controller part ----------
     ------------------------------------------ */
  $('#text-field-text-preview').on('change', func);
  $('#text-field-text-preview').on('keyup', func);
  $('#font-selection').on('change', function(){
    $('.selected').css('font-family', $('#font-selection').val());
  });

  //text align controller
  $('#text-align-controller').find('input[type="checkbox"]').on('change',function(){
    if($('.selected')!=null)
      $('.selected').css('text-align', $(this).val());
  });

  //font style controller
  $('#font-italic-toggle').on('change',function(){
    if($('.selected')!=null)
    if($(this).prop('checked')) {
      $('.selected').css('font-style', 'italic');
    }else{
      $('.selected').css('font-style', 'normal');
    }
  });
  $('#font-bold-toggle').on('change',function(){
    if($('.selected')!=null)
    if($(this).prop('checked')) {
      $('.selected').css('font-weight', 'bold');
    }else{
      $('.selected').css('font-weight', 'normal');
    }
  });

  /* --------- font size controll ---------- */
  $('#font-size-controller').find('.mdl-chip__text').on('change',function(){
    if(!$(this).text().match(/px$/))
      $(this).text($(this).text()+'px');
    if($('.selected')!=null){
        $('.selected').css('font-size',$(this).text());
        $('.selected').css('line-height',$(this).text());
    }
  });

  function onFontSizeSelect(){
    var target = $('#'+$(this).parents('item-chooser').attr('for')).find('.mdl-chip__text');
    target.text($(this).text());
    target.trigger('change');
    $('.is-visible').removeClass('is-visible');
  };

  function onFontSizeChange(){
    var target = $('#'+$(this).parents('item-chooser').attr('for')).find('.mdl-chip__text');
    target.text($(this).val());
    target.trigger('change');
  };

  fontSizes.forEach(function(element, index, array){
    $('item-chooser[for="font-size-controller"]').append($('<li class="mdl-menu__item">'+element+'</li>').on('click', onFontSizeSelect));
  })
  $('item-chooser[for="font-size-controller"]').append($('<input type="number" class="mdl-menu__item"/>').on('change', onFontSizeChange));

    /* --------- font size controll end ---------- */


  /* --------- font family controll ---------- */
  $('#font-family-controller').find('.mdl-chip__text').on('change',function(){
    if($('.selected')!=null){
        $('.selected').css('font-family',$(this).text());
    }
  });

  function onFontSelect(){
    var target = $('#'+$(this).parents('item-chooser').attr('for')).find('.mdl-chip__text');
    target.text($(this).text());
    target.trigger('change');
  };

  fontFamilyArr.forEach(function logArrayElements(element, index, array) {
    $('item-chooser[for="font-family-controller"]').append($('<li class="mdl-menu__item" style="font-family:\''+element+'\'">'+element+'</li>').on('click', onFontSelect));
  });
    /* --------- font family controll end ---------- */


  /* ------------------------------------------
     ---------- font controller part end ----------
     ------------------------------------------ */


 /* --------- video control ---------- */
  $('#video-preview-switch').on('change', function(){
    setVideoPreview($(this).prop('checked'));
    })
    });
$('#video-url-input').on('change', function () {
    console.log('test');
});
//url

 /* --------- video control end ---------- */

  function eventSelectItem(target){
    if(target==null || !target.hasClass('selected')){
      $('.accest-controller').removeClass('on');
      $('.color-picker').css("display", 'none');
      return;
    }
    viewController($('.controller[accest-type="'+$('.selected').attr('type')+'"]').attr('id'));

    if($('.selected').attr('type')=='text'){
      $('#text').addClass('on');

      $('#font-size-controller').find('.mdl-chip__text').text($('.selected').css('font-size'));
        var colorCode = hexc($('.selected').css('color'));
        if(colorCode == undefined){
          colorCode = '#000000';
        }

        imageToggleButtonPropChange('font-bold-toggle', false);
        imageToggleButtonPropChange('font-italic-toggle', false);
      if($('.selected').css('font-weight')=='bold'){
        imageToggleButtonPropChange('font-bold-toggle', true);
      }
      if($('.selected').css('font-style')=='italic'){
        imageToggleButtonPropChange('font-italic-toggle', true);
      }

      //need controller
      $('#text-field-text-preview').val($('.selected').text());
      $('#font-color-textfield').val(colorCode);
      $('#font-color-picker').val(colorCode);

    }else  if($('.selected').attr('type')=='video'){
      $('#video-attribute-controller').addClass('on');
      $('#video-url-controller').val('');
      $('#video-preview-switch').prop('checked', false);
      $('#video-preview-switch').parent().removeClass('is-checked');
    }
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
    if(target.parents('.controller').length||target.hasClass('controller')||!target.hasClass('move_control')&&$('.selected').length&&(target.hasClass('dragable-component')||target.parents('.dragable-component').length)){
      return;
    }
    xInElement = e.pageX;
    yInElement = e.pageY;

    if(!$('.selected').is(target)){
      $('.selected').removeClass('selected');
      viewController('accest-creator');
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


/* ---------- header accest controller -----------*/
$(function(){
  //accest creator
  $('.accest-creator').on('click', function(){
    createAccest($(this).attr('accest-type'), $(this).attr('attr'));
  });

  $('.radio-button-group').find('input[type="checkbox"]').on('change', function(){
    $(this).parent().parent().find('.mdl-icon-toggle').not($(this).parent()).removeClass('is-checked');
    $(this).parent().parent().find('input[type="checkbox"]').not($(this)).prop('checked', false);
  });
});

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



/* ---------- image toggle button util -----------*/
function imageToggleButtonPropChange(id, val){
  if(val)
    $('#'+id).parent().addClass('is-checked');
    else
      $('#'+id).parent().removeClass('is-checked');
    $('#'+id).prop('checked', val);
}

function viewController(id){
  $('nav .mdl-layout__tab').removeClass('is-active');
  $('nav .mdl-layout__tab[view='+id+']').addClass('is-active');
  $('.controller').removeClass('is-selected');
  $('#'+id).addClass('is-selected');
}







/* ---------- color picker ---------- */
$('#color-text').val($('#color-input').val());
$('.color-pick').find('.mdl-chip__text').on('change', function(){
  var color = $(this).text();
  if($('.selected')!=null)
    $('.selected').css('color', color);
});

$('#color-text').on('change', function() {
  console.log('target.html()');
  $('#color-input').val($('#color-text').val());
  $('.color-picker').attr('data-value', $('#color-text').val());
  var target = $('.color-pick').find('.mdl-chip__text');
  target.text($(this).val());
  target.trigger('change');
});

$('#color-input').change(function() {
  $('#color-text').val($(this).val().toUpperCase());
  $('.color-picker').attr('data-value', $(this).val().toUpperCase());
  $('#color-text').trigger('change');
});

$('.color-pick').click(function(e) {
  var rect = $(this).offset();
  $('.color-translate').css("transform", 'translate(' + (rect.left-150) + 'px, ' + (rect.top) + 'px)');
  $('.color-picker').css("display", 'inline-flex');
});

$('#color-picker-close').click(function() {
  $('.color-picker').css("display", 'none');
});

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

$('.color-picker > div:not(#close)').click(function() {
  let bg = $(this).css('background-color');
  $('.paper-button').css('background-color', bg);
  $('#color-input').val(rgb2hex($(this).css('background-color')));
  $('#color-input').change();
});
