new p5(p => {

  removeCodeExample();
  removeCodeExample = () => p.remove();

  p.setup = function() {

    p.createCanvas(400, 500);
    p.background('deepskyblue');
    p.noStroke();

    //grass
    p.fill('green');
    p.rect(0, 400, 400, 1000);

    //trunk
    p.fill('saddlebrown');
    p.rect(175, 300, 50, 150);

    //leaves
    p.fill(0, 120, 0);
    p.ellipse(200, 300, 300, 150);
    p.fill(0, 150, 0);
    p.ellipse(200, 200, 250, 120);
    p.fill(0, 200, 0);
    p.ellipse(200, 120, 200, 100);

  }

}, 'code-wrapper');