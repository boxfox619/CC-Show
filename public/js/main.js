$(function() {


try{
  	fullpage.initialize('#fullpage', {
  	});
  }catch(err){}

 let currentSlide = 0;
  var width = $(window).width();
  $(window).on('resize', function(){
      $(".slides").css({ 'left': '0'});
      currentSlide = 0;
 });
  $('#sliderLeft').click(function() {
    console.log("teast121212113");
    if(currentSlide+3==$('.imgSlide').length) return;
        $(".slides").animate({ 'left': '-='+getAmount()}, 'slow');
        currentSlide+=1;
  });
  $('#sliderRight').click(function() {
    console.log("teast12123");
    if(currentSlide==0) return;
        $(".slides").animate({ 'left': '+='+getAmount()}, 'slow');
        currentSlide-=1;
  });
  $('#login_modal_on').click(function(){
    $('.login_modal_wrapper').addClass("login_animation");
  });

  $('.login_modal_wrapper').click(function(event){
    $('.login_modal_wrapper').removeClass('login_animation');
  });

  $('.login_modal').click(function(event){
    event.stopPropagation();
  });
});

var currentHash = 'intro';

function scrollDown(){
  if($('#'+currentHash).next().length>0){
    scrollTo($('#'+currentHash).next().attr('id'));
  }
}

function scrollUp(){
  if($('#'+currentHash).prev().length>0){
    scrollTo($('#'+currentHash).prev().attr('id'));
  }
}

function scrollTo(hash) {
    currentHash = hash;
    location.hash = "#" + hash;
}

function getAmount(){
      let amount = '30.2vw';
      if($(document).width()<1222){
        amount = '45vw';
      }
      if($(document).width()<940){
        amount = '91vw';
      }
      return amount;
}
