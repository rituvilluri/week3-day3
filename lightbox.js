$(document).ready(function () {

  /* Open lightbox on image click */
  $('#doggies').on('click', '.lightbox-toggle img', function (e) {
    e.preventDefault();

    $('.backdrop')
      .animate({ 'opacity': '.50' }, 300, 'linear')
      .css('display', 'block');

    $('.box').fadeIn();

    // Clear any previous image in the lightbox
    $('.box').contents('img').remove();

    // Clone the clicked image and add it to the lightbox
    var img = $(this).clone();
    $('.box').append(img);
  });

  /* Click to close lightbox */
  $('.close, .backdrop').click(function () {
    $('.backdrop').animate({ 'opacity': '0' }, 300, 'linear', function () {
      $('.backdrop').css('display', 'none');
    });
    $('.box').fadeOut();
  });

});
