

// Menu-toggle button

$(document).ready(function() {
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
      });
});

// Scrolling Effect

$(window).on("scroll", function() {
      if($(window).scrollTop()) {
            $('nav').addClass('black');
      }

      else {
            $('nav').removeClass('black');
      }
})
$(document).ready(function(){   
      setTimeout(function () {
          $("#cookieConsent").fadeIn(200);
       }, 4000);
      $("#closeCookieConsent, .cookieConsentOK").click(function() {
          $("#cookieConsent").fadeOut(200);
      }); 
  }); 
  

