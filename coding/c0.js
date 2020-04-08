{
    function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('#code-wrapper');
  }

  let x = 0;
  let y = 0;

  function draw() {
    background('green');
    fill('red');
    noStroke()
    ellipse(x, y, 50, 50);
    x = (x + 1) % 400;
    y = (y + 1) % 400;
  }
} 