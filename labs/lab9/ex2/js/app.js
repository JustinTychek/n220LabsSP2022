//Justin Tychek
//3/22/2022

//define the IDs as a variable
let dvResults = document.getElementById("dvResults");

//function that generates a random number between 0 and 10
function randomNumb(min, max) {
  return Math.random() * (max - min) + min;
}

//click function that calls the random number functin and displays it on the page
function clickNumb() {
  let number = randomNumb(0, 10);
  dvResults.innerHTML = Math.round(number);
}
