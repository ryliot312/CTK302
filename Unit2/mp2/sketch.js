let numberOfTouches;
let image1, image2, image3, image4;
let song1;
let f1;

function preload() {
  song1 = loadSound("sounds/show.mp3");


}

function setup() {
  createCanvas(600, 600);

  song1.play();

  song1.pause();

  image1 = loadImage("assets/nurseshark.jpg");
  image2 = loadImage("assets/lemonshark.jpg");
  image3 = loadImage("assets/hammerheadshark.jpg");
  image4 = loadImage("assets/whaleshark.jpg");
  image5 = loadImage("assets/greatwhiteshark.jpg");

  f1 = loadFont("font/Shark.ttf");


  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;


  switch (numberOfTouches) {
    case 0: //intro
      background("blue");
      textFont(f1);
      textSize(30);
      text("Welcome to the Shark Show! \n\n\n\n click to start", 90, 90);
      break;

    case 1: //intro
      background("blue");
      textFont(f1);
      textSize(20);
      text("First, up we have the Nurse Shark! \nThey suck up their food and they can walk across the bottom floor.", 100, 100);
          image(image1, width / 2, height / 2, 300, 300);
          break;



          case 2: //intro
          background("blue"); textFont(f1); textSize(10); text("Second we have the Lemon Shark! \nThey can weight up to 551 pounds and they get their name from their brownish, yellow color.", 90, 90);
            image(image2, width / 2, height / 2, 300, 300);
            break;



            case 3: //intro
            background("blue"); textFont(f1); textSize(10); text("Third we have the Hammerhead shark!\n There are nine different species of hammerheads. It's favorite meal is stingrays.", 90, 90);
              image(image3, width / 2, height / 2, 300, 300);
              break;



              case 4: //intro
              background("blue"); textFont(f1); textSize(10); text("Fourth, we have the Whale Shark! They can grow up to 40 feet long and they can weight up to 20 tons.", 90, 90);
                image(image4, width / 2, height / 2, 300, 300);
                break;



                case 5: //intro
                background("blue"); textFont(f1); textSize(10); text("Lastly, we have the Great White Shark! Have their own fin prints and they are not the top of the food chain, surprisingly.", 90, 90);
                  image(image5, width / 2, height / 2, 300, 300);
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
