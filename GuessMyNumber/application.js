$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var comp_Integer = Math.floor(Math.random()* 100)
    
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var userGuess= parseInt ($('input').val());
  
    
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (userGuess === comp_Integer){
      confirm ("Congratulations! You guessed the right number!");
    }
      //what happens if the guess is correct?
      
    //if the user guessed too high...
    else if (userGuess > comp_Integer){
      confirm ("Your guess is too high! Guess a lower number!");
    }
      //update the 'feedback' paragraph to tell them to guess lower
      
    //otherwise, the user guessed too low...
    else{
      confirm ("Your guess is too low! Guess higher!");
    }
      //update the 'feedback' paragraph to tell them to guess higher
    
  });
});
