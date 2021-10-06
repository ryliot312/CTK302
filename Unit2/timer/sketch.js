let state = 0 ;
let timer = 0 ;
let x = 0 ;
let vel = 0 ;
let image1, image2, image3 ;

function setup() {
  createCanvas(800, 800);

  image1 = loadImage("assets/fall_camera.jpeg") ;
  image2 = loadImage("assets/pile.jpeg") ;
  image3 = loadImage("assets/road_camera.jpeg") ;

  
}

function draw() {
  background('grey') ;





  switch(state) {
    case 0:
  image(image1, 150, 150, 600, 600);
    vel = 0 ;
    break ;

    case 1:
    image(image2, 150, 150, 600, 600);
    vel = 10 ;
    break ;

    case 2:
    image(image3, 150, 150, 600, 600);
    vel = 5 ;
    break ;
  }

timer++ ;
if (timer > 3*60) {
  timer = 0 ;
  state++ ;
  if (state >2) {
    state = 0 ;
  }
}





}
