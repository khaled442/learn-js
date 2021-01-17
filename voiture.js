
var xPos = 20 ;
var yPos = 271;
var x1 = 181;
var y1 = 57 ;
var x2 = 40;
var y2 = 40;
var x3 = 50 ;
var y3 = 50;

draw = function() {
    background(152, 162, 224);

    fill(5, 0, 163);
    rect(xPos, yPos, x1, y1);
    
    fill(255, 0, 0);
     strokeWeight(6);
    ellipse(xPos + 30, yPos + 74 , x2,y2 );
    ellipse(xPos +140, yPos +74, x2,y2);
    
    fill(173, 86, 146);
     strokeWeight(2);
    arc(xPos +90,yPos,183,179,-180,0);
    
    image(getImage("avatars/robot_male_1"),xPos + 20, yPos - 80);
    
    fill(235, 224, 18);
    ellipse (x3 ,y3, 70 ,70);
    
    line(x3 + 6 , y3 + 36 , x3  + -2 , y3 + 76 );
    line(x3 + 16 , y3 + 31 , x3  + 39 , y3 + 70 );
    line(x3 + 32 , y3 + 17 , x3  + 74 , y3 + 53 );
    line(x3 + -15 , y3 + 31 , x3  + -44 , y3 + 75 );
    
    xPos += 1;
    x3 /= 249/250 ;
    y3 /= 249/250;


