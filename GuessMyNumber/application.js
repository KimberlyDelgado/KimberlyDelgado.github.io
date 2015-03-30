$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var computerChoice = Math.random();
    console.log(computerChoice);
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var userGuess= $('input').val();
    
    
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (userGuess === computerChoice){
      return "Good job! You guesses my number!";
    }
      //what happens if the guess is correct?
      
    //if the user guessed too high...
    else if (userGuess > computerGuess){
      return "Your guess is too high! Guess a lower number!";
    }
      //update the 'feedback' paragraph to tell them to guess lower
      
    //otherwise, the user guessed too low...
    else{
      return "Your guess is too low! Guess higher!";
    }
      //update the 'feedback' paragraph to tell them to guess higher
    
  });
});
