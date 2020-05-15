new p5(p => {

  removeCodeExample();
  removeCodeExample = () => p.remove();

  let n = 500;
  let side = 500;
  let speed = -3;
  let grow = 0.8;
  let burst = 0.01;
  let x = [], y = [], w = [], c = [];
  
  function tweak(size) {
    return Math.random() * size - (size / 2);
  }
   
  p.setup = function() {
    p.noStroke();
    p.createCanvas(side, side);
    for (let i = 0; i < n; i++) {
      x[i] = p.random(side);
      y[i] = side;
      w[i] = 10;
      c[i] = p.color(p.random(150), p.random(150), p.random(150), 200);
    }
  }
  
  p.draw = function() {
    
    p.background(220);
    
    for (let i = 0; i < n; i++) {
      p.fill(c[i]);
      p.ellipse(x[i], y[i], w[i]); 
      if (p.random() < burst || y[i] < 0) {
        x[i] = p.random(side);
        y[i] = side;
        w[i] = 10;
      }
      else {  // not burst
        y[i] = y[i] + speed;
        w[i] = w[i] + grow;
        x[i] = x[i] + tweak(2);
      }
    
    }
    
  }

}, 'code-wrapper');