new p5(p => {  

  removeCodeExample();
  removeCodeExample = () => p.remove();

  p.setup = function() {
    p.createCanvas(600, 600);
    p.background('white');
    
    //body
    p.fill('pink');
    p.rect(80, 250, 250, 150);
    
    //head
    p.fill('pink');
    p.ellipse(90, 280, 130, 130);

    //legs        
    p.fill('pink');  
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
    p.fill('pink');
    p.triangle(60, 225, 70, 200, 80, 220); 
    p.triangle(90, 225, 100, 200, 110, 224);   
    
    //Tail
    p.stroke('pink')
    p.strokeWeight(15);
    p.line(410, 300, 320, 300);
    p.line(410, 300, 420, 355);         
                
  }
  
}, 'code-wrapper');