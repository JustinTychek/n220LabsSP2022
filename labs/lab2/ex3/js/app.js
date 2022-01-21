// Justin Tychek
// 1/20/22
// n220

//global variable for size
size = 1;

function setup() {
  //create the canvas
  createCanvas(400, 400);
}

function draw() {
  //change the background color
  background("#3f3052");

  //increase the size by 1 every frame
  size++;

  //create the circle that steadily increases in size
  circle(200, 200, size);

  //once the size reaches 200 pixels, reset it back to 1
  if (size == 200) {
    size = 1;
  }
}
