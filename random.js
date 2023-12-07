//Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random(1) * 100) + 1;
// Function to check the user's guess
function checkGuess(userGuess) {
  if (userGuess < randomNumber) {
    return "Too low! please try again later.";
  } else if (userGuess > randomNumber) {
    return "Too high! please try again!.";
  } else {
    return "You are correct! You guessed the right number!";
  }
}
// an example
const userGuess = 42;
const feedback = checkGuess(userGuess);
console.log(feedback);