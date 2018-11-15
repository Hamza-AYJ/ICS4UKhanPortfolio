var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var bodyH = bodyW/2;

draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(bodyX, bodyY-70, bodyH, 47); // face?

    //eyes
    fill(0);
    ellipse(bodyX-10, bodyY-70, bodyX/18,bodyY/-27);
    ellipse(bodyX+10, bodyY-70, bodyX/18,bodyY/-27);
    
    fill(209, 119, 16);
    ellipse(bodyX-1, bodyY-57, bodyH, bodyH/4);
    
    rect(bodyX-35, bodyY+40, 10, 25);
    rect(bodyX+22, bodyY+40, 10, 25);
};
