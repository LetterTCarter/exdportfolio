var systems;
var system;
// A wind direction vector
var wind;
// Circle position
var position;
var myInterval
var xoff = 0.0;
var xincrement = 5.0;
var n, q;
var x = 0;

function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent('sketchDivContainer');
  background(0);
  noStroke();
  pos = 0.0
  inc = 4.0
  systems = [];
  // Request the data from openweathermap
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=Greeley,CO&units=imperial&APPID=7bbbb47522848e8b9c26ba35c226c734';
  loadJSON(url, gotWeather);
  // Circle starts in the middle
  position = createVector(width/2, height/2);
  // wind starts as (0,0)
  wind = createVector();
  noLoop();
}

function draw() {
  fill(117, 76, 36);
  rect(0, 460, width, 22);
  for (i = 0; i < systems.length; i += 35) {
    systems[i].run();
    systems[i].addParticle();
  }
  n = noise(xoff)*width;
  // With each cycle, increment xoff
  xoff += xincrement;
  this.p = new ParticleSystem(createVector(n, 230));
  systems.push(p);
  push();
  translate(32, height - 32);
  // Rotate by the wind's angle
  rotate(wind.heading() + PI/2);
  noStroke();
  fill(175);
  ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();

  // Move in the wind's direction
  position.add(wind);
}

function keyTyped() {
  if (key === 'c') {
    loop();
  }
  else if (key === 'l') {
    stroke(250, 250, 150);
    line(n + random(100), 480, n + random(-100, 100), 230);
  }
  else if (key === 'r') {
    // add the rain
    myInterval = setInterval(function() {
    var mySinVal = sin(pos)
    amplified = mySinVal * 250
    q = random(mySinVal, width);
    xoff += xincrement;
    noStroke();
    fill(20, 70, 150);
    ellipse(q, 480 + amplified, random(2), position.y);
    pos = pos + inc }, 50);
  }
  else if (key === 's') {
    noLoop();
    clearInterval(myInterval)
  }
}

function gotWeather(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.wind.deg));
  // Get the wind speed
  var windmag = Number(weather.wind.speed);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.main.temp) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind = p5.Vector.fromAngle(angle);
}

//function mousePressed() {
//  this.p = new ParticleSystem(createVector(mouseX, mouseY));
//  systems.push(p);
//}

var Particle = function(position) {
  this.acceleration = createVector();
  this.velocity = createVector(random(-5, 3), random(-3, 1));
  this.position = position.copy();
  this.position.add(wind);
  this.lifespan = 115;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.position.add(wind);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  noStroke();
  fill(200, this.lifespan);
  ellipse(this.position.x, this.position.y, random(65), random(55));
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0.0 ) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      Particle.prototype.isDead;
    }
  }
};
