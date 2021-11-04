var bubbles = [];
let url = "";
let fall ;

function setup() {
  let key = "1ZoebvhjCTLI7CQF-2uTrua8nyldEtmntHw8IkKA2T4A"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  fall = loadImage('assets/fall2.jpeg');

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What's your favorite holiday?"],
        data[i]["What's your favorite time of year?"],
        data[i]["Which semester is your favorite for school?"],
        data[i]["What's your favorite color?"]));
         // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background(fall);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(holiday, season, semester, color) {
    // only the order of these parameters matters!
    this.holiday = holiday;
    this.season = season;
    this.semester = semester;
    this.color = color ;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("black");
    fill("yellow");
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("black");
    text(
      this.holiday + "\n" + this.season + "\n" + this.semester + "\n" + this.color,
      this.pos.x,
      this.pos.y
    );
    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;
  }
}
