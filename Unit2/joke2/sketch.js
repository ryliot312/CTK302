let state = 0 ;
let timer = 0 ;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {

    case 0:
    background('blue') ;
    textSize(30) ;
    text("What do you call a \npig that does karate?", 100, 100) ;
    break ;

    case 1:
    background('purple') ;
    textSize(30) ;
    text("A pork chop", 100, 100) ;
    break ;
  }

timer++ ;
if (timer > 3*60) {
  timer = 0 ;
  state++ ;
  if (state > 1)  state = 0 ;
}

}

function mouseReleased() {
  state++ ;
  if (state > 1) {
    state = 0 ;
  }

}
