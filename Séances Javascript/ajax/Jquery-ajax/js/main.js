(function($) {

  // $(document).ready(function() {
  
  'use strict';
  
  // find the desired selectors
  var $btn = $('#request');
  var $bio = $('#bio');

  // register an event
  $btn.on('click', function() {
    // hide the button
    $(this).hide();
    // send the request and get the response
    $bio.load('https://www.voyettes.com/lms/elearning/webdev/cours/php/exemples/Jquery-ajax/pages/bio.html p:first-child', completeFunction);
  });
  
  
  // complete function
  function completeFunction(responseText, textStatus, request) {
    // add a border
    $bio.css('border', '1px solid #e8e8e8');
    // uncomment the line below to see the request
    // console.log(request);
    // check if there are any errors
    if(textStatus == 'error') {
      // show a relevant message
      $bio.text('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
    } 
  }
  
// });
  
})(jQuery);