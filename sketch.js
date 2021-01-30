const Engine=Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies
var engine,world
var ground, ball
function setup() {
var canvas=createCanvas(800,400);
engine=Engine.create()
world=engine.world
var ground_options={
isStatic: true
}
ground=Bodies.rectangle(200,390,600,20,ground_options)
World.add(world,ground)
var ball_options={
'restitution': 1.0
}
ball=Bodies.circle(300,100,50,ball_options)
World.add(world,ball)
console.log(ground)
}

function draw() {
  background("blue");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1300,20)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,40,40)

  drawSprites();
}

