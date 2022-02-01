//Creating the circle object
let objCircle = {
  //properties of the circle
  width: 100,
  height: 250,
  color: "#91bccf",
  stroke: 5,
  size: 150,
};

function setup() {
  //create the canvas
  createCanvas(500, 500);
}

function draw() {
  //make the background grey
  background("#c2c2c2");

  //call the drawcircle function and use the properties from the object
  drawCircle(
    objCircle.color,
    objCircle.stroke,
    objCircle.width,
    objCircle.height,
    objCircle.size
  );
}

//function that draws a circle and takes parameters
function drawCircle(color, stroke, width, height, size) {
  //change the color of the circle
  fill(color);
  //change the stroke weight of the circle
  strokeWeight(stroke);
  //create the circle
  circle(width, height, size);
}
