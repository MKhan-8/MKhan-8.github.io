$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
    


    // TODO 2 - Create Platforms
    createPlatform(320, 480, 220, 100, "navy");
    createPlatform(650, 610, 200, 100, "red");
    createPlatform(615, 345, 200, 80), "yellow";
    createPlatform(900, 215, 200, 100, "orange");
    createPlatform(1299, 102, 200, 80, "white")




    // TODO 3 - Create Collectables
    
    createCollectable("max", 100, 0, 1, 1);
   
    createCollectable("steve", 400, 0, 1, 1);
 
    createCollectable("grace", 700, 0, 1, 1);

    createCollectable("kennedi", 1000, 0, 1, 1);

 
    createCollectable("steve", 1200, 0, 1, 1);
    createCollectable("max", 1350, 50, 1, 1);



    
    // TODO 4 - Create Cannons
    createCannon("left", 100, 1000);
    createCannon("top", 505, 1200);
    createCannon("bottom", 1200, 2000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
