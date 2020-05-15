new p5(p => { 
  
  removeCodeExample();
  removeCodeExample = () => p.remove();

  const circSize = 30;
  let colors = [
  "AliceBlue ",
  "AntiqueWhite ",
  "Aqua ",
  "Aquamarine ",
  "Azure ",
  "Beige ",
  "Bisque ",
  "Black ",
  "BlanchedAlmond ",
  "Blue ",
  "BlueViolet ",
  "Brown ",
  "BurlyWood ",
  "CadetBlue ",
  "Chartreuse ",
  "Chocolate ",
  "Coral ",
  "CornflowerBlue ",
  "Cornsilk ",
  "Crimson ",
  "Cyan ",
  "DarkBlue ",
  "DarkCyan ",
  "DarkGoldenRod ",
  "DarkGray ",
  "DarkGrey ",
  "DarkGreen ",
  "DarkKhaki ",
  "DarkMagenta ",
  "DarkOliveGreen ",
  "DarkOrange ",
  "DarkOrchid ",
  "DarkRed ",
  "DarkSalmon ",
  "DarkSeaGreen ",
  "DarkSlateBlue ",
  "DarkSlateGray ",
  "DarkSlateGrey ",
  "DarkTurquoise ",
  "DarkViolet ",
  "DeepPink ",
  "DeepSkyBlue ",
  "DimGray ",
  "DimGrey ",
  "DodgerBlue ",
  "FireBrick ",
  "FloralWhite ",
  "ForestGreen ",
  "Fuchsia ",
  "Gainsboro ",
  "GhostWhite ",
  "Gold ",
  "GoldenRod ",
  "Gray ",
  "Grey ",
  "Green ",
  "GreenYellow ",
  "HoneyDew ",
  "HotPink ",
  "IndianRed  ",
  "Indigo  ",
  "Ivory ",
  "Khaki ",
  "Lavender ",
  "LavenderBlush ",
  "LawnGreen ",
  "LemonChiffon ",
  "LightBlue ",
  "LightCoral ",
  "LightCyan ",
  "LightGoldenRodYellow ",
  "LightGray ",
  "LightGrey ",
  "LightGreen ",
  "LightPink ",
  "LightSalmon ",
  "LightSeaGreen ",
  "LightSkyBlue ",
  "LightSlateGray ",
  "LightSlateGrey ",
  "LightSteelBlue ",
  "LightYellow ",
  "Lime ",
  "LimeGreen ",
  "Linen ",
  "Magenta ",
  "Maroon ",
  "MediumAquaMarine ",
  "MediumBlue ",
  "MediumOrchid ",
  "MediumPurple ",
  "MediumSeaGreen ",
  "MediumSlateBlue ",
  "MediumSpringGreen ",
  "MediumTurquoise ",
  "MediumVioletRed ",
  "MidnightBlue ",
  "MintCream ",
  "MistyRose ",
  "Moccasin ",
  "NavajoWhite ",
  "Navy ",
  "OldLace ",
  "Olive ",
  "OliveDrab ",
  "Orange ",
  "OrangeRed ",
  "Orchid ",
  "PaleGoldenRod ",
  "PaleGreen ",
  "PaleTurquoise ",
  "PaleVioletRed ",
  "PapayaWhip ",
  "PeachPuff ",
  "Peru ",
  "Pink ",
  "Plum ",
  "PowderBlue ",
  "Purple ",
  "RebeccaPurple ",
  "Red ",
  "RosyBrown ",
  "RoyalBlue ",
  "SaddleBrown ",
  "Salmon ",
  "SandyBrown ",
  "SeaGreen ",
  "SeaShell ",
  "Sienna ",
  "Silver ",
  "SkyBlue ",
  "SlateBlue ",
  "SlateGray ",
  "SlateGrey ",
  "Snow ",
  "SpringGreen ",
  "SteelBlue ",
  "Tan ",
  "Teal ",
  "Thistle ",
  "Tomato ",
  "Turquoise ",
  "Violet ",
  "Wheat ",
  "White ",
  "WhiteSmoke ",
  "Yellow ",
  "YellowGreen "
  ];
  let i=0;

  p.setup = function() {
    p.createCanvas(470, 500);
    p.frameRate(5);
  }

  p.draw = function() {
    p.background('black');

    p.translate(-70, -100);
    
    //draw triangle part of tree
    function branch(xm, yb, w, clr) {
      p.fill('green');
      p.noStroke();
      const h = w/2;
      const x1 = xm - w/2;
      const y1 = yb;
      const x2 = xm + w/2;
      const y2 = yb;
      const x3 = xm;
      const y3 = yb - h;
      p.triangle(x1, y1, x2, y2, x3, y3);
      p.fill(clr);
      p.ellipse(x1, y1, circSize);
      p.ellipse(x2, y2, circSize);
      p.ellipse(x3, y3, circSize);
    }
    
    branch(300, 450, 300, colors[i++ % colors.length]);
    branch(300, 350, 250, colors[i++ % colors.length]);
    branch(300, 250, 200, colors[i++ % colors.length]);
    
    //grass
    p.fill('lawngreen');
    p.rect(0, 550, 600, 100);
    
    //trunk
    p.fill('brown');
    p.rect(270, 450, 60, 100);
  }

}, 'code-wrapper');
