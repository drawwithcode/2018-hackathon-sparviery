var points = [];
var analyzer;


function preload() {
  nerve = loadSound("./assets/TwistedNerve.mp3");
}

function setup() {

  colorMode(RGB);
  background(40);
  frameRate(40);

  analyzer = new p5.Amplitude();
  analyzer.setInput(nerve);
  createCanvas(windowWidth, windowHeight);
  nerve.play();


  for (var i = 0; i < 50; i++) {
    points[i] = new Point();
  };

}

function draw() {


  noStroke(),
  translate(windowWidth / 2, windowHeight / 2);
  //rotate(frameCount/40+-(analyzer.getLevel()*10));
  background(0, 20);

  if (nerve.isPlaying() == false) {
    nerve.play();
  };



  for (var i = 0; i < 50; i++) {
    points[i].update();
    points[i].show();
  };

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function Point() {
  this.x = random(-10, 10);
  this.y = random(-10, 10);

  this.update = function update() {
    this.x *=  10 + (analyzer.getLevel());
    this.y *=  10 + (analyzer.getLevel());

    if (this.x < -windowWidth/2) {
      this.x = random( windowWidth/2 , -windowWidth/2 )
    };
    if (this.x > windowWidth/2 ) {
      this.x = random( windowWidth/2 , -windowWidth/2 )
    };
    if (this.y < -windowHeight /2) {
      this.y = random(windowHeight/2 , -windowHeight /2)
    };
    if (this.y > windowHeight/2) {
      this.y = random(windowHeight/2 , -windowHeight /2)
    };
  }

  this.show = function show() {

    fill(255);
    noStroke();
    ellipse(
          this.x,
          this.y,
          analyzer.getLevel() * 800,
          analyzer.getLevel() * 800,
        );




  };


}
