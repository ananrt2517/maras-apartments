$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $("#goToTop").fadeIn();
      } else {
        $("#goToTop").fadeOut();
      }
    });
  
    function goToTop() {
      $("html ,body").animate({ scrollTop: 0 }, 800);
    }
  
    $("#goToTop").click(goToTop);
    $(".fa-angle-up").click(goToTop);
  });