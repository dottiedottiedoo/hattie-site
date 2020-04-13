new p5(p => {

  removeCodeExample();
  removeCodeExample = () => p.remove();

  //position of trees
  const xPosition = [];
  for (let i=0; i<17; i++) {
    xPosition.push(Math.random() * 800); 
  }

  const yPosition = [
    300, 325, 350, 375,
    400, 425, 450, 475,
    500, 525, 550, 575,
    600, 625, 650, 675, 700
  ];

  //trunk
  function trunk(x, y) {
    p.fill('saddlebrown');
    p.rect(x - 10, y, 20, 100);
  }

  function spring(x, y) {
    p.fill(0, 170, 0);
    p.ellipse(x, y, 50, 50);
  }

  function summer(x, y) {
    p.fill(0, 170, 0);
    p.ellipse(x, y, 100, 100);
  }

  function autumn(x, y) {
    p.fill('#AC7C51');
    p.ellipse(x, y, 100, 80);
  }

  function winter(x, y) {
  }

  p.setup = function() {

    p.createCanvas(800, 700);
    p.noStroke();
    p.background('lightskyblue');

    //grass
    p.fill('forestgreen');
    p.rect(0, 300, 800, 400);

    for (let i=0; i<17; i++) {
      const x = xPosition[i];
      const y = yPosition[i];
      trunk(x, y);
      spring(x, y);
    } 

  }

  // p.draw = function() {
  //   tree(Math.random() * 800, Math.random() * 400 + 300);
  // }

}, 'code-wrapper');