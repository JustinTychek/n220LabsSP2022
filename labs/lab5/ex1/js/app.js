//Justin Tychek
//2/8/2022

//define the ID as a variable
let dvSquare = document.getElementById("dvSquare");

//make an object for the square
let Square = {
  //add the attributes for the square
  height: 100,
  width: 100,
  bgColor: "#00FF99",
};

//change the styling of the square
dvSquare.style.backgroundColor = Square.bgColor;
dvSquare.style.height = Square.height + "px";
dvSquare.style.width = Square.width + "px";

//function that makes the square grow by 10% when it is clicked
function grow() {
  //multiply the height and width of the square by 1.1
  Square.height *= 1.1;
  Square.width *= 1.1;

  //change the styling to set the new height and width
  dvSquare.style.height = Square.height + "px";
  dvSquare.style.width = Square.width + "px";
}
