//create the ball object
let objBall = {
  //add the properties for the balls position, speed, and color
  xPos: 0,
  yPos: 0,
  xSpeed: 5,
  ySpeed: 5,
  color: "#e82382",
};

function setup() {
  //create the canvas
  createCanvas(800, 600);
}

function draw() {
  //make the background grey
  background("grey");

  //make the ball move diagonally
  objBall.yPos += objBall.ySpeed;
  objBall.xPos += objBall.xSpeed;

  //when the y position of the ball reaches the edges of the canvas, make it bounce off
  if (objBall.yPos < 0) {
    objBall.ySpeed = -objBall.ySpeed;
  } else if (objBall.yPos > 600) {
    objBall.ySpeed = -objBall.ySpeed;
  }

  //when the x position of the ball reaches the edges of the canvas, make it bounce off
  if (objBall.xPos < 0) {
    objBall.xSpeed = -objBall.xSpeed;
  } else if (objBall.xPos > 800) {
    objBall.xSpeed = -objBall.xSpeed;
  }

  //change the color of the ball
  fill(objBall.color);

  //create the ball
  circle(objBall.xPos, objBall.yPos, 30);
}
