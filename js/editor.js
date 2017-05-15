var replacement = $('.mdl-textfield__input.header-title');
var headerTitle = $('.mdl-layout-title.header-title');

$(function(){
  replacement.hide();
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
