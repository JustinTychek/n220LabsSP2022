function setup() {
  //create the canvas
  createCanvas(400, 400);
}

function draw() {
  //create a variable to store the red remover function
  let noRed = redRemover(170, 200, 150);

  //fill the circle using the new color
  fill(noRed);

  //create the circle
  circle(100, 100, 50);
}

//function that removes red from the argument
function redRemover(color) {
  //take away the red and store it in the variable
  let newColor = color.setRed(0);

  //return the new variable
  return newColor;
}
