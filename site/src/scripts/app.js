$(function() {
	console.log('test');
  
  $('.js-pasteButton').click(function(e){
    console.log("MAIS PASTE MOI !");
    return false;
  });
  
  $('.js-ListDisplay').click(function(e){
    if ($(this).hasClass('js-ListDisplay--list')){
      $('.templatesList').addClass('templatesList--list');
      $('.js-ListDisplay').addClass('opacity');
      $(this).removeClass('opacity');
    }
    else{
      $('.templatesList').removeClass('templatesList--list');
      $('.js-ListDisplay').addClass('opacity');
      $(this).removeClass('opacity');
    }
  });
  
});


