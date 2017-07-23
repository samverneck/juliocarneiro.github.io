var artigos = function jobs() {
        $('.box').hover(function(){
        $('#jobs-inside', this).fadeIn();
    }, function(){
        $('#jobs-inside', this).fadeOut();
    });
};
$(document).ready(artigos);

var scroll = function scroll() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
};
$(document).ready(scroll);