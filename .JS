//Menu toggle-button for small screens
$(document).ready(function (){

    $(".menu-icon").on("click", function() {
      $("nav ul").toggleClass("showing");
    });
    
  });
  
  //Scrolling Effect for nav
  $(window).on("scroll", function() {
    if($(window).scrollTop()) {
      $('nav').addClass('black');
    } else {
      $('nav').removeClass('black');
    }
  });



  $("button").click(function(){
    $("div").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });


    
  });