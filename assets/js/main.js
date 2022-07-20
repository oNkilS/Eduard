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

// цифры о нас 


var number = document.querySelector('.number'),
numberTop = number.getBoundingClientRect().top,
start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > numberTop - window.innerHeight / 1.1) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function() {
            number.innerHTML = ++start;
            if(start == end) {
                clearInterval(interval);
            }
        }, 100);
    }
});

var number1 = document.querySelector('.number1'),
number1Top = number1.getBoundingClientRect().top,
start1 = +number1.innerHTML, end1 = +number1.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > number1Top - window.innerHeight / 1.1) {
        this.removeEventListener('scroll', onScroll);
        var interval1 = setInterval(function() {
            number1.innerHTML = ++start1;
            if(start1 == end1) {
                clearInterval(interval1);
            }
        }, 10);
    }
});

var number2 = document.querySelector('.number2'),
number2Top = number2.getBoundingClientRect().top,
start2 = +number2.innerHTML, end2 = +number2.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > number2Top - window.innerHeight / 1.1) {
        this.removeEventListener('scroll', onScroll);
        var interval2 = setInterval(function() {
            number2.innerHTML = ++start2;
            if(start2 == end2) {
                clearInterval(interval2);
            }
        }, 55);
    }
});



