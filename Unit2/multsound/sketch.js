let song1, song2, song3 ;
let state = 0 ;


function preload() {
  song1 = loadSound("assets/donkey.mp3") ;
  song2 = loadSound("assets/skate.mp3") ;
  song3 = loadSound("assets/thrill.mp3") ;

  song1.play() ;
  song2.play() ;
  song3.play() ;

  song1.pause() ;
  song2.pause() ;
  song3.pause() ;
}


function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch(state) {
    case 0://spawn song1
    song1.play() ;
    state = 1 ;
    break ;

    case 1://listen to song1
    background('red') ;
    break ;

    case 2://spawn song2
    song2.play() ;
    state = 3 ;
    break ;

    case 3://listen to song2
    background('green') ;
    break ;

    case 4://spawn song3
    song3.play() ;
    state = 5 ;
    break ;

    case 5://listen to song3
    background('yellow') ;
    break ;
  }


}

function mouseReleased() {
  song1.pause() ;
  song2.pause() ;
  song3.pause() ;
  state++ ;
  if (state > 5) {
    state = 0 ;
  }
}
