$(document).ready(function(){
  $('Add').on('click',function(){
   var item=$('input').val();
   $("div").append('<p>'+item+'</p>')
  });
  $('Remove').on('click',function(){
    var item=$('input').val();
    $('div').empty();
});
