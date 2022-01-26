var s;
var scl = 20;

var food;
var lat=false;

function setup() {
  createCanvas(400, 400);
  s = new Snake();
  frameRate(15);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  var x = floor(random(cols));
  var y = floor(random(rows));
  food = createVector(x,y);
  food.mult(scl);
}

function draw() {
  background(51);
  s.update();
  s.edge();
  s.death();
  s.show();
  if(s.eat(food)){
    pickLocation();
  }
  
  fill(255, 0, 100);
  rect(food.x,food.y, scl, scl);
}
function keyPressed(){
  if(keyCode === UP_ARROW) {
    s.dir(0, -1);
  }else if(keyCode === DOWN_ARROW){
    s.dir(0,1);
  }else if(keyCode === RIGHT_ARROW){
    s.dir(1,0);
  }else if(keyCode === LEFT_ARROW){
    s.dir(-1,0);
  }
}
