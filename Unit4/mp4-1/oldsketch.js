let cars = [];
let frogPos ;
let myState = 0;
let timer = 20 * 60;
let water;
let jar;
let burned;
let evergreen;
let song;

function setup() {
  burned = loadImage('assets/burned.jpeg');
  evergreen = loadImage('assets/evergreen.jpeg');
  song = loadSound('sound/rain.wav');
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
      cars.push(new Car());
  }
  frogPos = createVector(width/2, height-100);
  jar = loadImage('assets/jar.png');
  water = loadImage('assets/water_2.png');


rectMode(CENTER);
//ellipseMode(CENTER);
//imageMode(CENTER);
textAlign(CENTER);

}

function draw() {
  switch (myState) {
    case 0:
    background(burned, windowWidth, windowHeight);
      textSize(24);
      fill('black');
      rect(width/2, height/2, 800, 200);
      fill('white');
      text("Use the Arrow Keys to catch the water in the jar, to grow back the trees!\n press any key to begin", width/2, height/2);
      break;

    case 1:
      game();
      timer--;
      if (timer <= 0){
        myState = 3; //oh no
      }
      break;

    case 2:
    background(evergreen, windowWidth, windowHeight);
      textSize(24);
      //image(evergreen, windowWidth, windowHeight);
      fill('black');
      rect(width/2, height/2, 600, 200);
      fill('white')
      text("Congratulations! You grew back the trees :)",width/2, height/2)
      text("press any key to play again", width/2, 400)
      break;

    case 3:
      textSize(24);
      image(burned, windowWidth, windowHeight);
      fill('black');
      rect(width/2, height/2, 600, 200);
      fill('white')
      text("Oh No! You didn't catch enough water!", width/2, height/2);
      text("press any key to try again", width/2, 400);

      break;

  }

}

function keyPressed(){
  if (song.isPlaying()) {

  } else {
    song.play();
    background(0, 255, 0);
  }
  switch (myState) {
    case 0:
    myState = 1 ;
    break;
    case 2:
    location.reload();
    break;
    case 3:
    location.reload();
    break;

  }
}


function game(){
  background(burned, windowWidth, windowHeight);
    //image(burned, windowWidth, windowHeight);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

  if  (cars[i].pos.dist(frogPos) < 50) {
    cars.splice(i, 1) ;
    }
    //if no cars you winnnn
  if (cars.length == 0) {
    myState = 2;
    }

  }
  //frog
  fill('white');
  image(jar, frogPos.x, frogPos.y, 150, 150);
  checkForKeys();

}




function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)||keyIsDown(keyCode = 65)) frogPos.x -=8;
  if (keyIsDown(RIGHT_ARROW)||keyIsDown(keyCode = 68)) frogPos.x +=8;
  if (keyIsDown(UP_ARROW)||keyIsDown(keyCode = 87)) frogPos.y -=8;
  if (keyIsDown(DOWN_ARROW)||keyIsDown(keyCode = 83)) frogPos.y +=8;
}

//car class
function Car() {
// attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-6,6), random(-6,6));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


// methods
this.display = function() {
  image(water, this.pos.x, this.pos.y, 50, 50)
  //image(earth, this.pos.x, this.pos.y, 40, 40)
}
this.drive = function(){
  this.pos.add(this.vel);
  if(this.pos.x > width) this.pos.x = 0;
  if(this.pos.x < 0) this.pos.x = width;
  if(this.pos.y > height) this.pos.y = 0;
  if(this.pos.y < 0) this.pos.y = height;
  }

}
