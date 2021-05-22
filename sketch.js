const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground , ball;
var engine,world;

var bg , bgimg ;


function preload(){

  bg = loadImage("bg.jpg");

}

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,780,800,20);
  ball =  new Ball(150,150,30);

  bottle1 = new Bottle(610,750,20,60);
  bottle2 = new Bottle(630,750,20,60);
  bottle3 = new Bottle(650,750,20,60);
  bottle4 = new Bottle(670,750,20,60);
  bottle5 = new Bottle(690,750,20,60);
  

  bottle6= new Bottle(630,650,20,60);
  bottle7 = new Bottle(650,650,20,60);
  bottle8 = new Bottle(670,650,20,60);

  bottle9 = new Bottle(650,590,20,60);


  
}

function draw() {
  background(bg);  

  text(mouseX + "," + mouseY , mouseX , mouseY);

  Engine.update(engine);
  
  ground.display();
  ball.display();

  bottle1.display();
  bottle2.display();
  bottle3.display();
  bottle4.display();
  bottle5.display();

  bottle6.display();
  bottle7.display();
  bottle8.display();

  bottle9.display();


}


function keyPressed(){
  if(keyCode === 32){
  Matter.Body.applyForce(ball.body, {x:150 , y:650}, {x:250 , y:250});
  }
}