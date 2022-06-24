class Gast{
    constructor(){
        this.r = 100;
        this.x = width;
        this.y = 100
        this.gasthp = 10
    }
    move(){
        this.x = this.x - 2;
    }
    show(){
        image(apple,this.x,this.y,this.r,this.r);
    }
}