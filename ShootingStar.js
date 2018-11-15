var xPos = 0;
var yPos = 0;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 20, 20);
    ellipse(400-xPos, 400-yPos, 20, 20);
    triangle(xPos/2,yPos/2, xPos-1, yPos-1, xPos+1, yPos-1);
    
    xPos +=2;
    yPos +=2;
    
    
};



