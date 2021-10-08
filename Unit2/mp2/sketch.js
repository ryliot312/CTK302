let numberOfTouches;
let image1, image2, image3, image4;
let song1;
let f1;

function preload() {
  song1 = loadSound("sounds/show.mp3");


}

function setup() {
  createCanvas(500, 500);

  song1.play();

  song1.pause();

  image1 = loadImage("assets/nurseshark.jpg");
  image2 = loadImage("assets/lemonshark.jpg");
  image3 = loadImage("assets/hammerheadshark.jpg");
  image4 = loadImage("assets/whaleshark.jpg");
  image5 = loadImage("assets/greatwhiteshark.jpg");

  f1 = loadFont("font/Shark.ttf");

//imageMode(CENTER);

}

function draw() {
  clear();
  numberOfTouches = touches.length;


  switch (numberOfTouches) {
    case 0: //intro
      background("blue");
      textFont(f1);
      textSize(35);
      fill("white");
      text("Welcome to the Shark Show!", 30, 60);
      textSize(25);
      fill("black");
      text(" \n\nWe will see different sharks\nand some facts about them!\n\n\n\n click to start", 90, 90);
      break;

    case 1: //intro
    //  background("blue");
      image(image1, 0, 0, 500, 500);
      textFont(f1);
      textSize(20);
      textAlign(LEFT);
      text("First up, we have the Nurse Shark! \nThey suck up their food and \nthey can walk across \nthe bottom floor.", 30, 150);
      //image(image1, 0, 0, 500, 500);
          break;



          case 2: //intro
          //background("blue");
          image(image2, 0, 0, 500, 500);
          textFont(f1);
          textSize(20);
          textAlign(LEFT);
          text("Second, we have the Lemon Shark! \nThey can weight up to 551 pounds \nand they get their name from their brownish, \nyellow color.", 30, 150);

            break;



            case 3: //intro
            //background("blue");
            image(image3, 0, 0, 500, 500);
            textFont(f1);
            textSize(20);
            textAlign(LEFT);
            text("Third, we have the Hammerhead shark!\n There are nine different species of hammerheads. \nIt's favorite meal is stingrays.", 30, 150);

              break;



              case 4: //intro
              //background("blue");
              image(image4, 0, 0, 500, 500);
              textFont(f1);
              textSize(20);
              textAlign(LEFT);
              text("Fourth, we have the Whale Shark! \nThey can grow up to 40 feet long and \nthey can weight up to 20 tons.", 30, 150);
                break;



                case 5: //intro
                //background("blue");
                image(image5, 0, 0, 500, 500);
                textFont(f1);
                textSize(20);
                textAlign(LEFT);
                text("Lastly, we have the Great White Shark! They have \ntheir own fin prints and \nthey are not the top of the food chain, \nsurprisingly.", 30, 150);

                  break;


                }
              }
              // function mouseReleased(){
              //   if (!song1.isPlaying()) {
              //     song1.play();
              //   }
              // }

              // function mousePressed() {
              //   if (song1.isPlaying()) {
              //     song1.pause();
              //   } else {
              //     song1.play();
              //   }
              // }

              function touchStarted() {
                getAudioContext().resume();
                if (!(song1.isPlaying())) {
                  song1.loop();
                }
              }
