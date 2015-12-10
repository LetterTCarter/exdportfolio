function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent('sketchDivContainer');
}

function draw() {
  clear();
  background(102);
  translate(width*0.5, height*0.5);
  fill(51);
  star(random(), 0, 100, 10, 100);
  noFill();
  for (var i = 0; i < 10; i ++) {
  ellipse(random(), random() + 20, 20, 250);
  rotate(x = sin());
  rotate(frameCount / 100.0);
  }
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
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
