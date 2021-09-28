let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("you're not touching the screen", 5, 22) ;
      break ;

      case 1:
       text("one finger?", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      text("two fingers, that's better", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("three fingers, getting dangerous aren't we", 5, 22) ;
            // put a picture here
      break ;


  }

}
