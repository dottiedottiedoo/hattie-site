new p5(p => {
  
  removeCodeExample();
  removeCodeExample = () => p.remove();

  let x = 0;
  let y = 0;

  p.setup = function() {
    p.createCanvas(400, 400);
  }

  p.draw = function() {
    p.background('green');
    p.fill('red');
    p.noStroke()
    p.ellipse(x, y, 50, 50);
    x = (x + 1) % 400;
    y = (y + 1) % 400;
  }

}, 'code-wrapper');