
// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temp = 0;
var humid = 0;
var desc ;
let image1 ;
let f1 ;
let image2 ;

function setup() {
  createCanvas(800, 800);
image1 = loadImage('assets/clouds_rain.jpeg');
image2 = loadImage('assets/water_2.png');
  f1 = loadFont("fonts/ALBAM.ttf") ;



  // HERE is the call to get the weather.

  var myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Bourbonnais,IL,US&units=imperial&";

  //You can also use "zipcode" - var myIDString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = "appid=18c0e5fd6da288dc69852b462ccb0ada"; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp ;
  humid = weather.main.humidity ;
  desc = weather.weather[0].description ;

}

function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:

      background(image1);
      fill("black");
      textFont(f1);
      textSize(30);
      text("What is the weather in " + weather.name + "?", 60, 30);
      text("windspeed is " + windspeed, 60, 60);
      text("temperature is " + windspeed, 60, 90);
      text("humidity is " + windspeed, 60, 125);
      text("description is " + windspeed, 60, 160);


      // cloud
      fill("yellow");
      noStroke();
      ellipse(x, 500, 150, 150);

      // move the cloud's x position
      x = x + windspeed/3;
      if (x > width) x = 0;

      break;
  }
}
