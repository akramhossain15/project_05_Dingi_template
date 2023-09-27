
//  scrollTop hide & show js script 
$(document).ready(function(){

   $(window).scroll(function(){
    if ($(this).scrollTop() > 120) {
        $(".scrollTop").fadeIn(1000)
    } else {
        $(".scrollTop").fadeOut(1000)
    }
   })

   // AOS animation
   AOS.init();

})



