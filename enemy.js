class Enemy{
    constructor() {
        this.c = color(random(50,255), random(50,255), random(50,255));
        this.d = 25;
        this.x = random(0+this.d/2,width-this.d/2);
        this.y = 30+this.d/2;      
        this.rand = int(random(2));
        if(this.rand == 0) { this.velocityX = random(1,3); } 
        else if(this.rand == 1) { this.velocityX = -random(0.2,2); } 
        this.velocityY = random(0,0.1);
      }
      display(arg1 = this.c, arg2 = this.d) {
        push();
        //fill(arg1);
        rectMode(CENTER);
        image(enemypng,this.x, this.y, arg2, arg2);

        pop();
      }
      reset()
      {
        this.c = color(random(255), random(255), random(255));
        this.x = random(0,width);
        this.y = 0+this.d;
        this.rand = int(random(2));
        if(this.rand == 0) { this.velocityX = random(1,3); } 
        else if(this.rand == 1) { this.velocityX = -random(0,2); } 
        this.velocityY = random(0,1);
      }
      reset1()
      {
        this.c = color(random(255), random(255), random(255));
        this.x = random(0,width);
        this.y = 0+this.d;
        this.rand = int(random(2));
        if(this.rand == 0) { this.velocityX = random(1,3); } 
        else if(this.rand == 1) { this.velocityX = -random(0,2); } 
        this.velocityY = random(0,2);
      }
      reset2()
      {
        this.c = color(random(255), random(255), random(255));
        this.x = random(0,width);
        this.y = 0+this.d;
        this.rand = int(random(2));
        if(this.rand == 0) { this.velocityX = random(1,3); } 
        else if(this.rand == 1) { this.velocityX = -random(1,3); } 
        this.velocityY = random(1,2);
      }
      reset3()
      {
        this.c = color(random(255), random(255), random(255));
        this.x = random(0,width);
        this.y = 0+this.d;
        this.rand = int(random(2));
        if(this.rand == 0) { this.velocityX = random(1,4); } 
        else if(this.rand == 1) { this.velocityX = -random(1,4); } 
        this.velocityY = random(1,2.5);
      }
      move() {
        this.x += this.velocityX;
        this.y += this.velocityY;    
        if(this.x > width-(this.d/2) || this.x < 0+(this.d/2))
        {
            this.velocityX *= -1;
        }
      }

}