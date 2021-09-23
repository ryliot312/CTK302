let state = 0 ;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {

    case 0:
    background('blue') ;
    textSize(30) ;
    text("What did the shark say when \nhe ate the clownfish?", 100, 100) ;
    break ;

    case 1:
    background('purple') ;
    textSize(30) ;
    text("This tastes a little funny", 100, 100) ;
    break ;
  }

}

function mouseReleased() {
  state++ ;
  if (state > 1) {
    state = 0 ;
  }

}
