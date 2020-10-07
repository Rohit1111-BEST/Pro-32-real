var box,ground,slingshot;
var score=0;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

 
  box8 = new Box(330,235,30,40)
  box9 = new Box(360,235,30,40)
  box10 = new Box(390,235,30,40)
  box11 = new Box(420,235,30,40)
  box12 = new Box(450,235,30,40)

  box13 = new Box(360,195,30,40)
  box14 = new Box(390,195,30,40)
  box15 = new Box(420,195,30,40)

  box16 = new Box(390,155,30,40)

  paper = new Paper(100,200)

  launcher = new Launcher(paper.body,{x:100,y:100});


  ground= new Ground(390,270,150,20)

  text("SCORE:"+score,750,40)
  box8.score;
  box9.score;
  box10.score;
  box11.score;
  box12.score;
  box13.score;
  box14.score;
  box15.score;
  box16.score;
  
}

function draw() {
  background(200,200,200);  
  Engine.update(engine);

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  paper.display();
  launcher.display();

  text("SCORE:"+score,750,40) 
  box8.score; 
  box9.score; 
  box10.score; 
  box11.score; 
  box12.score; 
  box13.score; 
  box14.score; 
  box15.score; 
  box16.score;
  
  ground.display();
}

function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.releasePaper();
}


function drawScore(){
  box8.score()
  box9.score()
  box10.score()
  box11.score()
  box12.score()
  box13.score()
  box14.score()
  box15.score()
}