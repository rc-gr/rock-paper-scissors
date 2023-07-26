// get a random move from the computer
function getComputerChoice() {
  // init computer's choice to nothing
  let computerChoice = '';
  // init a random roll between 0 to 3
  // clamp the result of the roll
  let roll = Math.floor(Math.random() * 3);
  
  switch (roll)
  {
    // if the roll is 0
    case 0:
      // set computer's choice to Rock
      computerChoice = 'rock';
      break;
    // else if the roll is 1
    case 1:
      // set computer's choice to Paper
      computerChoice = 'paper';
      break;
    // else if the roll is 2
    case 2:
      // set computer's choice to Scissors
      computerChoice = 'scissors';
      break;
    // else
    default:
      // roll has failed
      console.warn('roll has failed');
      break;
  }

  return computerChoice;
}