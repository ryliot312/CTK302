function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {
  background('blue');
  rect(100, 400, 50, 300);
  rect(150, 475, 50, 150);
  rect(200, 400, 100, 300);
  rect(250, 475, 50, 150);
  rect(80, 600, 5, 600 );



  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    background('black');
    fill('white');
    ellipse(100, 100, 100, 100) ;
  } else {
    // when the mouse isn't pressed!
    fill('yellow');
    ellipse(100, 100, 100, 100) ;
  }



  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
