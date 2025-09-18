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
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300,600,100,10);
    createPlatform(100,700,100,10);
    createPlatform(600,520,100,10);
    createPlatform(812,420,100,10);
    createPlatform(1200,50,100,10);
    createPlatform(990,330,100,10);
    



    // TODO 3 - Create Collectables
      createCollectable("kennedi", 300, 600, 0.5, 0.7);
      createCollectable("grace", 100,698,0.5, 0.7);
      createCollectable("database",812,420,0.5, 0.7);
      createCollectable("max",1200,50,0.5,0.7);
      createCollectable("steve",990,330,0.5,0.7);
      createCollectable("diamond",600,520,0.5,0.7);
    


    
    // TODO 4 - Create Cannons
    createCannon("top", 659,590);
    createCannon("right",299,190);
    createCannon("top",299,590);
    createCannon("right",420,290,100);
    createCannon("right", 620,290,100);
    createCannon("top",998,490);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
