let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      text("0", 300, 100);
      break;

    case 1:
      text("1", 300, 100);
      break;

    case 2:
      text("2", 300, 100);
      break;

  }
  fill('purple');
  rect(100, 100, 100, 100);


}

function mouseReleased() {

  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {


    state++;
    if (state > 2) state = 0;
  }

}
