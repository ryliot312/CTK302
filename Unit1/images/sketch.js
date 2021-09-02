let camera, coffee, shark ;

function setup() {
  createCanvas(500, 500);
  camera = loadImage("assets/camera.jpeg") ;
  coffee = loadImage("assets/coffee.jpeg") ;
  shark = loadImage("assets/shark.jpeg") ;

  imageMode(CENTER) ;
}

function draw() {
  background('black') ;
  image(camera, width/2, height/2, 100, 100) ;
  image(coffee, width/2, height/2-120, 100, 100) ;
  image(shark, width/2, height/2+120, 100, 100) ;


}
