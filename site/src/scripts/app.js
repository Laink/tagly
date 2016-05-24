$(function() {
	console.log('test');
  
  $('.js-pasteButton').click(function(e){
    console.log("MAIS PASTE MOI !");
    return false;
  });
  
  $('.js-editIcon').click(function(){
    $('.js-editLabel').hide();
    $('.u-hidden').show();
    $('.u-hidden').focus();
  });
  
  $('.u-hidden').blur(function(){
    $(this).hide();
    $('.js-editLabel').show();
  });
  
  $('.js-ListDisplay').click(function(e){
    if ($(this).hasClass('js-ListDisplay--list')){
      $('.templatesList').addClass('templatesList--list').removeClass('templatesList--grid');
      $('.js-ListDisplay').addClass('opacity');
      $(this).removeClass('opacity');
    }
    else if ($(this).hasClass('js-ListDisplay--grid')){
      $('.templatesList').addClass('templatesList--grid').removeClass('templatesList--list');
      $('.js-ListDisplay').addClass('opacity');
      $(this).removeClass('opacity');
    }
  });
  
});


