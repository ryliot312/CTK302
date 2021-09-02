let f1 , f2;



function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/Type_Keys_Filled.ttf") ;
  f2 = loadFont("assets/Vintage.ttf") ;
  textAlign(CENTER) ;
}

function draw() {
  background("yellow") ;
  textFont(f1) ;
  textSize(48) ;
  text("hello world", width/2, 100) ;

  textFont(f2) ;
  textSize(24) ;
  text("Go You Redbirds", width/2, 160) ;
}
