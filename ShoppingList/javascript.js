$(document).ready(function(){
  $('#add').on('click',function(){//this makes the button add when you click it
   var item=$('input').val();// this keeps track of the word that you put in the input box
   $("div").append('<p>'+item+'</p>')//this adds the word to the div
  });
  $('#remove').on('click',function(){//this makes the button remove the items in the div
    var item=$('input').val();//this keep track of what is in the input
   $('div').empty();//this clears the whole div
})
}
)
