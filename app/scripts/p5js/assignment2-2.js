var canvasWidth = 640
var canvasHeight = 500
var xpos = 0
var speed = 4

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketchDivContainer');
}

function draw() {
  background(0);
  xpos = xpos + speed;
  shearX(PI / mouseY * 4);
  shearY(PI / mouseX * 4);
  for (x = xpos; x <= canvasWidth; x += 50) {
      for (y = 0; y <= canvasHeight; y += 50) {
        line(x, y, canvasWidth/2, canvasHeight/2);
        stroke(236, 0, 174);
      }
    }
  if((xpos > width) || (xpos < 0)) {
        speed = speed * -1;
    }
}
