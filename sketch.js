const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, height, 1200, 20)

	line1 = new Dustbin(800, 355, 15, 70);
	line2 = new Dustbin(880, 382, 145, 15);
	line3 = new Dustbin(950, 355, 15, 70);

	paper = new Paper(100, 100, 25);


	Engine.run(engine);

}

function draw() {
	background(0);


	rectMode(CENTER);


	Engine.update(engine);

	ground.display();
	line1.display();
	line2.display();
	line3.display();
	paper.display();


	drawSprites();

}

function keyPressed(){
    if (keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body, paper.body.position,{x:15,y:-15});
    }
  }
