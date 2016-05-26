$(function() {
	console.log('test');
  
  /*TODO paste button */
  $('.js-pasteButton').click(function(e){
    console.log("MAIS PASTE MOI !");
    return false;
  });
  
  /* edit project name button */
  $('.js-editIcon').click(function(){
    /* empty the field to prevent cursor to be at the beginning of the field */
    var temp = $('#project-name').val();
    $('#project-name').val('');
    $('#project-name').val(temp);
    
    $('#project-name').show();
    $('#project-name').focus();
  });
  
  $('#project-name').focus(function(){
    $('.js-editIcon').addClass('u-hidden');
  });
  
  $('#project-name').blur(function(){
    $('.js-editIcon').removeClass('u-hidden');
  });
  
  $('input').focus(function(){
    $(this).closest('.formGroup').find('label').addClass('focused');
  });
  
  $('input').blur(function(){
    $(this).closest('.formGroup').find('label').removeClass('focused');
  });
  

  /* step 3 */
  /* switch between list and grid display for templates list*/
  $('.js-ListDisplay').click(function(e){
    if ($(this).hasClass('js-ListDisplay--list')){
      $('.templatesList').addClass('templatesList--list').removeClass('templatesList--grid');
      $('.js-ListDisplay').removeClass('displaySwitch--selected');
      $(this).addClass('displaySwitch--selected');
    }
    else if ($(this).hasClass('js-ListDisplay--grid')){
      $('.templatesList').addClass('templatesList--grid').removeClass('templatesList--list');
      $('.js-ListDisplay').removeClass('displaySwitch--selected');
      $(this).addClass('displaySwitch--selected');
    }
  });
  
});


