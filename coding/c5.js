  {
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
      fill('saddlebrown');
      rect(x - 10, y, 20, 100);
    }

    function spring(x, y) {
      fill(0, 170, 0);
      ellipse(x, y, 50, 50);
    }

    function summer(x, y) {
      fill(0, 170, 0);
      ellipse(x, y, 100, 100);
    }

    function autumn(x, y) {
      fill('#AC7C51');
      ellipse(x, y, 100, 80);
    }

    function winter(x, y) {
    }


    function setup() {

      noStroke();
      let canvas = createCanvas(800, 700);
      canvas.parent('#code-wrapper');
      background('lightskyblue');

      //grass
      fill('forestgreen');
      rect(0, 300, 800, 400);

      for (let i=0; i<17; i++) {
        const x = xPosition[i];
        const y = yPosition[i];
        trunk(x, y);
        spring(x, y);
      } 


    }
  }

    // function draw() {
    // 	tree(Math.random() * 800, Math.random() * 400 + 300);
    // }