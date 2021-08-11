const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground,left,right,top_wall;


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground = new Ground(200,390,2000,20);
  left = new Ground(10,200,20,400);
  right = new Ground(1190,200,20, 400);
  top_wall = new Ground(200,10, 2000, 20);

  leftBin = new Ground(600,390,10,300)
  rightBin = new Ground(750,390,10,300)

  var ball_options = {
    restitution:0.95

  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  left.show();
  right.show();
  top_wall.show();
  leftBin.show();
  rightBin.show();

  ellipse(ball.position.x,ball.position.y,20);

}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:-0.05})
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
  }
}