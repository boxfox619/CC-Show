$(function(){
  initializeTitleTextBar();
  initializeDragMouseEvent();
  assetRightClick();

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


/* ------------------------------------------
   ---------- slider part ----------
   ------------------------------------------ */
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

  $('slider .title .hide').on('click', function () {
      $(this).parents('slider').addClass('hide');
  });
});

function getClearPPT(){
  var doc = $('editor').clone();
  return doc.html();
}

function createSlide(){
  var idx = slide_html_list.length;
  $( ".slide-list" ).append(sliderCleanItem.clone().attr('idx', idx).on('click', sliderItemClick));
  slide_html_list.push(clearDoc.clone());
  viewSlide(idx);
}

function viewSlide(idx){
  $('.slide-list li .is-selected').removeClass('is-selected');
  $('.slide-list li[idx="'+idx+'"] div').addClass('is-selected');
  slide_html_list[current_idx] = $('editor').clone();
  $('editor').html(slide_html_list[idx].html());
  current_idx = idx;
}

function saveSlide() {
    slide_html_list[current_idx] = $('editor').clone();
}

/* ---------- slide controller end -----------*/

function viewSlidePreview() {
    saveSlide();
    var myWindow = window.open();
    var target = slide_html_list[current_idx].clone();
    target.find('asset').resizable({
        disabled: true
    });
    myWindow.document.write('<html>' + $('head').append('<link rel="stylesheet" href="./css/viewer-style.css">').clone().wrapAll("<div/>").parent().html() + ("<body>") + target.html() + ("</body>") + '</html>');
}
  /* ------------------------------------------
     ---------- slider part end ----------
     ------------------------------------------ */

/* ---------- asset controller -----------*/

$(function(){
document.createElement('asset');
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
      var link = $(this).val();
      let params = new URL(url).searchParams;
      var suburl = params.get('v');
      link = 'https://www.youtube.com/embed/' + suburl + '?ecver=2';
    setVideoUrl(link);
});

$('#video-autoplay-checkbox').on('change', function () {
    var link = $('.selected').find('iframe').attr('src');
    if ($(this).prop('checked')) {
        link = addQuery(link, 'autoplay=1');
    } else {
        link = removeQuery(link, 'autoplay=1');
    }
    setVideoUrl(link);
});

$('#video-controller-checkbox').on('change', function () {
    var link = $('.selected').find('iframe').attr('src');
    if (!$(this).prop('checked')) {
        link = removeQuery(link, 'showinfo=0');
        link = removeQuery(link, 'controls=0');
    } else {
        link = addQuery(link, 'showinfo=0');
        link = addQuery(link, 'controls=0');
    }
    setVideoUrl(link);
});

function addQuery(url, query) {
    if (url.includes('?')) {
        url += '&' + query;
    } else {
        url += '?' + query;
    }
    return url;
}

function removeQuery(url, query) {
    if (url.includes('&')) {
        if (url.includes('?' + query)) {
            url = url.replace(query+'&', '');
        } else {
            url = url.replace('&' + query, '');
        }
    } else {
        url = url.replace('?'+query, '');
    }
    return url;
}

function setVideoUrl(url) {
    console.log(url);
    $('.selected').find('iframe').attr('src', url);
    $('.selected').find('iframe').contentDocument.location.reload(true);
    videoAssetClear();
}

function setVideoPreview(check) {
    if (check) {
        $('.selected').find('iframe').show();
    } else {
        $('.selected').find('iframe').hide();
    }
}

function videoAssetClear() {
    setVideoPreview(false);
    $('.mdl-switch[for=video-preview-switch]').removeClass('is-checked');
}

 /* --------- video control end ---------- */


 /* --------- image control ---------- */
