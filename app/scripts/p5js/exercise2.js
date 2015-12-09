var canvasWidth = 640
var canvasHeight = 480
var xpos = 0
var ypos = 0
var speed = 2

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketchDivContainer');
}

function draw() {
  background(0);
  xpos = xpos + speed;
  for (x = xpos-1; x <= canvasWidth; x += 50) {
      for (y = 0; y <= canvasHeight; y += 50) {
        line(x, y, canvasWidth/1, canvasHeight/2);
        stroke(0, 174, 239)
      }
    }
  for (x = xpos-1; x <= canvasWidth; x += 50) {
       for (y = 0; y <= canvasHeight; y += 50) {
         line(x, y, 0, canvasHeight/2);
         stroke(236, 0, 140)
       }
     }
  if((xpos > width) || (xpos < 0)) {
      speed = speed * -1;
    }
    ypos = ypos + speed;
    for (x = 50; x <= canvasWidth; x += 50) {
       for (y = ypos/2; y <= canvasHeight-1; y += 50) {
          line(x, y, canvasWidth/2, canvasHeight/2);
          stroke(255, 242, 0)
        }
      }

  if((ypos > height) || (ypos < 0)) {
      speed = speed * -1;
    }
}
