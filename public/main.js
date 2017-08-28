$(function() {
 let currentSlide = 0;
  var width = $(window).width();
  $(window).on('resize', function(){
      $(".slides").css({ 'left': '0'});
      currentSlide = 0;
 });
  $('#sliderLeft').click(function() {
    if(currentSlide+3==$('.slide').length) return;
        $(".slides").animate({ 'left': '-='+getAmount()}, 'slow');
        currentSlide+=1;
  });
  $('#sliderRight').click(function() {
    if(currentSlide==0) return;
        $(".slides").animate({ 'left': '+='+getAmount()}, 'slow');
        currentSlide-=1;
  });
});

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
