$(function(){
// отзывы
$('.video').click(function() {
    $('.video-box').addClass('active-box');
    $('.audio-box').removeClass('active-box');
    $('.reviews__form').removeClass('active-box');
    $('.reviews__nav').show();
    $('.video').addClass('active');
    $('.audio').removeClass('active');
    $('.reviews-button').removeClass('reviews-button__active');
});
$('.audio').click(function() {
    $('.video-box').removeClass('active-box');
    $('.audio-box').addClass('active-box');
    $('.reviews__form').removeClass('active-box');
    $('.reviews__nav').show();
    $('.audio').addClass('active');
    $('.video').removeClass('active');
    $('.reviews-button').removeClass('reviews-button__active');
});
$('.reviews-button').click(function() {
    $('.video-box').removeClass('active-box');
    $('.audio-box').removeClass('active-box');
    $('.reviews__form').addClass('active-box');
    $('.reviews__nav').hide();
    $('.audio').removeClass('active');
    $('.video').removeClass('active');
    $('.reviews-button').addClass('reviews-button__active');
});
$('.new__btn').click(function() {
    $('.new-business').addClass('active-box');
    $('.active-business').removeClass('active-box');
    $('.new__btn').addClass('active');
    $('.active__btn').removeClass('active');
});
$('.active__btn').click(function() {
    $('.active-business').addClass('active-box');
    $('.new-business').removeClass('active-box');
    $('.active__btn').addClass('active');
    $('.new__btn').removeClass('active');
});

$('.reviews__title span').click(function(){
    $('.reviews__hide').toggleClass('reviews__show')
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

// ответы на вопросы 
$('.faq-item').click(function() {
    $(this).toggleClass('faq__active');
    $('.faq__close').addClass('close__active');
});
$(document).keyup(function(e) {
	if (e.key === "Escape" || e.keyCode === 27) {
		$('.faq-item').removeClass('faq__active');
        $('.faq__close').removeClass('close__active');
	}
});
$('.faq__close ').click(function(){
    $('.faq-item').removeClass('faq__active');
    $('.faq__close').removeClass('close__active');
})
