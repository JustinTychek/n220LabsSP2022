//Justin Tychek
//4/6/2022
//take the ids and make them variables
let colorDiv = document.getElementById("colorDiv");
let displayColorDiv = document.getElementById("displayColorDiv");
let red1 = document.getElementById("red1");
let red5 = document.getElementById("red5");
let red10 = document.getElementById("red10");
let green1 = document.getElementById("green1");
let green5 = document.getElementById("green5");
let green10 = document.getElementById("green10");
let blue1 = document.getElementById("blue1");
let blue5 = document.getElementById("blue5");
let blue10 = document.getElementById("blue10");

//add the event listener that activates when the buttons are clicked
red1.addEventListener("click", addRed);
red5.addEventListener("click", addRed);
red10.addEventListener("click", addRed);
green1.addEventListener("click", addGreen);
green5.addEventListener("click", addGreen);
green10.addEventListener("click", addGreen);
blue1.addEventListener("click", addBlue);
blue5.addEventListener("click", addBlue);
blue10.addEventListener("click", addBlue);

//array of rgb colors starting at black
let colors = [0, 0, 0];

//function that increases the red when the buttons are clicked
function addRed(event) {
  //get the data attribute from the buttons
  let number = Number(event.target.getAttribute("data-value"));

  //add the data attribute to the first value in the array
  colors[0] += number;

  //changes the background color using the colors array
  colorDiv.style.backgroundColor =
    "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";

  //displays the current color in a div
  displayColorDiv.innerHTML =
    "Current Color: rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
}

//function that increases the green when the buttons are clicked
function addGreen(event) {
  //get the data attribute from the buttons
  let number = Number(event.target.getAttribute("data-value"));

  //add the data attribute to the second value in the array
  colors[1] += number;

  //changes the background color using the colors array
  colorDiv.style.backgroundColor =
    "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";

  //displays the current color in a div
  displayColorDiv.innerHTML =
    "Current Color: rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
}

//function that increases the blue when the buttons are clicked
function addBlue(event) {
  //get the data attribute from the buttons
  let number = Number(event.target.getAttribute("data-value"));

  //add the data attribute to the third value in the array
  colors[2] += number;

  //changes the background color using the colors array
  colorDiv.style.backgroundColor =
    "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";

  //displays the current color in a div
  displayColorDiv.innerHTML =
    "Current Color: rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
}
