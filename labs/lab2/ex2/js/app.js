// Justin Tychek
// 1/20/22
// n220

//global variable for the inital X movement
let moveX = 0;

function setup() {
  //create the canvas
  createCanvas(800, 600);
}

function draw() {
  //change the background color to grey
  background("grey");

  //increase the X value of the circle by 5 every frame
  moveX = moveX + 5;

  //create a circle that moves to the right
  circle(moveX, 300, 60);

  //when the circle gets to the right edge of the canvas, reset it to the left side
  if (moveX > 800) {
    moveX = 0;
  }
}
