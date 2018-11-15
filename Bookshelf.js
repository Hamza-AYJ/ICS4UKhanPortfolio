var book = [90, 130, 170, 210];

var title = ["The Giver","Happy Potter", "Hunger Games", "The Sisters Brothers","Goldilocks and the 3 Bears", "Jack and the Beanstalk"];
var stars =  random(3); 

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);
rect(0, 285, width, 10);

for (var i=0; i<book[i]; i++){
fill(random(255), random(255), random(255));
rect(10, 20, 90, 100);
fill(0, 0, 0);
text(title[i], 15, 64, 70, 100);
}
for (var i = 0; i < stars; i++) {
    image(getImage("cute/Star"), 13 + i * 20, 90, 20, 30);
}

for (var i=0; i<book[i]; i++){
// draw one book
fill(random(255), random(255), random(255));
rect(120, 20, 90, 100);
fill(0, 0, 0);
text(title[i], 15, 120, 20, 100);
}
for (var i = 0; i < stars; i++) {
    image(getImage("cute/Star"), 13 + i * 20, 90, 20, 30);
}
