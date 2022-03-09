//Justin Tychek
//2/16/2022

//define the ID as a variable
let divScore = document.getElementById("score");
let divResults = document.getElementById("results");

//global variable to keep score of wins and losses
let score = 0;

//array of possible choices for rock, paper, scissors
let choices = ["rock", "paper", "scissors"];

//function that calculates the winner of rock, paper, scissors
function battle(player, computer) {
  //if the player chooses to guard, lose half a point
  if (player == guard) {
    score -= 0.5;
  }
  //if player and computer pick the same option, tie
  else if (player == computer) {
    score += 0;
  }
  //victory by rock
  else if (player == rock && computer == "scissors") {
    score++;
  }
  //victory by scissors
  else if (player == scissors && computer == "paper") {
    score++;
  }
  //vicotry by paper
  else if (player == paper && computer == "rock") {
    score++;
  }
  //Loss by rock
  else if (player == rock && computer == "paper") {
    score--;
  }
  //Loss by scissors
  else if (player == scissors && computer == "rock") {
    score--;
  }
  //loss by paper
  else if (player == paper && computer == "scissors") {
    score--;
  }

  //return the score from that round
  return score;
}

//function that is activated if the player clicks on rock
function pickRock() {
  //picks a random value from the choices array to be the computers choice
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];

  //call the battle function, with the player's choice being rock
  battle(rock, randomChoice);

  //display the new score on the page
  divScore.innerHTML = "Score = " + score;
  //display the result on the page
  divResults.innerHTML = "You chose rock, computer chose " + randomChoice;
}

//function that is activated if the player clicks on paper
function pickPaper() {
  //picks a random value from the choices array to be the computers choice
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  //call the battle function, with the player's choice being paper
  battle(paper, randomChoice);

  //display the new score on the page
  divScore.innerHTML = "Score = " + score;
  //display the result on the page
  divResults.innerHTML = "You chose paper, computer chose " + randomChoice;
}

function pickScissors() {
  //picks a random value from the choices array to be the computers choice
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  //call the battle function, with the player's choice being scissors
  battle(scissors, randomChoice);

  //display the new score on the page
  divScore.innerHTML = "Score = " + score;
  //display the result on the page
  divResults.innerHTML = "You chose scissors, computer chose " + randomChoice;
}

function pickGuard() {
  //picks a random value from the choices array to be the computers choice
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];

  //call the battle function, with the player's choice being guard
  battle(guard, randomChoice);

  //display the new score on the page
  divScore.innerHTML = "Score = " + score;
  //display the result on the page
  divResults.innerHTML = "You chose guard, computer chose " + randomChoice;
}
