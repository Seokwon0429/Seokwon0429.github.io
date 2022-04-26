let lnum = 1;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  strokeWeight(5);
  if(keyIsPressed && ((key === 'r')||(key == 'R'))){
    stroke(255,0,0);
    }
  if(keyIsPressed && ((key === 'g')||(key == 'G'))){
    stroke(0,255,0);
    }
  if(keyIsPressed && ((key === 'b')||(key == 'B'))){
    stroke(0,0,255);
    }
  if(keyIsPressed && ((key === 'a')||(key == 'A'))){
    stroke(0,0,0);
    }
  if(keyIsPressed && ((key === 'd')||(key == 'D'))){
    background(255,255,255);
    }

  
  if(mouseIsPressed){
    strokeWeight(lnum);
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
  
}
function keyPressed(){
  if((key >= '1')&&(key<='9')){
      lnum= map(key,'1','9',1,9);
    }
}
