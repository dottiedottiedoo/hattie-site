new p5(p => {

  removeCodeExample();
  removeCodeExample = () => p.remove();
  
  const names = ['Mama', 'Daddy', 'Indy', 'Stella', 'Hattie', 'grandma', 'granda'];
  const colors = ['red', 'orange', 'green', 'MediumTurquoise ', 'magenta', 'lawngreen', 'orangered'];
  const x = [60, 160, 260, 360, 460, 560, 660];
  const y = [50, 50, 50, 50, 50, 50, 50];

  const finish = 600;
  const circleWidth = 90;

  p.setup = function() {
    p.createCanvas(720, 700);
    p.textSize(16);
    p.textAlign('center');
    var img;
    function preload() {
      img = p.loadImage('assets/laDefense.jpg');
    }
  }

  p.draw = function() {
    
    console.log('GAME!');

    function pig() {
      
      p.translate(100,-190);  
      
      //body
      p.fill('hotpink');
      p.rect(80, 250, 250, 150);

      //head
      p.ellipse(90, 280, 130, 130);

      //legs         
      p.rect(100, 400, 20, 50);
      p.rect(150, 400, 20, 50);
      p.rect(200, 400, 20, 50);
      p.rect(250, 400, 20, 50);

      //Face
      p.ellipse(85, 300, 70, 50); 
      p.fill('black');
      p.ellipse(70, 296, 20, 20);
      p.ellipse(100, 296, 20, 20);
      p.fill('blue');
      p.ellipse(100, 250, 20, 20);       
      p.ellipse(65, 250, 20, 20);       

      //ears
      p.fill('hotpink');
      p.triangle(60, 225, 70, 200, 80, 220); 
      p.triangle(90, 225, 100, 200, 110, 224);   

      //Tail
      p.stroke('hotpink')
      p.strokeWeight(15);
      p.line(410, 300, 320, 300);
      p.line(410, 300, 420, 355);
      
      p.translate(-100, 190);
      
    }
    
    p.background('#4169E1');
    p.stroke('black');
    p.line(0, finish, 720, finish);

    //loop over people, draw their circles
    for (let i = 0; i < names.length; i++) {
      p.fill(colors[i]);
      p.ellipse(x[i], y[i], circleWidth, circleWidth);
      p.fill('black');
      p.text(names[i], x[i], y[i]);
    }
    
    //loop over people, check for winner, increase y
    for (let i = 0; i < names.length; i++) {
      if (y[i] + 45 > finish) { //winner!
        pig();
        p.fill(colors[i]);
        p.noStroke();
        p.textSize(60);
        p.textFont('cursive');
        p.text(names[i], 330, 165);
        p.noLoop();
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
}, 'code-wrapper');


