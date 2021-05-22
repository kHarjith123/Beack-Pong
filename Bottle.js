class Bottle{
    constructor(x,y,width,height){
        var options = {
            'restitiution':0.8,
            'friction':1.5,
            'density':0.5,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(12,85,195);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
       
        pop();
    }
    
}