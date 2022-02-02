//create the pet object
let objPet = {
  //add properties to the pet
  x: 100,
  y: 100,
  size: 50,
  offsetX: 0,
  color: "#523200",
};

function setup() {
  //create the canvas
  createCanvas(1000, 500);
}

function draw() {
  //make the background green
  background("#05a300");

  //if the mouse is pressed, bring the ball towards the mouse
  if (mouseIsPressed) {
    objPet.offsetX -= 1;
  }
  //if the mouse is released, make the ball move away from the mouse
  else {
    objPet.offsetX += 1;
  }

  //when the offsetX reaches 0, keep it at 0
  if (objPet.offsetX < 0) {
    objPet.offsetX = 0;
  }

  //change the color of the circle
  fill(objPet.color);
  //draw the circle
  circle(mouseX + objPet.offsetX, mouseY, objPet.size, objPet.offsetX);
}
