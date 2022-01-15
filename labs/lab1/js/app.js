function setup() {
  createCanvas(1300, 750);
  var blue = "#ade1ff";
  background(blue);
}

function draw() {
  var cloud = "#ebedf0";

  //cloud drawing
  fill(cloud);
  stroke(cloud);
  strokeWeight(2);
  circle(200, 250, 150);
  circle(300, 180, 150);
  circle(400, 250, 150);
  circle(300, 320, 150);
  circle(225, 320, 150);
  circle(150, 320, 150);
  circle(375, 320, 150);
  circle(450, 320, 150);

  //sun variables
  var vertical = "900";
  var horizontal = "350";
  var orange = "#ff8c42";
  var darkred = "#a23e48";
  var red = "#ff5f5c";

  //sun circle
  strokeWeight(55);
  stroke(red);
  fill(darkred);
  circle(900, 350, 270);

  //sun outer strokes
  strokeWeight(20);
  stroke(orange);
  line(600, horizontal, 700, horizontal);
  line(1100, horizontal, 1200, horizontal);
  line(vertical, 50, vertical, 150);
  line(vertical, 550, vertical, 650);

  // circle(mouseX, mouseY, frameCount / 50);
}
