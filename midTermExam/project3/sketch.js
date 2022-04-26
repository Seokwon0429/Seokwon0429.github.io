let x = mouseX
let y = mouseY
function setup() {
  createCanvas(250, 250);
}

function draw() {
  background(255);
  stroke(0)
  for(let i = 250;i >=0;i-=50){
    square((250-i)/2,(250-i)/2,i);
  }
  mousePressed();
  //fill(255,0,0);
}
function mousePressed(){
  fill(255,0,0)
  circle(mouseX,mouseY,10);
  if((x>0 && x<25)||(y>0&&y<250)){
    
  }
}

