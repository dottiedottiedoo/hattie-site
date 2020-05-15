new p5(p => {  

  removeCodeExample();
  removeCodeExample = () => p.remove();

  p.setup = function() {
    p.createCanvas(400, 400);
    p.frameRate(10);
  }
  
  p.draw = function() {
    
    p.background(220);

    
    // top-left
    p.fill(220);
    p.rect(0, 0, 400, 400);
    for(var x = 0; x <= p.mouseX; x += 50) {
     for (var y = 0; y <= p.mouseY; y += 50) { 
        p.noStroke();
        p.fill(0, 0, p.random(255));
        p.rect(x, y, 45, 45);
     }
    } 
    
    // top-right
    p.fill(220);
    p.rect(p.mouseX, 0, 400, 400);
    for(var x = p.mouseX; x <= 400; x += 50) {
     for (var y = 0; y <= 400; y += 50) { 
        p.noStroke();
        p.fill(p.random(255), 0, 0);
        p.rect(x, y, 45, 45);
      }
    } 
    
    // bottom-left 
    p.fill(220);
    p.rect(0, p.mouseY, 400, 400);
    for(var x = 0; x <= 400; x += 50) {
     for (var y = p.mouseY; y <= 400; y += 50) { 
        p.noStroke();
        p.fill(p.random(255));
        p.rect(x, y, 45, 45);
      }
    } 
  
    // bottom-right
    p.fill(220);
    p.rect(p.mouseX, p.mouseY, 400, 400);
    for(var x = p.mouseX; x <= 400; x += 50) {
     for (var y = p.mouseY; y <= 400; y += 50) { 
        p.noStroke();
        p.fill(0, p.random(255), 0);
        p.rect(x, y, 45, 45);
      }
    }

    // text
    p.stroke("yellow");
    p.fill("yellow");
    p.textSize(30);
    p.text("Move mouse over example", 20, 30);

  }


}, 'code-wrapper');