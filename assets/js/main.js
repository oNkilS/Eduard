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
// $('.new__btn').click(function() {
//     $('.new-business').addClass('active-box');
//     $('.active-business').removeClass('active-box');
//     $('.new__btn').addClass('active');
//     $('.active__btn').removeClass('active');
// });
// $('.active__btn').click(function() {
//     $('.active-business').addClass('active-box');
//     $('.new-business').removeClass('active-box');
//     $('.active__btn').addClass('active');
//     $('.new__btn').removeClass('active');
// });

$('.rew__disc').click(function(){
    $('.reviews__hide').toggleClass('reviews__show')
});
// $('.reasons-item').click(function(){
//     $('.reasons-item > .reasons-item__disc').removeClass('showitem');
//     console.log("gde")
// });
// $('.reasons-item').click(function(){
//     if ($('.reasons-item > reasons-item__disc:not(.showitem)')){
//     $(".reasons-item:hover > .reasons-item__disc:not(.showitem)").addClass("showitem");
//     console.log("mda")
//     } else {
//         $('.reasons-item__disc').removeClass("showitem");
//         console.log("mda2")
//     ;}
// });
$('.reason__close').click(function(){
    $('.reasons-item:hover > .reasons-item__disc').addClass('hide');
    console.log("udalil")
});
$(".reasons-item").mouseout(function(){
    $(".reasons-item__disc").removeClass('hide');
    console.log("mda2")
});
$('.partners__close').click(function(){
    $('.partners__item:hover > .item__discription').addClass('hide');
    console.log("udalil")
});
$(".partners__item").mouseout(function(){
    $(".item__discription").removeClass('hide');
    console.log("mda2")
});

// Скролл шапки
    let header = $('header');
    let hederHeight = header.height(); // вычисляем высоту шапки
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 300) {
       header.addClass('fixed');
      } else {
       header.removeClass('fixed');
      }
    });
    

});

// ответы на вопросы 
$('.faq-item').click(function() {
    $(this).toggleClass('faq__active');
    $('.faq-item').addClass('faq-item__hide')
});
$('.item__adv-button').click(function() {
    $(this).toggleClass('faq__actives');
    $('.faq__close').addClass('close__active');
});
$(document).keyup(function(e) {
	if (e.key === "Escape" || e.keyCode === 27) {
		$('.faq-item').removeClass('faq__active');
        $('.faq__close').removeClass('close__active');
        $('.faq-item').removeClass('faq-item__hide');
        $('.item__adv-button').removeClass('faq__actives');
        $('.showitem').removeClass('showitem');
	}
});
$('.faq__close ').click(function(){
    $('.faq-item').removeClass('faq__active');
    $('.faq__close').removeClass('close__active');
    $('.faq-item').removeClass('faq-item__hide')
    $('.item__adv-button').removeClass('faq__actives')
})
$(function(){
    $(".faq__close").bind('click', function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 400);    
    });
});

// menu
  /**
   * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
   *
   * @private
   * @author Todd Motto
   * @link https://github.com/toddmotto/foreach
   * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
   * @callback requestCallback      callback   - Callback function for each iteration.
   * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
   * @returns {}
   */
   var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

   var hamburgers = document.querySelectorAll(".hamburger");
   if (hamburgers.length > 0) {
     forEach(hamburgers, function(hamburger) {
       hamburger.addEventListener("click", function() {
         this.classList.toggle("is-active");
       }, false);
     });
   }
$('.hamburger').click(function(){
    $('.header-menu').toggleClass('menu-active');
});
// $('.arrow').click(function(){
//     $('.header-menu__drop').toggleClass('dropdown-open');
//     $('.arrow').toggleClass('up');
// });
$('.dropdown').click(function(){
    $('.header-menu__drop').toggleClass('dropdown-open');
    $('.arrow').toggleClass('up');
});

// iphone fix
$('body, html')
    .animate({scrollTop: 0})
    .scrollTop(0);
