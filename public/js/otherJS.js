define([
  'jquery',
  'bootstrap'
], function($,bootstrap){
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    })
    $.fn.stars = function() {
        return $(this).each(function() {
            // Get the value
            var val = parseFloat($(this).html());
            // Make sure that the value is in 0 - 5 range, multiply to get width
            var size = Math.max(0, (Math.min(5, val))) * 16;
            // Create stars holder
            var $span = $('<span />').width(size);
            // Replace the numerical value with stars
            $(this).html($span);
        });
    }
    $('span.stars').stars();
    var trailerVideo = document.getElementById("trailer-video"); 
    $('#modal-trailer').on('hide.bs.modal', function (e) {
      if (!trailerVideo.paused) {
       trailerVideo.pause(); 
      }
    });
    $( window ).resize(function() {
      $('.navbar-collapse').removeClass('in')
      $('.movie').removeClass('spaced');
      $('.movie').children('.arrow-top').css({display:"none"});
      $('.expandable-info').addClass('closed');
      $('.expandable-info').css({"height":"0px"});
    });
});

