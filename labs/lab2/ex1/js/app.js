// Justin Tychek
// 1/20/22
// n220

function setup() {
  //create the canvas
  createCanvas(400, 300);
}

function draw() {
  //change the background color to grey
  background("grey");

  //create a circle that follows the mouse
  circle(mouseX, mouseY, 30);

  // if the mouse is on the right side of the canvas, make the circle red
  if (mouseX > 200) {
    fill("red");
  }
  // if the mouse is on the left side of the canvas, make the circle blue
  else {
    fill("blue");
  }
}
