
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobOject1, bobOject2, bobOject3, bobOject4, bobOject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobOject1 = new Bob(180,400,55);
	bobOject2 = new Bob(290,400,55);
	bobOject3 = new Bob(400,400,55);
	bobOject4 = new Bob(510,400,55);
	bobOject5 = new Bob(620,400,55);

	roof = new Roof(400,0,500,20);

	rope1 = new Rope(bobOject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobOject2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(bobOject3.body,roof.body,-bobDiameter*2,0);
	rope4 = new Rope(bobOject4.body,roof.body,-bobDiameter*2,0);
	rope5 = new Rope(bobOject5.body,roof.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  bobOject1.display();
  bobOject2.display();
  bobOject3.display();
  bobOject4.display();
  bobOject5.display();
  roof.display();
  rope1.display();	
  rope2.display();	
  rope3.display();	
  rope4.display();	
  rope5.display();	


  drawSprites();
 
}

function keyPresses() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bobObject5.body,bobObject1.body.position,{x:85,y:-85});
	}
}



