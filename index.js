let capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.substr(1).toLowerCase()}`;

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
function playRound(playerSelection, computerSelection)
{
  // init outcome to nothing
  let outcome = '';
  // make player's selection case-insensitive
  playerSelection = playerSelection.toLowerCase();

  // if player is rock and computer is scissors, player wins
  // if player is paper and computer is rock, player wins
  // if player is scissors and computer is paper, player wins
  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
      playerSelection === 'paper' && computerSelection === 'rock'||
      playerSelection === 'scissors' && computerSelection === 'paper') {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    // set outcome to player's move beats computer's and player wins
    outcome = `${playerSelection} beats ${computerSelection}! You win!`;
  }
  // if player is rock and computer is paper, player loses
  // if player is paper and computer is scissors, player loses
  // if player is scissors and computer is rock, player loses
  else if (playerSelection === 'rock' && computerSelection === 'paper' ||
      playerSelection === 'paper' && computerSelection === 'scissors' ||
      playerSelection === 'scissors' && computerSelection === 'rock') {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    // set outcome to computer's move beats player's and player loses
    outcome = `${computerSelection} beats ${playerSelection}! You lose!`;
  }
  // if player and computer chose the same, it's a tie
  else if (playerSelection === computerSelection) {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    // set outcome to player's move ties with computers and tie it up
    outcome = `${playerSelection} ties with ${computerSelection}! It's a draw!`;
  }
  // else player chose an invalid move
  else {
    // set outcome to player choosing an invalid move
    outcome = `${playerSelection} is not a valid move!`
  }

  // return the outcome
  return outcome;
}

// play 5 rounds of Rock, Paper, Scissors
function game() {
  // play for 5 rounds
  {
    // get player's move
    // play a round between player and computer
    // print the outcome of the round
  }
}