const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bImg;
var ground, hero, fly;

function preload() {
//preload the images here

bImg = loadImage("sky.png");

}

function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;

  // create sprites here

  ground = new Ground(600,height,1200,20);
  hero = new Hero(300,350,50);

}

function draw() {
  background(bImg);

  ground.display();
  hero.display();
  fly.display();
}

