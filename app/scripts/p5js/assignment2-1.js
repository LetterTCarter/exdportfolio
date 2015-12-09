var canvasWidth = 640
var canvasHeight = 480

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketchDivContainer');
};

function draw() {
  background(0);
  shearX(PI / mouseY * 4);
  shearY(PI / mouseX * 4);
  for (x = 0; x <= canvasWidth; x += 50) {
      for (y = 0; y <= canvasHeight; y += 50) {
        line(x, y, canvasWidth/2, canvasHeight/2);
        stroke(0, 174, 239);
      }
    }
};
