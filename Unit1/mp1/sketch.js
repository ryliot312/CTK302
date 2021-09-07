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
  rect(300, 400, 50, 300);
  rect(350, 450, 75, 200);
  rect(400, 400, 50, 300);
  rect(450, 465, 50, 175);
  rect(475, 415, 45, 275);



  fill('white');
  rect(88, 280, 10, 10);

  fill('white');
  rect(112, 330, 10, 10);

  fill('white');
  rect(100, 383, 10, 10);

  fill('white');
  rect(137, 460, 10, 10);

  fill('white');
  rect(140, 440, 10, 10);

  fill('white');
  rect(190, 390, 10, 10);

  fill('white');
  rect(200, 300, 10, 10);

  fill('white');
  rect(264, 419, 10, 10);

  fill('white');
  rect(471, 380, 10, 10);

  fill('white');
  rect(317, 280, 10, 10);

  fill('white');
  rect(341, 417, 10, 10);

  fill('white');
  rect(388, 322, 10, 10);

  fill('white');
  rect(417, 323, 10, 10);

  fill('white');
  rect(467, 303, 10, 10);






  stroke('black');
  strokeWeight(4);
  line(75, 552, 495, 552);



  if (mouseIsPressed) {
    stroke('white');
    strokeWeight(2);
    // stuff that shows when the mouse is pressed
    background('black');



    fill('white');
    ellipse(100, 100, 100, 100) ;


    fill('white');
    rect(88, 280, 10, 10);

    fill('white');
    rect(112, 330, 10, 10);

    fill('white');
    rect(100, 383, 10, 10);

    fill('white');
    rect(137, 460, 10, 10);

    fill('white');
    rect(140, 440, 10, 10);

    fill('white');
    rect(190, 390, 10, 10);

    fill('white');
    rect(200, 300, 10, 10);

    fill('white');
    rect(264, 419, 10, 10);

    fill('white');
    rect(471, 380, 10, 10);

    fill('white');
    rect(317, 280, 10, 10);

    fill('white');
    rect(341, 417, 10, 10);

    fill('white');
    rect(388, 322, 10, 10);

    fill('white');
    rect(417, 323, 10, 10);

    fill('white');
    rect(467, 303, 10, 10);

  } else {
    // when the mouse isn't pressed!
    noStroke();
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
