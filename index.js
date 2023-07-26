// get a random move from the computer
// returns: the chosen move from the computer
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

// play a round between player and computer
// input: player's selection
// input: computer's selection
// returns: outcome declaring the winner of the round
{
  // make player's selection case-insensitive
  
  // if player is rock and computer is scissors, player wins
  // if player is paper and computer is rock, player wins
  // if player is scissors and computer is paper, player wins

  // if player is rock and computer is paper, player loses
  // if player is paper and computer is scissors, player loses
  // if player is scissors and computer is rock, player loses

  // if player and computer chose the same, it's a tie

  // else player chose an invalid move
}