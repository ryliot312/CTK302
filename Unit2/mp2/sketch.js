let numberOfTouches;
let image1, image2, image3, image4 ;
let song1 ;

function preload() {
  song1 = loadSound("sounds/perrysong.mp3");


}

function setup() {
  createCanvas(400, 400);

  song1.loop() ;

    image1 = loadImage("assets/Baby_Perry_0.jpg") ;
    image2 = loadImage("assets/Perry.jpg") ;
    image3 = loadImage("assets/agent_p.jpg") ;
    image4 = loadImage("assets/avenger_perry.jpg") ;


     imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch (numberOfTouches) {
    case 0:
      image(image1, width/2, height/2, 400, 400) ;
      break;

    case 1:
      image(image2, width/2, height/2, 400, 400) ;
      break;

    case 2:
      image(image3, width/2, height/2, 400, 400) ;
      break;

    case 3:
      image(image4, width/2, height/2, 400, 400) ;
      break;



  }

  function mouseReleased() {
    if (song1.isPlaying()) {
      song1.pause() ;
    } else {
      song1.loop() ;
    }

  }

  function touchStarted() {
    getAudioContext().resume();

}
}
