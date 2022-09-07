// Aos Init //
AOS.init();

// slick Init //
$('.slick-slider').slick({
  dots: true,
  speed: 300,
  slidesToShow: 4,
  centerMode: false,
  focusOnSelect: true,
  adaptiveHeight: true,
  zIndex: 999999,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

/* Recaptcha */
function recaptchaCallback() {
  $('#submitBtn').prop('disabled', false);
  $('#verifica').hide();
  $('#sucess').show();
}

function recaptchaExpiredCallback() {
  // Resetear recaptcha en caso de que el captcha expire
  $('#submitBtn').prop('disabled', true);
  grecaptcha.reset();
  $('#sucess').hide();
}

function recaptchaErrorCallback() {
  // Resetear recaptcha en caso de error por network connectivity
  $('#submitBtn').prop('disabled', true);
  grecaptcha.reset();
}
