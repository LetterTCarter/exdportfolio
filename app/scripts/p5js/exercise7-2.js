var y;
var num = 15;

function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent('sketchDivContainer');
  background(0);
}

function draw() {
  fill(51);
    y = height/2;
    rotate(frameCount / 50.0);
    for(var i = 0; i < num; i++) {
      rect(405, y, 30, 10);
      y += 20;
    }
    y = 0;
    for(var i = 0; i < num; i++) {
      rect(425, y, 30, 10);
      y += 20;
    }
}
