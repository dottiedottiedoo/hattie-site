new p5(p => {
  
  removeCodeExample();
  removeCodeExample = () => p.remove();

  p.setup = function() {
    p.createCanvas(400, 450);
    p.background(0);
    p.noStroke();
  }


  
  
  p.draw = function() {
    p.ellipse(p.mouseX, p.mouseY, 20);

    p.textSize(20);
    p.text("Move mouse over example", 150, 30);
    
    if (p.mouseX < 200) {
      p.fill(p.mouseY > 200 ? 'blue' : 'green');
    }
    else {
      p.fill(p.mouseY > 200 ? 'red' : 'yellow');
    }
  }

}, 'code-wrapper');