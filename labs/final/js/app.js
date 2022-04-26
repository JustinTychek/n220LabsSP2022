//Justin Tychek
//4/15/22

//retrieve the class and store it as a variable
let cards = document.getElementsByClassName("card");
let result = document.getElementById("result");
let turns = document.getElementById("turns");

//loop through the divs with the class and add the event listener
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", chooseCards);
}

//global variables
let cardFlip = false;
let card1 = null;
let card1Html = null;
let card2 = null;
let card2Html = null;
let turnNum = 0;

//function that is invoked when a player clicks on a card
function chooseCards(event) {
  //stores the data attribute as a variable
  let fruit = event.target.dataset.flip;
  let color = event.target.dataset.color;

  //makes the innerHTML of the clicked card display the data attribute
  event.target.innerHTML = fruit;
  event.target.style.color = color;

  //check for there to be two cards flipped
  //if there is not card flipped...
  if (cardFlip == false) {
    //stores the data as the first card
    card1 = event.target.dataset.flip;
    card1Html = event.target;
    cardFlip = true;
  }
  //if there is one card flipped...
  else if (cardFlip == true) {
    //stores the data as the second card
    card2 = event.target.dataset.flip;
    card2Html = event.target;
    //checks for a match after a short delay
    setTimeout(function () {
      checkMatch();
    }, 700);

    cardFlip = false;
  }
}

//function that checks if the two cards are a match
function checkMatch() {
  //if the cards do match....
  if (card1 == card2) {
    //displays that there was a match found in green
    result.innerHTML = "Found a match!";
    result.style.color = "#17c200";

    //remove the border and keep the cards up
    card1Html.style.border = "none";
    card2Html.style.border = "none";

    //adds one to the turn counter
    turnNum++;
    turns.innerHTML = "turn " + turnNum;
  }
  //if the cards don't match...
  else {
    //displays that there was no match found in red
    result.innerHTML = "No Match found";
    result.style.color = "#c41400";

    //remove the innerHTML from the cards
    card1Html.innerHTML = "";
    card2Html.innerHTML = "";

    //adds one to the turn counter
    turnNum++;
    turns.innerHTML = "turn " + turnNum;
  }
}
