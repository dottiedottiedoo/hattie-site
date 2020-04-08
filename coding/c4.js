{
   function setup() {

    let canvas = createCanvas(400, 500);
    canvas.parent('#code-wrapper');
    background('deepskyblue');
    noStroke();

    //grass
    fill('green');
    rect(0, 400, 400, 1000);

    //trunk
    fill('saddlebrown');
    rect(175, 300, 50, 150);

    //leaves
    fill(0, 120, 0);
    ellipse(200, 300, 300, 150, 0.5);  //TRY ALPHA!!
    fill(0, 150, 0);
    ellipse(200, 200, 250, 120);
    fill(0, 200, 0);
    ellipse(200, 120, 200, 100);

  }
}