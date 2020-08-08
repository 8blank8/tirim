$(document).ready(function () {
   $('.slider').slick({
      arrows: true,
      dots: true,
      autoplay: false,
      autoplaySpeed: 10000,
      centerPadding: '100px',
      sladerToShow: 1,
      responsive: [
         {
            breakpoint: 767,
            settings: {
               arrows: false,
               autoplaySpeed: 5000,
            }
         }
      ]
   });
});
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});