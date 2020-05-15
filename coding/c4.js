new p5(p => {

  removeCodeExample();
  removeCodeExample = () => p.remove();

  var t = 0;
  function light() {
    return 200 - p.abs(t - 200); 
  }
  
  p.setup = function() {
    p.createCanvas(500, 500);
    p.frameRate(50);
  }
  
  p.draw = function() {
   
    p.background(0);
    var bgrdAlpha = light() * 255 / 200;
    p.background(161, 238, 255, bgrdAlpha);
    
    //Hill
    p.noStroke();
    p.fill("green");
    p.bezier(0, 500, 200, 370, 300, 440, 500, 500);
    
    //Sun
    p.stroke(5);
    p.noFill();
    var xsun = p.curvePoint(-150, -100, 600, 650, t/400);
    var ysun = p.curvePoint(1600, 250, 250, 1600, t/400);
    p.noStroke();
    p.fill("yellow");
    p.ellipse(xsun, ysun, 113 );
    
    //flowers
    var xShift = [0, -130, 300];
    var yShift = [0,   42,  -17];
    for (var i = 0; i < xShift.length; i += 1) {
      flower(xShift[i], yShift[i]);
    }
    
    //time
    t = (t + 1) % 400;
   
    
  }
  
  function flower(x, y) {
    
    p.translate(x, y);
    
    //flower-petals
    p.noStroke();
    p.fill(255, 0, 0, 175);
    var xPetals = [188, 202, 203, 235, 245, 235];
    var yPetals = [320, 295, 347, 295, 320, 348];
    for (var i = 0; i < xPetals.length; i += 1) {
      p.ellipse(xPetals[i], yPetals[i], 20 + light() * 0.2); 
    }
    //stalk
    p.stroke("darkGreen");
    p.strokeWeight(5);
    p.line(220, 320, 220, 450);
    p.noStroke();
    
    //head
    p.fill("black");
    p.noStroke();
    p.ellipse(220, 320, 60); 
    
  }

}, 'code-wrapper');