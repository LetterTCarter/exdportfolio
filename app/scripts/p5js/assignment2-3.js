var canvasWidth = 640
var canvasHeight = 500
var xpos = 0
var speed = 3

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketchDivContainer');
};

function draw() {
  fill(236, 0, 174);
  shearX(PI / mouseY * 4);
  shearY(PI / mouseX * 4);
  for (x = 0; x <= canvasWidth+50; x += 60) {
      for (y = xpos; y <= canvasHeight+50; y += 60) {
        rect(x, y, 25, 25);
      }
    }
  xpos = xpos + speed;
  stroke(255, 242, 0);
  for (x = xpos; x <= canvasWidth+50; x += 60) {
      for (y = 0; y <= canvasHeight+50; y += 60) {
        line(x, y, canvasWidth/2, canvasHeight/2);
      }
    }
  if((xpos > width) || (xpos < 0)) {
        speed = speed * -1;
    }
};
