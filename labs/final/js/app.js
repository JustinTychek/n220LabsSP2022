//Justin Tychek
//4/15/22

let cards = document.getElementsByClassName("card");
let testing = document.getElementById("testing");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", chooseCards);
}

let cardFlip = false;
let card1 = null;
let card1Html = null;
let card2 = null;
let card2Html = null;

function chooseCards(event) {
  let fruit = event.target.dataset.flip;
  event.target.innerHTML = fruit;

  if (cardFlip == false) {
    card1 = event.target.dataset.flip;
    card1Html = event.target;
    cardFlip = true;
  } else if (cardFlip == true) {
    card2 = event.target.dataset.flip;
    card2Html = event.target;
    setTimeout(function () {
      checkMatch();
    }, 700);

    cardFlip = false;
  }
}

function checkMatch() {
  if (card1 == card2) {
    console.log("Found a match!");
    card1Html.style.border = "none";
    card2Html.style.border = "none";
    // card2Html.classList.remove("card");
  } else {
    console.log("No Match found");
    card1Html.innerHTML = "";
    card2Html.innerHTML = "";
  }
}

// console.log(cardFlip);
