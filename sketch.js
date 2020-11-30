
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1, dustbin2 ,dustbin3;
var ball , ground;
var world;

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Ball(100,450,40);
	ground = new Ground(width/2,670,width,20);
	dustbin3=new dustbin(1000,650,200,15);
	dustbin1=new dustbin(900,608,15,100);
	dustbin2=new dustbin(1100,608,15,100);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  paper.display();
  ground.display();
  dustbin3.display();
  dustbin1.display();
  dustbin2.display();

  drawSprites();
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}



