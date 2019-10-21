//variables for the bitmoji
var derekX;
var derekY;
var bitmojiHeight = 100;

//this will draw the head only
var drawHead = function(height, derekX, derekY) {
    noStroke();
    fill(255, 193, 127); //Skin tone color
    ellipse(derekX+(bitmojiHeight/150*1),derekY+(bitmojiHeight/150*1),bitmojiHeight/150*83,bitmojiHeight/150*100); //Head

    fill(255, 255, 255); //Left chisel
    arc(derekX-(bitmojiHeight/150*42),derekY+(bitmojiHeight/150*37),bitmojiHeight/150*28,bitmojiHeight/150*55,bitmojiHeight/150*0,bitmojiHeight/150*361); //Left chisel

    arc(derekX+(bitmojiHeight/150*42),derekY+(bitmojiHeight/150*37),bitmojiHeight/150*28,bitmojiHeight/150*55,bitmojiHeight/150*0,bitmojiHeight/150*361); //Right chisel
    
    fill(94, 49, 11); //Hair color
    quad(derekX-(bitmojiHeight/150*39),derekY-(bitmojiHeight/150*19),derekX-(bitmojiHeight/150*-37),derekY-(bitmojiHeight/150*27),derekX-(bitmojiHeight/150*18),derekY-(bitmojiHeight/150*40),derekX-(bitmojiHeight/150*30),derekY-(bitmojiHeight/150*20)); //Left hair piece 
    
    quad(derekX+(bitmojiHeight/150*40),derekY-(bitmojiHeight/150*13),derekX+(bitmojiHeight/150*36),derekY-(bitmojiHeight/150*33),derekX+(bitmojiHeight/150*19),derekY-(bitmojiHeight/150*45),derekX+(bitmojiHeight/150*30),derekY-(bitmojiHeight/150*20)); //Right hair piece

    fill(0, 0, 0);
    arc(derekX+(bitmojiHeight/150*34),derekY-(bitmojiHeight/150*25),bitmojiHeight/150*47,bitmojiHeight/150*21,bitmojiHeight/150*175,bitmojiHeight/150*360); //Hat
    ellipse(derekX*(bitmojiHeight/150*1),derekY-(bitmojiHeight/150*38),bitmojiHeight/150*65,bitmojiHeight/150*31); //Top hair//Hat

    fill(255, 255, 255); //Fill eyes
    ellipse(derekX-(bitmojiHeight/150*11),derekY+(bitmojiHeight/150*1),bitmojiHeight/150*19,bitmojiHeight/150*14); //Left eye
    ellipse(derekX+(bitmojiHeight/150*14),derekY+(bitmojiHeight/150*1),bitmojiHeight/150*19,bitmojiHeight/150*14); //Right eye

    fill(94, 49, 11); //brown eyes

    ellipse(derekX-(bitmojiHeight/150*11),derekY+(bitmojiHeight/150*1),bitmojiHeight/150*10,bitmojiHeight/150*10); //Left pupil 
    ellipse(derekX+(bitmojiHeight/150*14),derekY+(bitmojiHeight/150*1),bitmojiHeight/150*10,bitmojiHeight/150*10); //Right pupil

    fill(255, 193, 127); //Nose color
    stroke(0,0,0); //Nose outline
    bezier(derekX+(bitmojiHeight/150*1),derekY+(bitmojiHeight/150*1),derekX+(bitmojiHeight/150*21),derekY+(bitmojiHeight/150*22),derekX-(bitmojiHeight/150*8),derekY+(bitmojiHeight/150*20),derekX-(bitmojiHeight/150*4),derekY+(bitmojiHeight/150*15)); //Nose

    fill(255,255,255); //White for teeth
    arc(derekX+(bitmojiHeight/150*3),derekY+(bitmojiHeight/150*25),bitmojiHeight/150*30,bitmojiHeight/150*13,bitmojiHeight/150*1,bitmojiHeight/150*180); //Mouth
    line(derekX-(bitmojiHeight/150*14),derekY+(bitmojiHeight/150*24),derekX+(bitmojiHeight/150*19),derekY+(bitmojiHeight/150*24)); //Top of mouth
};

//this will draw the body only
var drawBody = function(height, derekX, derekY) {
    
    fill(255, 193, 127); //Neck color
    noStroke();
    ellipse(derekX+(bitmojiHeight/150*1),derekY+(bitmojiHeight/150*50),bitmojiHeight/150*27,bitmojiHeight/150*19);

    fill(0, 0, 0);
    rect(derekX-(bitmojiHeight/150*37),derekY+(bitmojiHeight/150*53),bitmojiHeight/150*75,bitmojiHeight/150*63);

    fill(255, 255, 255);
    textSize(30); //Initials
    text("DR",derekX-(bitmojiHeight/150*22),derekY+(bitmojiHeight/150*72),bitmojiHeight/150*90,bitmojiHeight/150*90); 
};

var drawDerek = function(derekX, derekY,bitmojiHeight) {
    drawHead(derekX,derekY, bitmojiHeight);
    drawBody(derekX,derekY,bitmojiHeight);
};


//variables for the for loop's, function's, and array's
var numDrops = 200;
var xPositions = [];
var yPositions = [];
var dropColor = [];
var dropSpeed = [];
var derekX;
var derekY;
var bitmojiHeight = 100;



//for loops for the raindrops and the umbrella 
    for (var j = 0; j < numDrops; j++)
    {
    xPositions.push(random(390,10));
    }

    for (var j = 0; j < numDrops; j++)
    {
    yPositions.push(random(400,0));
    }

    for (var j = 0; j < numDrops; j++)
    {
    dropColor.push(color(random(0,255), random(0,255), random(0,255)));
    }
 for (var j = 0; j < numDrops; j++)
    {
    dropSpeed.push(random(1,5));
    }

//function to draw the umbrella
draw = function() {
background(204, 247, 255);

drawDerek(100, 350, 200);

//var drawUmbrella = function()

fill(0, 0, 0);
rect(280, 150, 15, 150, 100);

//function to draw my bitmoji

for (var i = 0; i < xPositions.length; i++) 
    {
        noStroke();
        fill(dropColor[i]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        xPositions[i] = xPositions[i] + dropSpeed[i];
if (xPositions[i] > 400)
        {
            xPositions[i] = 0;
        }
if (xPositions[i] > 280 && yPositions[i] > 140 && yPositions[i] < 310  )
        {
            xPositions[i] = 0;
        }
    
    }
};