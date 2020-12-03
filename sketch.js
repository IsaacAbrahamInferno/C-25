const Engine = Matter.Engine; //universe //Namespace
const World= Matter.World; //earth
const Bodies = Matter.Bodies; //humans

var box1,box2;
var ground;
var pig1;
var universe,earth,ground;
var bird1;

var backgroundimage;

function preload(){
backgroundimage=loadImage("sprites/bg.png");


}







function setup(){

  createCanvas(1200,400);
 
  universe = Engine.create();
  earth = universe.world;
  ground = new Ground(600,390,1200,20);
  box1= new Box(700,320,70,70);
  box2= new Box(920,320,70,70);
  box3= new Box(700,240,70,70);
  box4= new Box(920,240,70,70);
  box5= new Box(810,160,70,70);
  pig1 = new pig(810,350);
  pig2 = new pig(810,220);
  bird1 = new bird(100,100);

  log1 = new log(810,260,300,PI/2) //PI =180 degress
  log2 = new log(810,180,300,PI/2) //PI =180 degress
  log3 = new log(760,120,150,PI/7) //PI =180 degress
  log4 = new log(870,120,150,-PI/7) //PI =180 degress
  //console.log(humans.position.x);
  //console.log(humans.position.y);
}

function draw(){
  background(backgroundimage);

  Engine.update(universe);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  pig2.display();
  bird1.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
}