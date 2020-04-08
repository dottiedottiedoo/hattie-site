}  
  function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('#code-wrapper');
    background('white');
    
    //color, stroke ...
    
    
    //body
    fill('pink');
    rect(80, 250, 250, 150);
    
    //head
    fill('pink');
    ellipse(90, 280, 130, 130);

    //legs        
    fill('pink');  
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
    fill('pink');
    triangle(60, 225, 70, 200, 80, 220); 
    triangle(90, 225, 100, 200, 110, 224);   
    
    //Tail
    stroke('pink')
    strokeWeight(15);
    line(410, 300, 320, 300);
    line(410, 300, 420, 355);         
            

    
  }
}