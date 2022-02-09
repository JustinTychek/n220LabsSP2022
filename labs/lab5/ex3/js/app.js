//Justin Tychek
//2/8/2022

//define the ID as a variable
let dvMyBox = document.getElementById("myBox");

//make an object for the box
let Box = {
  //add the attributes for the box
  height: 300,
  width: 600,
  bgColorRed: "#ba3f3f",
  bgColorGreen: "#15ad7b",
  size: 50,
};

//change the styling of the box
dvMyBox.style.backgroundColor = Box.bgColorGreen;
dvMyBox.style.height = Box.height + "px";
dvMyBox.style.width = Box.width + "px";
dvMyBox.style.fontSize = Box.size + "px";

//function that swaps the width and height of the box, changes the color, and changes the innerhtml
function swap() {
  dvMyBox.style.backgroundColor = Box.bgColorRed;
  dvMyBox.style.height = Box.width + "px";
  dvMyBox.style.width = Box.height + "px";
  dvMyBox.innerHTML = "STOP!";
}
