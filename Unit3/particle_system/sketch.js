let myCar1 ;
let cars = [] ;
let particles ;

function setup() {
  createCanvas(500, 500);

  particles = loadImage('assets/particles.jpg');

  //for (let i = 0; i < 20; i++) {
  //cars.push(new Car()) ;
//}
noStroke() ;
}

function draw() {
  background(particles, 500, 500) ;
cars.push(new Car()) ;


  for (let i = 0; i < cars.length; i++) {
  cars[i].display() ;
  cars[i].move() ;
  if (cars[i].a <= 0) {
    cars.splice(i, 1) ;
  }
}
}


class Car {

  constructor() {
    //attributes
    this.pos = createVector(width/2, height-230) ;
      this.vel = createVector(random(-.8,.8), random(-10,-5)) ;
      this.r =  255//random(255) ;
      this.g = 255 //random(255) ;
      this.b = 255 //random(255) ;
      this.a = random(200, 255) ;
  }

  //methods

  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x,this.pos.y, 10) ;
  }

move() {
  this.pos.add(this.vel) ;
  this.a = this. a - 5;
}
}
