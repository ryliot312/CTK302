var f1 ;



function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/Type_Keys_Filled.ttf") ;
}

function draw() {
  background("yellow") ;
  textFont(f1) ;
  textSize(48) ;
  text("hello world", 100, 100) ;
}
