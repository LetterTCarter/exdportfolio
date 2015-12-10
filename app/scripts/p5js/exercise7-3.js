function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent('sketchDivContainer');
  background(0);
  colorMode(HSB, 360, 100, 100);
  noLoop();
}

function draw() {
  h = random(0, 360);
  fill(h, 90, 90);
  noStroke();
  star(width/2 + 1, height/2 + 5, 100 * 2, random() * 50, 100);
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI * random() / npoints;
  var halfAngle = angle/random();
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mousePressed() {
  redraw();
}

function keyPressed() {
  clear();
  background(0);
}
