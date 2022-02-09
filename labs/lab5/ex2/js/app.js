//Justin Tychek
//2/8/2022

//define the ID as a variable
let dvBlueSquare = document.getElementById("blueSquare");

//make an object for the square
let Square = {
  //add the attributes for the square
  height: 100,
  width: 100,
  bgColor: "#7477d6",
};

//change the styling of the square
dvBlueSquare.style.backgroundColor = Square.bgColor;
dvBlueSquare.style.height = Square.height + "px";
dvBlueSquare.style.width = Square.width + "px";

//function that makes the square black when the mouse hovers over it
function makeBlack() {
  dvBlueSquare.style.backgroundColor = "#000000";
}

//function that changes the square back to blue when the mouse stops hovering over it
function makeBlue() {
  dvBlueSquare.style.backgroundColor = Square.bgColor;
}
