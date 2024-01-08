$(document).ready(function() {
  $('.splitHdrSpBtn').on('click', function() {
    var splitHdr = $('.splitHdr');
    if (splitHdr.hasClass('is-active')) {
      splitHdr.removeClass('is-active');
    } else {
      splitHdr.addClass('is-active');
    }
  });
});

$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    const targetId = $(this).attr('href');
    const target = $(targetId);

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 300);
    }
  });
});