$(function () {
    var fr = new FileReader();
    fr.onload = function (e) {;
        if ($('.selected').attr('type') == 'image')
                $('.selected').css('background-image', 'url("'+this.result+'")');
    };
    $('#image-input').on("change", function () {
        console.log('test');
        fr.readAsDataURL($('#image-input').get(0).files[0]);
    });
    $('#image-chooser').on('click', function () {
        $('#image-input').trigger('click');
    });
});


 /* --------- image control end ---------- */

  function eventSelectItem(target){
    if(target==null || !target.hasClass('selected')){
      $('.asset-controller').removeClass('on');
      $('.color-picker').css("display", 'none');
      return;
    }
    viewController($('.controller[asset-type="'+$('.selected').attr('type')+'"]').attr('id'));

    var type = $('.selected').attr('type');
    if (type=='text'){
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
      $('#color-text').val(colorCode);
      $('#color-input').val(colorCode);
      $('.color-pick .mdl-chip__text').text(colorCode);
    } else if (type=='video'){
      $('#video-attribute-controller').addClass('on');
      $('#video-url-controller').val('');
      $('#video-preview-switch').prop('checked', false);
      $('#video-preview-switch').parent().removeClass('is-checked');
    } else if (type == 'shape'){
        var colorCode = hexc($('.selected').css('background-color'));
        if (colorCode == undefined) {
            colorCode = '#000000';
        }
        $('#color-text').val(colorCode);
        $('#color-input').val(colorCode);
        $('.color-pick .mdl-chip__text').text(colorCode);
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

  $('body').mousedown(function (e) {
      var target = $(e.target);
      $('.context-menu').hide();
      if (target.parents('.context-menu').length|| target.parents('.controller').length || target.hasClass('controller') || !target.hasClass('move_control') && $('.selected').length && (target.hasClass('dragable-component') || target.parents('.dragable-component').length)) {
        return;
    }
    xInElement = e.pageX;
    yInElement = e.pageY;

    if(!$('.selected').is(target)){
      videoAssetClear();
      $('.selected').removeClass('selected');
      viewController('asset-creator');
    }

    if(target.hasClass('move_control')){
      controlComponent = target.closest('.dragable-component');
      e.preventDefault();
    }

    if(target.prop("tagName").toLowerCase()=='asset'){
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
  if(target.prop("tagName").toLowerCase()=='asset'){
     if(target.attr('type')=='text'){ //text asset edit text function
         var input = $('<textarea class="' + target.attr('class') + '" style="' + target.attr('style') + '">' + target.text()+'</textarea>');
       target.replaceWith(input);
       input.focus();
       input.focusout(function () {
         target.text(input.val());
         if (input.val().length > 0) {
             input.replaceWith(target);
             target.resizable({ handles: 'n,s,e,w,ne,se,nw,sw' });
         }
        else input.remove();
      });
      e.preventDefault();
    }
  }
  });

  $('body').mouseup(function(e) {
      controlComponent = null;
  });
}

/* ---------- header asset controller -----------*/
$(function(){
  //asset creator
  $('.asset-creator').on('click', function(){
    createasset($(this).attr('asset-type'), $(this).attr('attr'));
  });

  $('.radio-button-group').find('input[type="checkbox"]').on('change', function(){
    $(this).parent().parent().find('.mdl-icon-toggle').not($(this).parent()).removeClass('is-checked');
    $(this).parent().parent().find('input[type="checkbox"]').not($(this)).prop('checked', false);
  });
});

/* ---------- drag & drop assets -----------*/

/* ------------------------------------------
   ---------- font controller part end ----------
   ------------------------------------------ */

function createasset(type, attr){
  var asset = $('<asset-warp><asset type="'+type+'"></asset></asset-warp>');
    asset.find('asset').css('width', '50px');
    asset.find('asset').css('height', '50px');
  if(type=='video'){
    asset.find('asset').css('width', '500px');
    asset.find('asset').css('height', '50px');
    asset.find('asset').append($('<iframe src="https://www.youtube.com/embed/Ogv9DOjk9Eo?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0; display:none;" allowfullscreen></iframe>'));
  }else if(type=='text'){
    asset.find('asset').text('text');
  }else if(type=='shape'){
    asset.find('asset').attr('shape', attr);
  } else if (type == 'image') {
      asset.find('asset').css('background-image', 'url("data:image/jpeg;base64,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")');
      asset.find('asset').css('background-size', '100% 100%');
      asset.find('asset').css('background-position', 'center');
      $('#image-input').trigger('click');
  }
  asset.find('asset').resizable({ handles: 'n,s,e,w,ne,se,nw,sw' });
  addasset(asset);
}

function addasset(asset) {
    $('.selected').removeClass('selected');
    asset.find('asset').addClass('selected');
    $('editor').append(asset);
}

var clipasset;
function assetRightClick(){
    document.addEventListener('contextmenu', function (e) {
        var target = $(event.target);
        $('#asset-context-menu').find('tr').removeClass('disabled');
        if (target.is("editor") || target.parents("editor").length) {
            if (!target.is("asset")) {
                $('#asset-context-menu').find('tr').addClass('disabled');
            }
            if (clipasset != null) {
                $('#asset-context-menu').find('tr[action="paste"]').removeClass('disabled');
            } else {
                $('#asset-context-menu').find('tr[action="paste"]').addClass('disabled');
            }
            $('#asset-context-menu').show();
            $('#asset-context-menu').css('top', event.pageY + "px");
            $('#asset-context-menu').css('left', event.pageX + "px");
            e.preventDefault();
        }
    }, false);
    $('#asset-context-menu').find('tr').mousedown( function (e) {
        var action = $(this).attr('action');
        if (action == 'delete') {
            $('.selected').parents('asset-warp').remove();
        } else if (action == 'copy') {
            clipasset = $('.selected').parents('asset-warp').clone();
        } else if (action == 'cut') {
            clipasset = $('.selected').parents('asset-warp');
            clipasset.detach();
            console.log(clipasset.html());
        } else if (action == 'paste') {
            $('editor').append(clipasset);
            clipasset = null;
        }
    });
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
  if ($('.selected') != null) {
      if ($('.selected').attr('type')=='text')
          $('.selected').css('color', color);
      else if ($('.selected').attr('type') == 'shape')
          $('.selected').css('background-color', color);
  }
});

$('#color-text').on('change', function() {
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

