

let i = 0;
function setup() {
  createCanvas(400, 400);
  background(0);
  while(true){
    let num = int(random(10,60));
    let size = int(random(10,50));
    ellipse(random(0,400),random(0,400),size,size);
    fill(random(255),random(255),random(255));
    i = i+1;
    if(i === num){
      break;
    }
    else{
      continue;
    }
  }
  
}

