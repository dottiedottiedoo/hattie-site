new p5(p => {

  removeCodeExample();
  removeCodeExample = () => p.remove();
  
  const names = ['Muppet', 'Dooby', 'Indilios', 'Stelloy', 'Hoopy'];
  const colors = ['red', 'orange', 'green', 'MediumTurquoise ', 'magenta'];
  const x = [60, 160, 260, 360, 460];
  const y = [50, 50, 50, 50, 50];

  const finish = 400;
  const circleWidth = 90;

  p.setup = function() {
    p.createCanvas(510, 500);
    p.textSize(16);
    p.textAlign('center');
    var img;
    function preload() {
      img = p.loadImage('assets/laDefense.jpg');
    }
  }

  p.draw = function() {

    function pig() {
      
      p.translate(100,-190);  
      
      //body
      p.fill('hotpink');
      p.rect(30, 250, 250, 150);

      //head
      p.ellipse(40, 280, 130, 130);

      //legs         
      p.rect(50, 400, 20, 50);
      p.rect(100, 400, 20, 50);
      p.rect(150, 400, 20, 50);
      p.rect(200, 400, 20, 50);

      //Face
      p.ellipse(35, 300, 70, 50); 
      p.fill('black');
      p.ellipse(20, 296, 20, 20);
      p.ellipse(50, 296, 20, 20);
      p.fill('blue');
      p.ellipse(50, 250, 20, 20);       
      p.ellipse(15, 250, 20, 20);       

      //ears
      p.fill('hotpink');
      p.triangle(10, 225, 20, 200, 30, 220); 
      p.triangle(40, 225, 50, 200, 60, 224);   

      //Tail
      p.stroke('hotpink')
      p.strokeWeight(15);
      p.line(310, 300, 270, 300);
      p.line(310, 300, 370, 355);
      
      p.translate(-100, 190);
      
    }
    
    //winning line
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
        p.text(names[i], 250, 165);
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


