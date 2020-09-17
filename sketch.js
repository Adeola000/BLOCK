function setup() {
  createCanvas(800,400);
  food = createSprite(400, 200, 50, 50);
  food.shapeColor = "blue"
  chicken = createSprite(400,100,30,30)
  chicken.shapeColor = "red"
  pasta = createSprite(400,350,40,40)
  pasta.shapeColor = "yellow"
  rice = createSprite(400,50,30,30)
  rice.shapeColor = "purple"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  //chicken.x = World.mouseX
  //chicken.y = World.mouseY
  pasta.x = World.mouseX
  pasta.y = World.mouseY
  console.log(Paper(rice,pasta))
  if(Paper(rice,pasta)){
  pasta.shapeColor = "green"
  rice.shapeColor = "green"
  }
  else{
  pasta.shapeColor = "yellow"
  rice.shapeColor = "purple"  
  }
  if (Paper (food,chicken)){
  food.shapeColor = "pink"
  chicken.shapeColor = "pink"}
else{
  food.shapeColor = "blue"
  chicken.shapeColor = "red"}
}

