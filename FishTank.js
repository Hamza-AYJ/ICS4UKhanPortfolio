background(89, 216, 255);

var drawFish = function(){
    
var centerX = random(400);
var centerY = random(400);
var bodyLength = random(150);
var bodyHeight = random(30, bodyLength);
var bodyColor = color(random(255), random(255), random(255));

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};
         
mouseClicked = function(){

drawFish();
};
