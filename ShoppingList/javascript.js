$(document).ready(function(){
  $('Add' button).on('click',function(){
   var item=$('input').val();
   $("div").append('<p>'+item+'</p>')
  });
