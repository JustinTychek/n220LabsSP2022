//Justin Tychek
//4/6/2022

//take the ids and make them variables
let rSquare = document.getElementById("rSquare");
let gSquare = document.getElementById("gSquare");
let bSquare = document.getElementById("bSquare");

//add event listeners for when the square is clicked
rSquare.addEventListener("click", changeColor);
gSquare.addEventListener("click", changeColor);
bSquare.addEventListener("click", changeColor);

//function that changes the color of the square using the data attribute
function changeColor(event) {
  let color = event.target.getAttribute("data-color");
  event.target.style.backgroundColor = color;
}
