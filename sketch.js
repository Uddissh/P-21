var bullet1, bullet2, bullet3;
var thickness1, thickness2, thickness3;
var wall1, wall2, wall3;
var speed1, speed2, speed3;
var weight1, weight2, weight3;
var damege1, damage2, damage3;

function setup() {
  createCanvas(1600,800);
  
  bullet1 = createSprite(100, 100, 50, 10);
  bullet2 = createSprite(100, 200, 50, 10);
  bullet3 = createSprite(100, 300, 50, 10);

  wall1 = createSprite(1350, 100, 10, 50);
  wall2 = createSprite(1350, 200, 10, 50);
  wall3 = createSprite(1350, 300, 10, 50);
	
	

  thickness1 = random(22, 83);
  thickness2 = random(22, 83);
  thickness3 = random(22, 83);

  speed1 = random(223, 321);
  speed2 = random(223, 321);
  speed3 = random(223, 321);

  weight1 = random(30, 52);
  weight2 = random(30, 52);
  weight3 = random(30, 52);

  bullet1.shapeColor = "white";
  bullet2.shapeColor = "white";
  bullet3.shapeColor = "white";

  wall1.shapeColor = "lightblue";
  wall2.shapeColor = "lightblue";
  wall3.shapeColor = "lightblue";

  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;

  damage1 = 0.5 * weight1 * speed1 * speed1 / thickness1 * thickness1 * thickness1;
  damage2 = 0.5 * weight2 * speed2 * speed2 / thickness2 * thickness2 * thickness2;
  damage3 = 0.5 * weight3 * speed3 * speed3 / thickness3 * thickness3 * thickness3; 

}

function draw() {
  background(80,80,80);
  
		bullet1.collide(wall1);
		bullet2.collide(wall2);
		bullet3.collide(wall3);

		

		if(bullet1.isTouching(wall1)) {

		if(damage1 >= 10) {
		wall1.shapeColor = "red"
		}

		if(damage1 <= 10) {
			wall1.shapeColor = "green"
			}
	}

		if(bullet2.isTouching(wall2)) {

		if(damage2 >= 10) {
		wall2.shapeColor = "red"
		}

		if(damage2 <= 10) {
			wall2.shapeColor = "green"
			}
	}

		if(bullet3.isTouching(wall3)) {

		if(damage3 >= 10) {
		wall3.shapeColor = "red"
		}

		if(damage3 <= 10) {
			wall3.shapeColor = "green"
			}
	}

	console.log(damage1);
	console.log(damage2);
	console.log(damage3);
		
	drawSprites();

}