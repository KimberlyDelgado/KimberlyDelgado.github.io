var onfirstclick=true;
$(document).ready(function(){
  var card_array = ["fish", "fish", "turtle", "turtle", "pig", "pig", "dog", "dog", "cat", "cat", "snake", "snake", "bird", "bird", "goat", "goat", "hamster", "hamster", "dragon", "dragon"]

  for(i in card_array){
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');
  }
});
$("div.card"). click(function(){
  var mynum=0;
  var firstcard,secondcard;
  $(this).find('p').css("opacity","1");
    if(!onfirstclick){
    //compare cards
  } else{
      firstcard=$(this).find('p').html();
      console.log(firstcard);
   }
  });
});
