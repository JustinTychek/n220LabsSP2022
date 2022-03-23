//Justin Tychek
//3/22/2022

//define the IDs as a variable
let dvDisplay = document.getElementById("dvDisplay");

//array that holds the click keywords
let keywords = ["Home", "About", "Art"];

//onclick function that will choose from the array depending on the number put in the argument.
function chooseWord(array) {
  dvDisplay.innerHTML = "You clicked " + keywords[array];
}
