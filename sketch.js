var database;
var info;
var jumble ,arr=[],score=0;
var backgroundimg,gameState=1;
var count=0,time=0;
function preload(){
backgroundimg=loadImage('images/background.jpg')
}
function setup(){
createCanvas(1350,600)
database=firebase.database();
jumble=new Jumbleword()
jumble.read()
console.log(displayWidth)
}

function draw(){
    background(backgroundimg)
if(gameState==1){
   if(info!= undefined){
      jumble.display() 
      time=Math.round(count/frameRate()) 
      count=count+1;
      if(time==60){
         gameState=0;
      }
      text("TIME:"+time,1350/2+150,50) 
   }
   else{
      fill('black')
      textSize(40)
      text("loading...",1350/2-200,600/2-50)
   }
}
if(gameState==0){
   fill('yellow')
   textSize(50)
   textAlign(CENTER)
  text("Time Up",1350/2,600/2)
}
if(score==6){
   fill('yellow')
   textSize(50)
   textAlign(CENTER)
  text("Hurrah!YOU WON",1350/2,600/2)
gameState=0;
jumble.hide();
}
 
}