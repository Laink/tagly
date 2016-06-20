$(function() {  
  if (window.location.href.indexOf("?list") > -1) {
      $('body').addClass('js-set');
      $('.js-allpages').addClass('menuItem1').removeClass('menuItem2');
      $('.js-settings').addClass('menuItem2').removeClass('menuItem1');
    }
  
  var urls =["https://blackmilkclothing.com/", "https://blackmilkclothing.com/collections/day-vs-night", "https://blackmilkclothing.com/products/superman-skater-dress"];
  var images =["./images/thumb-home.png", "./images/thumb-list.png", "./images/thumb-product.png"];
  var count = 0;
  
  /* */
  /* paste buttons */
  $('.js-pasteButton--project').click(function(){
    $('.js-pasteInput').val("https://blackmilkclothing.com");
    $('.js-pasteInput').focus();
  });
  
  $('.js-pasteButton--page').click(function(){
    $('.js-pasteInput').val(urls[count]);
//    count++;
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
  
  $('.project-name--index').trigger("focus");
    
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
  
  $('.project-type').change(function(){
    $('.fab').removeClass('u-hidden');
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
  
  $('.js-select-label').click(function(e){
    e.stopPropagation();
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
    var item = "<li class=\"templatesListItem\"> <img src=\""+images[count]+"\" class=\"templatesListImage\"><div class=\"templatesListLabel\"><p class=\"templatesListName\">"+value+"</p></div></li>";
    $('.templatesList').append(item);
    $('#page-url').val('');
    $('.select-labelTxt').text('Select a template type');
    $('.js-select').removeClass('select--chosen');
    count++;
    return false;
  });
  
  $('body').click(function(e){
    $('.js-select').removeClass('select--opened');
  });
  
  $(function() {
    $('.iframe-loader span').animate({
        width: '100%'
      }, 2000, function() {
        $(this).parent().parent().fadeOut();
    });
  }); 

  $('#scroll-to-insight').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#insight').offset().top});
    return false;
  })
});
