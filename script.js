'use strict';

$(document).ready(function() {

  $('.navLinks a').hover(function(){
    $(this).addClass('linkHoverStyles');
  }, function() {
    $(this).removeClass('linkHoverStyles');
  }).click(function(){
    $('p#framePlaceHolder').css('display', 'none');
    var $link = $(this).attr('href');
    $('iframe').attr('src', $link);
  });
});
