'use strict';

$(document).ready(function() {

  $('li a').hover(function(){
    $(this).css('text-shadow', '1px 1px 5px black');
  }, function() {
    $(this).css('text-shadow', 'none');
  });

});
