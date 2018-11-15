
var drawRange = function() {
    var incAmount = 0.01;
    stroke(42, 51, 44);
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height/2);
        rect(t*100, height-y, 1, y);
    }
};

var drawRangeAgain = function(){
  
  var incAmount =0.01;
    stroke(158, 158, 158);
  for (var t=0; t < incAmount*width; t+= incAmount){
      var n = noise(t+45);
      var y = map(n,0,1,-31,height/1.13);
      rect(t*200, height-y,1,y);
  }
};

var standardDeviation = 2;
var cloudNum = 0;


var drawClouds = function(){
 fill(188, 215, 224);
    for (var i=0; i<5; i++){
    text("CLOUD", random(0,400), random(0,200));
    }
};

var drawBirds = function(){
    fill(51, 184, 232);
    for (var i=0; i<5; i++){
    text("bird", random(0,400), random(0,200));
    }
};

var drawTrees = function(){
    fill(56, 217, 62);
    for (var i=0; i<5; i++){
    text("TREE", random(0,400), random(300,400));
    }
    
};

drawClouds();
drawBirds();
drawRangeAgain();
drawRange();
drawTrees();


