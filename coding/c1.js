{
  const names = ['Mama', 'Daddy', 'Indy', 'Stella', 'Hattie', 'grandma', 'granda'];
  const colors = ['red', 'orange', 'green', 'MediumTurquoise ', 'magenta', 'lawngreen', 'orangered'];
  const x = [60, 160, 260, 360, 460, 560, 660];
  const y = [50, 50, 50, 50, 50, 50, 50];

  const finish = 600;
  const circleWidth = 90;

  function setup() {
    let canvas = createCanvas(720, 700);
    canvas.parent('#code-wrapper');
    textSize(16);
    textAlign('center');
    var img;
    function preload() {
      img = loadImage('assets/laDefense.jpg');
    }
  }

  function draw() {
    
    function pig() {
      
      translate(100,-190);  
      
      //body
      fill('hotpink');
      rect(80, 250, 250, 150);

      //head
      ellipse(90, 280, 130, 130);

      //legs         
      rect(100, 400, 20, 50);
      rect(150, 400, 20, 50);
      rect(200, 400, 20, 50);
      rect(250, 400, 20, 50);

      //Face
      ellipse(85, 300, 70, 50); 
      fill('black');
      ellipse(70, 296, 20, 20);
      ellipse(100, 296, 20, 20);
      fill('blue');
      ellipse(100, 250, 20, 20);       
      ellipse(65, 250, 20, 20);       

      //ears
      fill('hotpink');
      triangle(60, 225, 70, 200, 80, 220); 
      triangle(90, 225, 100, 200, 110, 224);   

      //Tail
      stroke('hotpink')
      strokeWeight(15);
      line(410, 300, 320, 300);
      line(410, 300, 420, 355);
      
      translate(-100, 190);
      
    }
    
    background('#4169E1');
    stroke('black');
    line(0, finish, 720, finish);

    //loop over people, draw their circles
    for (let i = 0; i < names.length; i++) {
      fill(colors[i]);
      ellipse(x[i], y[i], circleWidth, circleWidth);
      fill('black');
      text(names[i], x[i], y[i]);
    }
    
    //loop over people, check for winner, increase y
    for (let i = 0; i < names.length; i++) {
      if (y[i] + 45 > finish) { //winner!
        pig();
        fill(colors[i]);
        noStroke();
        textSize(60);
        textFont('cursive');
        text(names[i], 330, 165);
        noLoop();
        return;
      }
      const kind = Math.random() * 10;
      const jump = Math.random();
      if (kind < 6) {       //forward
        y[i] = y[i] + jump * 2; 
      }
      else if (kind < 8) {  //fast forward
        y[i] = y[i] + jump * 5; 
      }
      else {                //back
        y[i] = y[i] - jump * 2;   
      }
    }

  }
}

