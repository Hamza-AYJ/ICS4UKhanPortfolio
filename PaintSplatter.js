var splatter = new Random(1);
var mean = width/2;
var standardDeviation = 20;


var draw = function() {
    
    this.x = random(20);
    noStroke();
    var position = splatter.nextGaussian()*standardDeviation + mean; 
    var point = splatter.nextGaussian(mean,standardDeviation);
    fill(position, position+random(40), position+random(300));
    ellipse (position,random(100,300),this.x,this.x);
};
