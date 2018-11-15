var XPos = [random(400), random(400), random(400), random(400), random(400),random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400)];
var YFall = [random(400), random(400), random(400), random(400), random(400),random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400), random(400)];

draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < XPos.length; i++) {
        noStroke();
        fill(0, 200, 255);
        ellipse(XPos[i], YFall[i], 10, 10);
        YFall[i] += random(15);
        
    if (YFall[i]>400){
    YFall[i] = 0;
    }
    }
};

var mouseClicked = function(){
  XPos.push(mouseX);
  YFall.push(mouseY);
};
