let state = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  switch(state){
    case 0 :
      background('red');

      fill(255, 80);
  for (let j = 0 ; j <= height ; j+=20) {
  for (let i = 0 ; i <= width ; i+=20){
    push() ;
    translate(i, j) ;
    fill('blue');
    rect(i, j, 10, 10);
    pop() ;
  }
  }


      text("state 0", 100, 100);
      break ;

      case 1:
      background('yellow');


      fill(255, 80);
  for (let j = 0 ; j <= height ; j+=20) {
  for (let i = 0 ; i <= width ; i+=20){
    push() ;
    translate(i, j) ;
    fill('black');
    point(i, j);
    pop() ;

  }
  }

      text("state 1", 100, 100);      break;

      case 2:
      background('blue');


      fill(255, 80);
  for (let j = 0 ; j <= height ; j+=20) {
  for (let i = 0 ; i <= width ; i+=20){
    push() ;
    translate(i, j) ;
    fill('purple');
    circle(i, j, 10);
    pop() ;

  }
  }


      text("state 2", 100, 100);      break;

      case 3:
      background('green');


      fill(255, 80);
  for (let j = 0 ; j <= height ; j+=20) {
  for (let i = 0 ; i <= width ; i+=20){
   push() ;
    translate(i, j) ;
    quad(i, j, 10, 10);
    pop() ;
  }
  }


      text("state 3", 100, 100);      break;
      case 4:
      background('purple');

      fill(255, 80);
  for (let j = 0 ; j <= height ; j+=20) {
  for (let i = 0 ; i <= width ; i+=20){
   push() ;
    translate(i, j) ;
    arc(i, j, 10, 10, 0, PI + QUARTER_PI);
    pop() ;
  }
  }


      text("state 4", 100, 100);      break;

      case 5:
      background('black');

      fill('white');
  for (let j = 0 ; j <= height ; j+=20) {
  for (let i = 0 ; i <= width ; i+=20){
   push() ;
    translate(i, j) ;
    stroke(50);
    strokeWeight(20);
    line(i, j, 10, 10);
    pop() ;
  }
  }


      text("state 5", 100, 100);      break;
  }




}

function mouseReleased() {
  state = state + 1 ;
  if (state > 5) {
    state = 0;
  }
}
