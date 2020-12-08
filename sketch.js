
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.constraint;


function setup() {
 createCanvas(800,400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,100,400,30)

pendulum1= new Pendulum(250,400,60)
pendulum2= new Pendulum(310,400,60)
pendulum3= new Pendulum(370,400,60)
pendulum4= new Pendulum(430,400,60)
pendulum5= new Pendulum(490,400,60)

sling1= new Sling(pendulum.body,ground.body,-150,0)
sling2= new Sling(pendulum2.body,ground.body,-90,0)
sling3= new Sling(pendulum3.body,ground.body,-30,0)
sling4= new Sling(pendulum4.body,ground.body,30,0)
sling5= new Sling(pendulum5.body,ground.body,90,0)

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background("black");

ground.display();
sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();

pendulum1.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();
  drawSprites();
}

function mouseDragged(){
Matter.body.setPosition(pendulum1.body,{x: mouseX, y: mouseY});
}