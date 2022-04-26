
let  x = 0;
let  y = 0;
let x1 = 0;
let y1 = 0;

let x2 = 0;
let y2 = 0;
let x3 = 0;
let y3 = 0;
function setup(){
  createCanvas(400,400);
  x = width/2;
  y = height-40;
}
function draw(){
  background(0); 
    if(keyIsDown(UP_ARROW)){
      y-=5;
    }
    if(keyIsDown(RIGHT_ARROW)){
      x+=5;
    }
    if(keyIsDown(DOWN_ARROW)){
      y +=5;
    }
    if(keyIsDown(LEFT_ARROW)){
      x-=5;
    }
    y1 -= 5;
    y2 -=5;
    x2 -=5;
    x3 +=5;
    y3 -=5
    push();
    fill(255,255,0);
    circle(x1,y1,10);
    circle(x2,y2,10);
    circle(x3,y3,10);
    
    pop();
  ellipse(x,y,50,50);
  
}

function keyPressed(){
    if(keyCode == 90){
      x1 = x;
      y1 = y;
    }
    if(keyCode == 88){
      x1 = x;
      y1 = y;

      x2 = x;
      y2 = y;

      x3 = x;
      y3 = y;
    }
    
  }