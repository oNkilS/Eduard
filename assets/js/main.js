$(function(){
// отзывы
$('.video').click(function() {
    $('.video-box').show();
    $('.audio-box').hide();
    $('.reviews__form').hide();
    $('.reviews__nav').show();
    $('.video').addClass('active');
    $('.audio').removeClass('active');
    $('.reviews-button').removeClass('reviews-button__active');
});
$('.audio').click(function() {
    $('.video-box').hide();
    $('.audio-box').show();
    $('.reviews__form').hide();
    $('.reviews__nav').show();
    $('.audio').addClass('active');
    $('.video').removeClass('active');
    $('.reviews-button').removeClass('reviews-button__active');
});
$('.reviews-button').click(function() {
    $('.video-box').hide();
    $('.audio-box').hide();
    $('.reviews__form').show();
    $('.reviews__nav').hide();
    $('.audio').removeClass('active');
    $('.video').removeClass('active');
    $('.reviews-button').addClass('reviews-button__active');
});
$('.new__btn').click(function() {
    $('.new-business').show();
    $('.active-business').hide();
    $('.new__btn').addClass('active');
    $('.active__btn').removeClass('active');
});
$('.active__btn').click(function() {
    $('.active-business').show();
    $('.new-business').hide();
    $('.active__btn').addClass('active');
    $('.new__btn').removeClass('active');
});
// Скролл шапки
    let header = $('header');
    let hederHeight = header.height(); // вычисляем высоту шапки
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
       });
      } else {
       header.removeClass('fixed');
       $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
       })
      }
    });

});
