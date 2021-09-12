function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {
  background('#89CFF0');


//buildings
  stroke('black');
  strokeWeight(1);
  fill('#2F4F4F');
  rect(100, 400, 50, 300);

  stroke('black');
  strokeWeight(1);
  rect(150, 475, 50, 150);

  stroke('black');
  strokeWeight(1);
  rect(200, 400, 100, 300);

  stroke('black');
  strokeWeight(1);
  rect(250, 475, 50, 150);

  stroke('black');
  strokeWeight(1);
  rect(300, 400, 50, 300);

  stroke('black');
  strokeWeight(1);
  rect(350, 450, 75, 200);

  stroke('black');
  strokeWeight(1);
  rect(400, 400, 50, 300);

  stroke('black');
  strokeWeight(1);
  rect(450, 465, 50, 170);

  stroke('black');
  strokeWeight(1);
  rect(475, 415, 45, 270);


//lights
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

  //person

//face
  fill('#A8A9AD');
  ellipse(750, 100, 70, 70);

//body
  fill('#A8A9AD');
  ellipse(750, 175, 30, 80);

//eye
  fill('black');
  ellipse(750, 85, 30, 30);

  fill('white');
  ellipse(750, 85, 10, 10);

  //right leg
  fill('#A8A9AD');
  ellipse(725, 200, 25, 25);

//right arm
  fill('#A8A9AD');
  ellipse(725, 150, 25, 25);

//left left
  fill('#A8A9AD');
  ellipse(775, 200, 25, 25);

//left arm
  fill('#A8A9AD');
  ellipse(775, 150, 25, 25);

//frown
  fill('black');
  arc(750, 125, 30, 10, PI, 0) ;



  if (mouseIsPressed) { // stuff that shows when the mouse is pressed
    background('black');

    fill('white');
    text("Night, when he would fly around shooting stars out of his mouth because he was so excited.", 40, 40);
    text("He wanted everyone to see his stars", 160, 60);
    textSize(20);


//stars
    fill('white');
    text("*", 590, 100);

    fill('white');
    text("*", 350, 130);

    fill('white');
    text("*", 650, 400);

    fill('white');
    text("*", 880, 460);

    fill('white');
    text("*", 60, 200);

    fill('white');
    text("*", 900, 530);

    fill('white');
    text("*", 900, 180);

    fill('white');
    text("*", 590, 230);




//sun and moon
    fill('white');
    ellipse(100, 100, 100, 100);

    //face
      fill('red');
      ellipse(750, 100, 70, 70);

    //body
      fill('red');
      ellipse(750, 175, 30, 80);

    //eye
      fill('white');
      ellipse(750, 85, 30, 30);

      fill('black');
      ellipse(750, 85, 10, 10);

      //right leg
      fill('red');
      ellipse(725, 200, 25, 25);

    //right arm
      fill('red');
      ellipse(725, 150, 25, 25);

    //left left
      fill('red');
      ellipse(775, 200, 25, 25);

    //left arm
      fill('red');
      ellipse(775, 150, 25, 25);

    //smile
      fill('white');
      ellipse(750, 120, 20, 20);






//buildings
    stroke('white');
    strokeWeight(1);
    fill('black');
    rect(100, 400, 50, 300);

    stroke('white');
    strokeWeight(1);
    fill('black');
    rect(150, 475, 50, 150);

    stroke('white');
    strokeWeight(1);
    fill('black');
    rect(200, 400, 100, 300);

    stroke('white');
    strokeWeight(1);
    fill('black');
    rect(250, 475, 50, 150);

    stroke('white');
    strokeWeight(1);
    fill('black');
    rect(300, 400, 50, 300);

    stroke('white');
    strokeWeight(1);
    fill('black');
    rect(350, 450, 75, 200);

    stroke('white');
    strokeWeight(1);
    fill('black');
    rect(400, 400, 50, 300);

    stroke('white');
    strokeWeight(1);
    fill('black');
    rect(450, 465, 50, 170);

    stroke('white');
    strokeWeight(1);
    fill('black');
    rect(475, 415, 45, 270);


//lights
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
    ellipse(100, 100, 100, 100);

    fill('black');
    text("Oobi was a small flying creature, who would fly around aimlessly, until.....", 20, 20, );
    textSize(20);


  }



  // this shows mouse location - comment it out when you're done!

  



}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
