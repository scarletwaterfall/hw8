///$(window).scroll(function() {
    ///if ($(document).scrollTop() > 0) {
     ///   $("header").addClass("animate");
 ///   } else {
   ///     $("header").removeClass("animate");
   // }
///});
window.onload = (function() {
 $('.block')
    if ($(document).scrollTop() > 0) {
        document.querySelector('header').addClass("animate");
    } else {
        document.querySelector('header').removeClass("animate");
    }
});
