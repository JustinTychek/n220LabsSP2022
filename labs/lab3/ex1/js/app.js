function setup() {
  //create the canvas
  createCanvas(800, 800);
}

function draw() {
  //change the background to grey
  background(100);

  //call the rocket function 3 times in 3 different positions
  drawRocket(100, 100);
  drawRocket(300, 500);
  drawRocket(600, 200);
}

//function that creates a rocket drawing
function drawRocket(x, y) {
  //Rocket body and wings
  triangle(x, y, x - 50, y + 190, x + 50, y + 190);
  triangle(x + 29, y + 110, x + 50, y + 190, x + 100, y + 190);
  triangle(x - 29, y + 110, x - 50, y + 190, x - 90, y + 190);

  //Rocket window
  circle(x, y + 90, 30);
}
