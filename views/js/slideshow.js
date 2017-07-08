
var current_page = 0;
$(function () {
    for (i = 0; i < slide_html_list.length; i++) {
        slide_html_list[i].find('asset').resizable({
            disabled: true
        });
    };
    console.log(slide_html_list[current_page].html(j);
    $('body').append($('<div class="slide-page current">' + slide_html_list[current_page].html() + '</div>'));
    $('body').on('click', doNextSlide);
});

window.addEventListener('message', function (event) {
    alert('test');
});

function doNextSlide() {
//    if (startNotification != undefined)
//        startNotification();
    var current = $('.slide-page.current');
    var next = $('<div class="slide-page next">' + slide_html_list[++current_page].html() + '</div>');
    $('body').append(next);
    next.removeClass('next');
    current.removeClass('current');
    next.addClass('current');
    current.addClass('prev');
//    if (endNotification != undefined)
//        endNotification();
}