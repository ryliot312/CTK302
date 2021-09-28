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
    background('blue');
    textSize(25);
      text("you're not touching the screen", 5, 22) ;
      break ;

      case 1:
      background('yellow');
      textSize(25);
       text("one finger?", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      background('orange');
      textSize(25);
      text("two fingers, that's better", 5, 22) ;
            // put a picture here
      break ;

      case 3:
      background('green');
      textSize(25);
     text("three fingers, getting dangerous aren't we", 5, 22) ;
            // put a picture here
      break ;

      case 4:
      background('purple');
      textSize(25);
       text("four fingers, getting warmer", 5, 22) ;
      // put a picture here
      break ;


      case 5:
      background('grey');
      textSize(25);
       text("five finger, high five!", 5, 22) ;
      // put a picture here
      break ;


  }

}
