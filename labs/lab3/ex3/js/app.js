function setup() {
  //create the canvas
  createCanvas(400, 400);
}

function draw() {
  //store the polar point function in a new variable
  res = polarPoint();

  translate(100, 100);
  circle(res.x, res.y, 50);
}

//create the function for the polar point
function polarPoint(r) {
  x = r * Math.sin(mouseX);
  y = Math.cos(mouseX);
  return createVector(x, y);
}
