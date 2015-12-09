var pos;
var h;
var xpos = 0;
var speed = 0.5;

function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent('sketchDivContainer');
  angleMode(DEGREES)

  pos = 0.0
  inc = 3.0

  pos2 = 0.0
  inc2 = 4.0

}

function draw() {
  clear();
  noFill();
  stroke(50);
  xpos = xpos + speed;
  translate(width/2, height/2)
  var mySinVal = sin(pos)
  var mySinVal2 = sin(pos2)
  amplified = mySinVal * 100
  amplified2 = mySinVal2 * 100
  for (x = 0; x <= 360; x = x + 20) {
    for (var i = 0; i < 200; i += 20) {
      bezier(xpos, 40+i, amplified2, 20, amplified, 300, 240-(i/16.0), 300+(i/8.0));
    }
    rotate(xpos)
  pos = pos + inc
  pos2 = pos2 + inc2
}
}
