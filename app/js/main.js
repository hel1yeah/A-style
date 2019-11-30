$(window).load(function(){
  $('.service-right__wrapper').slick({ //если поставить $(document).ready(function() слайдер при первой загрузге не появляется
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      asNavFor: '.service-left__wrapper',

      prevArrow: '<img class=" slider-arrow-prev" src="images/arrow-prev.png" alt="prev">',
      nextArrow: '<img class="slider-arrow-next" src="images/arrow-next.png" alt="left">',
    });

    $('.service-left__wrapper').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      asNavFor: '.service-right__wrapper',
      arrows: false,
    });

    $('.comment__slider').slick({
      dots: false,
      infinite: true,
      speed: 800,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 6000,

      prevArrow: '<img class=" slider-arrow-prev" src="images/arrow-prev.png" alt="prev">',
      nextArrow: '<img class="slider-arrow-next" src="images/arrow-next.png" alt="left">',
    });

    
    //---------------------------------МОДАЛЬНЫЕ ОКНА---------------------------------

    //Обращаетмся к дата модал и говорим, что при нажатии на кнопку, у которой есть данный "класс" происходит открытие модального окна и тёмной завесы
    $('[data-modal=press-buttons]').on('click', function () {
      $('.overlay, .modal').fadeIn('slow');
    });
    
    $('.modal__close').on('click', function () {
      $('.overlay, .modal').fadeOut('slow');
    });


    //---------------------------------КНОПКА ВОЗВРАЩЕНИЯ ВВЕРХ---------------------------------
    
    //следит за тем, сколько пикеселей ушло вверх. При скроле 600 пикселей появляется кнопка. Если меньше, она пропадает
    $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
        $('.press-up').fadeIn('slow');
      } else {
        $('.press-up').fadeOut('slow');
      }
    });

    //при нажатии на кнопку стринца возвращается на первый экран. 
    $('.press-up').click(function(e){
      e.preventDefault();
      
      $('html, body').animate({
          scrollTop: 0
      });
    });


  //ПРИ НАЖАТИИ НА КАРТИНКУ МЕДЛЕННО СКРОЛИТСЯ НА СЛЕДУЮУЩЮ СЕКЦИЮ

  //при нажатии на картинку, происходит функция
  $('.mouse-down').on('click', function () {
    //обращение к html и body, происходит анимация
    $('html, body').animate( {
      //скроллинг вниз на определённое расстояние. Затем говорится, что это должно делаться медленно
      scrollTop: $('header').height() + 205}, 'slow');
  });

  //  нужно активировать WOW.js.
  new WOW().init();

});



// СРАБАТЫВАНИЕ И ПОЛОЖЕНИЕ БУРГЕРА 

const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    $('.burger-nav').toggleClass('burger-nav_active');
  });
});

$(document).ready(function () {

  //E-mail Ajax Send
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  //МАСКА ВВОДА НОМЕРА НА САЙТЕ 

  $('input[name=phone]').mask("+ 380 -99-99-99-999"); 


});


