$(function () {


  try {
    fullpage.initialize('#fullpage', {});
  } catch (err) {}

  let currentSlide = 0;
  var width = $(window).width();
  $(window).on('resize', function () {
    $(".slides").css({
      'left': '0'
    });
    currentSlide = 0;
  });
  $('#sliderLeft').click(function () {
    console.log("teast121212113");
    if (currentSlide + 3 == $('.imgSlide').length) return;
    $(".slides").animate({
      'left': '-=' + getAmount()
    }, 'slow');
    currentSlide += 1;
  });
  $('#sliderRight').click(function () {
    console.log("teast12123");
    if (currentSlide == 0) return;
    $(".slides").animate({
      'left': '+=' + getAmount()
    }, 'slow');
    currentSlide -= 1;
  });
  $('#login_modal_on').click(function () {
    $('.login_modal_wrapper').addClass("login_animation");
  });

  $('.login_modal_wrapper').click(function (event) {
    $('.login_modal_wrapper').removeClass('login_animation');
  });

  $('.login_modal').click(function (event) {
    event.stopPropagation();
  });

  $('#login').click(function () {
    let id = $('.login_input')[0].value;
    let password = $('.login_input')[1].value;
    let data = {
      id: id,
      password: password
    }
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: 'http://localhost:3001/account/login',
      success: function (result) {
        console.log(result);
      },
      error: function (result) {
        console.log(result.responseText);
      }
    });
  });

  $('#signup').click(function () {
    let id = $('.signup_input')[0].value;
    let password = $('.signup_input')[1].value;
    let nickname = $('.signup_input')[2].value;
    let data = {
      id: id,
      password: password,
      nickname: nickname
    }
    console.log(data);
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: 'http://localhost:3001/account/register',
      success: function (result) {
        console.log(result);
        $('.signin').css('display', 'block');
        $('.signup').css('display', 'none');
      },
      error: function (result) {
        console.log(result.responseText);
      }
    });
  });

  $('.signup_button').click(function () {
    $('.signin').css('display', 'none');
    $('.signup').css('display', 'block');
  });
});

var currentHash = 'intro';

function scrollDown() {
  if ($('#' + currentHash).next().length > 0) {
    scrollTo($('#' + currentHash).next().attr('id'));
  }
}

function scrollUp() {
  if ($('#' + currentHash).prev().length > 0) {
    scrollTo($('#' + currentHash).prev().attr('id'));
  }
}

function scrollTo(hash) {
  currentHash = hash;
  location.hash = "#" + hash;
}

function getAmount() {
  let amount = '30.2vw';
  if ($(document).width() < 1222) {
    amount = '45vw';
  }
  if ($(document).width() < 940) {
    amount = '91vw';
  }
  return amount;
}