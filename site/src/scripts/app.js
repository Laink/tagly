$(function() {
	console.log('Hello Tagy Gérec');
  /* */
  /* paste buttons */
  $('.js-pasteButton--project').click(function(){
    console.log("MAIS PASTE MOI !");
    $('.js-pasteInput').val("http://asos.com");
    $('.js-pasteInput').focus();
  });
  
  $('.js-pasteButton--page').click(function(){
    console.log("MAIS PASTE MOI !");
    $('.js-pasteInput').val("http://asos/product.com");
    $('.js-pasteInput').focus();
  });
  
  $('#project-url').focus(function(){
    $('.js-pasteButton--project').removeClass('u-hidden');
  });
  $('#project-url').blur(function(){
    $('.js-pasteButton--project').addClass('u-hidden');
  });
  
  $('#page-url').focus(function(){
    $('.js-pasteButton--page').removeClass('u-hidden');
  });
  $('#page-url').blur(function(){
    $('.js-pasteButton--page').addClass('u-hidden');
  });
  
  /* */
  /* edit project name button */
  /* */
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
  
  /* */
  /* change label color on input focus */
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
  
  /* select */
  
  $('.js-select-label').click(function(){
    $('.js-select').toggleClass('select--opened');
  });
  
  $('.js-select-close').click(function(e){
    e.stopPropagation();
    $('.js-select').removeClass('select--opened');
  });
  $('.select-option').click(function(e){
    var res = $(e.target).text();
    console.log(res);
    $('.select-labelTxt').text(res);
    $('.js-select').addClass('select--chosen');
    $('.js-select').removeClass('select--opened');
  });
  
  $('.js-add-template').click(function(){
    var value=  $('.select-labelTxt').text();
    var item = "<li class=\"templatesListItem\"> <img src=\"http://fakeimg.pl/144x90/\" class=\"templatesListImage\"><div class=\"templatesListLabel\"><p class=\"templatesListName\">"+value+"</p></div></li>";
    $('.templatesList').append(item);
    $('#page-url').val('');
    $('.select-labelTxt').text('Select a template type');
    $('.js-select').removeClass('select--chosen');
    return false;
  });
  
});
