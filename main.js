/*
Task 1
- set of if statements to determine rock paper scissors winner
- The two moves stored in variables
- Hard code each move in these variables
- Complete when all permutationss of the combined moves have been handled.

- Create constants with each move 
- Create variables for player and computer move

Create an if statement with permutations below
Draw    
   if cMove = Rock and Pmove = Rock, 
    if cMove = Paper and Pmove = Paper,
    if cMove = Scissors and Pmove = Scissors

    Player Wins 
     if pMove = Rock and Cmove = Scissors or 
     if pMove = Paper and Cmove = Rock or
     if pMove = Scissors and Cmove = Paper

  Computer Wins (don't need to include this)
    if cMove = Rock and Pmove = Scissors, 
    if cMove = Paper and Pmove = Rock,
    if cMove = Scissors and Pmove = Paper


*/

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// let playerMove = PAPER;
// let computerMove = ROCK;

// if (playerMove === computerMove) {
//   console.log("Its a draw!!");
// } else if (
//   (playerMove === ROCK && computerMove === SCISSORS) ||
//   (playerMove === PAPER && computerMove === ROCK) ||
//   (playerMove === SCISSORS && computerMove === PAPER)
// ) {
//   console.log("Player Wins!");
// } else {
//   console.log("Computer Wins!");
// }

// TASK 2
/* 
- Create function using the if/else statements
- Use our variables as function parameters for the moves
- Do not print result to console
- instead, return 1 if player wins
  0 for draw
  -1 if computer wins

- function should be able to return any permutation of moves.
- console.log result variable to test it
*/

function getWinner(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return 0;
  } else if (
    (playerMove === ROCK && computerMove === SCISSORS) ||
    (playerMove === PAPER && computerMove === ROCK) ||
    (playerMove === SCISSORS && computerMove === PAPER)
  ) {
    return 1;
  } else {
    return -1;
  }
}

let result = getWinner(ROCK, PAPER);
console.log(result);
