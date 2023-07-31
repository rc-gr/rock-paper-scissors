let capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.substr(1).toLowerCase()}`;


function getComputerChoice() {
  let computerChoice = '';
    // Creates equal probability between 0 to 2 inclusive
  let roll = Math.floor(Math.random() * 3);
  
  switch (roll)
  {
    case 0:
      computerChoice = 'rock';
      break;
    case 1:
      computerChoice = 'paper';
      break;
    case 2:
      computerChoice = 'scissors';
      break;
    default:
      console.warn('roll has failed');
      break;
  }

  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let outcome = '';
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
      playerSelection === 'paper' && computerSelection === 'rock'||
      playerSelection === 'scissors' && computerSelection === 'paper') {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    outcome = `${playerSelection} beats ${computerSelection}! You win!`;
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper' ||
      playerSelection === 'paper' && computerSelection === 'scissors' ||
      playerSelection === 'scissors' && computerSelection === 'rock') {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    outcome = `${computerSelection} beats ${playerSelection}! You lose!`;
  }
  else if (playerSelection === computerSelection) {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    outcome = `${playerSelection} ties with ${computerSelection}! It's a draw!`;
  }
  else {
    outcome = `${playerSelection} is not a valid move!`;
  }

  return outcome;
}

