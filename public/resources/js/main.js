var currentHash = 'intro';
var logined = false;
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
    if (currentSlide + 3 == $('.imgSlide').length) return;
    $(".slides").animate({
      'left': '-=' + getAmount()
    }, 'slow');
    currentSlide += 1;
  });

  $('#sliderRight').click(function () {
    if (currentSlide == 0) return;
    $(".slides").animate({
      'left': '+=' + getAmount()
    }, 'slow');
    currentSlide -= 1;
  });

  $('#login_modal_on').click(function () {
    if(logined){
      window.location='/show';
    }else
    $('.login_modal_wrapper').addClass("login_animation");
  });

  $('.login_modal_wrapper').click(function (event) {
    $('.login_modal_wrapper').removeClass('login_animation');
  });

  $('.login_modal').click(function (event) {
    event.stopPropagation();
  });

  $('#login').click(function () {
    let id = $('.signup_input')[0].value;
    let password = $('.signup_input')[1].value;
    if(id.length==0 || password.length==0){
      $('#signin_msg').text('모든 항목을 입력해 주세요!');
      return;
    }
    let data = {
      id: id,
      password: password
    }
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: '/account/login',
      success: function (result) {
        window.location.href='/show';
      },
      error: function (result) {
        $('#signin_msg').text(result.responseText);
      }
    });
  });

  $('#signup').click(function () {
    let id = $('.signup_input')[2].value;
    let password = $('.signup_input')[3].value;
    let password2 = $('.signup_input')[4].value;
    let nickname = $('.signup_input')[5].value;
    if(id.length==0 || password.length==0|| nickname.length==0){
      $('#signup_msg').text('모든 항목을 입력해 주세요!');
      return;
    }
    if(password!=password2){
      $('#signup_msg').text('비밀번호가 일치하지 않습니다!');
      return;
    }
    let data = {
      id: id,
      password: password,
      nickname: nickname
    }
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: '/account/register',
      success: function (result) {
        $('.signin').css('display', 'block');
        $('.signup').css('display', 'none');
        clearForm();
      },
      error: function (result) {
        $('#signup_msg').text(result.responseText);
      }
    });
  });

  $('.signup_button').click(function () {
    $('.signin').css('display', 'none');
    $('.signup').css('display', 'block');
    clearForm();
  });


//check logined
    $.ajax({
      type: 'GET',
      url: '/account/check',
      success: function (result) {
        logined = result.result;
      }
    });
});


function clearForm(){
  $('#signup_msg').text('');
  $('#signin_msg').text('');
  $('.signup_input').map((input)=>{
    input.value = '';
  })
}

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

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
