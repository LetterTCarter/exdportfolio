var system, lifespan; //add more variables i.e. system1, 2 to create more particlesystems
var field;
var fcenterX, fcenterY;

var   pos = 0.0;
var   inc = 2.0;

var   pos2 = 0.0;
var   inc2 = 7.0;


function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent('sketchDivContainer');
  colorMode(HSB, 360, 100, 100);
  background(0);
  fcenterX = width/2;
  fcenterY = height/2;
  system = new ParticleSystem(createVector(fcenterX, fcenterY));
}

function draw() {
  fill(0, 10);
  rect(0, 0, width, height);
  system.addParticle();
  system.run();
}

var Particle = function(position) {
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.position = position.copy();
	this.lifespan = 10;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.x += random(-1, 1);
  this.position.y += random(-1, 1);
  this.position.add(this.velocity);
  this.lifespan -= 1;
};

// Method to display
Particle.prototype.display = function() {
  h = random(0, 360);
  fill(h, 90, 90);
  noStroke();
  ellipse(this.position.x, this.position.y, 15, 15);
};

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
  for (var i = this.particles.length-1; i < 250; i--) {
    var p = this.particles[i];
    p.run();
  if (p.isDead()) {
    Particle.prototype.isDead;
  }
 }
};
