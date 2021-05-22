class Ball{
    constructor(x,y,radius){
        var options = {
            'restitiution':1.5,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        
    }
    display(){

        
        var pos = this.body.position;

        push();
        fill(92,138,41);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}