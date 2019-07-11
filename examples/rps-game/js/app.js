// set global variables for elements to work with
var choices = document.querySelectorAll('.choice');
var score = document.getElementById('score');
var result = document.getElementById('result');
var restart = document.getElementById('restart');
var modal = document.querySelector('.modal');
var scoreboard = {
  player: 0,
  computer: 0
};

// Play game
function play(e) {
  // console.log(e.target.id);
  // display restart button
  restart.style.display = 'inline-block';
  // get the player choice from input click
  var playerChoice = e.target.id;
  // run function to get computer choice
  var computerChoice = getComputerChoice();
  // get function to determine round winner
  var winner = getWinner(playerChoice, computerChoice);
  // show winner - pass winner and computerChoice
  showWinner(winner, computerChoice);
}

// Get computers choice
function getComputerChoice() {
  // generate random between 0 and 1
  var rand = Math.random();
  // determine outcome
  if (rand < 0.34) {
    // pick rock
    return 'rock';
  } else if (rand <= 0.67) {
    // pick paper
    return 'paper';
  } else {
    // pick scissors
    return 'scissors';
  }
}

// Get game winner - pass in playerChoice/computerChoice
function getWinner(p, c) {
// determine draw
//   if (p === c) {
//     return 'draw';
//   } 
//   // player chooses rock
//   else if (p === 'rock') {
//     if (c === 'paper') {
//       return 'computer';
//     } else {
//       return 'player';
//     }
//   } 
//   // player chooses paper
//   else if (p === 'paper') {
//     if (c === 'scissors') {
//       return 'computer';
//     } else {
//       return 'player';
//     }
//   } 
//   // player chooses scissors
//   else if (p === 'scissors') {
//     if (c === 'rock') {
//       return 'computer';
//     } else {
//       return 'player';
//     }
//   }
// }

    switch(p) {
        // player chooses rock
        case 'rock':
        if (c === 'paper') {
            return 'computer';
        } else if (c === 'scissors') {
            return 'player';
        } else{
            return 'draw';
        }
        // player chooses paper
        case 'paper':
        if (c === 'scissors') {
        return 'computer';
        } else if (c === 'rock') {
        return 'player';
        } else{
            return 'draw';
        }
        // player chooses scissors
        case 'scissors':
        if (c === 'rock') {
            return 'computer';
        } else if (c === 'paper') {
            return 'player';
        } else{
            return 'draw';
        }
    }
}

// Show modal/increment winner totals
function showWinner(winner, computerChoice) {
  //player wins
  if (winner === 'player') {
    // Inc player score
    scoreboard.player++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-win">You Win</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  } 
  // computer wins
  else if (winner === 'computer') {
    // Inc computer score
    scoreboard.computer++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-lose">You Lose</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  } 
  // draw
  else {
    result.innerHTML = `
      <h1>It's A Draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  }
  // Show score
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
// popup modal
  modal.style.display = 'block';
}

// Restart game
function restartGame() {
  // clear scores
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
}

// Clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Event listeners
// player chooses an icon
choices.forEach(choice => choice.addEventListener('click', play));
// click to clear modal
window.addEventListener('click', clearModal);
// restart button
restart.addEventListener('click', restartGame);