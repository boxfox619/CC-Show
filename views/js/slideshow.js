
var slide_html_list;
var current_page;
$('body').on('click', doNextSlide);
function doNextSlide() {
    if (startNotification != null)
        startNotification();
    var current = $('.slide-page.current');
    var next = $('<div class="slide-page next">' + slide_html_list[++current] + '</div>');
    next.removeClass('next');
    current.removeClass('current');
    next.addClass('current');
    current.addClass('prev');
    if (endNotification != null)
        endNotification();
}