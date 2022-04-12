let num = 150;
let a = 5;
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(230);
  ellipse(num,num,30,30);
  //text("hello",150,10)
  textSize(15);
  text("hello",140,10);

  textSize(30);
  text("hello1",140,50);

  textSize(a);
  text("hello3",140,100);
  a = a + 1;
}
