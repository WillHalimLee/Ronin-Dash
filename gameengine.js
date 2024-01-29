// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
  constructor(options) {
    // What you will use to draw
    // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    this.ctx = null;

    // Everything that will be updated and drawn each frame
    this.entities = [];

    // List of tiles that comprise the stage
    this.stageTiles = [];

    // Information on the input
    this.w = false;
    this.a = false;
    this.s = false;
    this.d = false;

    this.i = false;
    this.j = false;
    this.k = false;
    this.l = false;

    // Options and the Details
    this.options = options || {
      debugging: false,
    };
  }

  init(ctx) {
    this.ctx = ctx;
    this.startInput();
    this.timer = new Timer();
  }

  start() {
    this.running = true;
    const gameLoop = () => {
      this.loop();
      requestAnimFrame(gameLoop, this.ctx.canvas);
    };
    gameLoop();
  }

  startInput() {
    let that = this;

    const getXandY = (e) => ({
      x: e.clientX - this.ctx.canvas.getBoundingClientRect().left,
      y: e.clientY - this.ctx.canvas.getBoundingClientRect().top,
    });

    this.ctx.canvas.addEventListener("wheel", (e) => {
      if (this.options.debugging) {
        console.log("WHEEL", getXandY(e), e.wheelDelta);
      }
      e.preventDefault(); // Prevent Scrolling
      this.wheel = e;
    });

    this.ctx.canvas.addEventListener("contextmenu", (e) => {
      if (this.options.debugging) {
        console.log("RIGHT_CLICK", getXandY(e));
      }
      e.preventDefault(); // Prevent Context Menu
      this.rightclick = getXandY(e);
    });

    this.ctx.canvas.addEventListener(
      "keydown",
      function (e) {
        switch (e.code) {
          case "KeyW":
            that.w = true;
            break;
          case "KeyA":
            that.a = true;
            break;
          case "KeyS":
            that.s = true;
            break;
          case "KeyD":
            that.d = true;
            break;
          case "KeyI":
            that.i = true;
            break;
          case "KeyJ":
            that.j = true;
            break;
          case "KeyK":
            that.k = true;
            break;
          case "KeyL":
            that.l = true;
            break;
        }
      },
      false
    );

    this.ctx.canvas.addEventListener(
      "keyup",
      function (e) {
        switch (e.code) {
          case "KeyW":
            that.w = false;
            break;
          case "KeyA":
            that.a = false;
            break;
          case "KeyS":
            that.s = false;
            break;
          case "KeyD":
            that.d = false;
            break;
          case "KeyI":
            that.i = false;
            break;
          case "KeyJ":
            that.j = false;
            break;
          case "KeyK":
            that.k = false;
            break;
          case "KeyL":
            that.l = false;
            break;
        }
      },
      false
    );
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  addStageTile(tile) {
    this.stageTiles.push(tile);
  }

  draw() {
    // Clear the whole canvas with transparent color (rgba(0, 0, 0, 0))
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    // Draw earliest things first
    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].draw(this.ctx, this);

      // draw bounding boxes for debugging
      // this.ctx.strokeStyle = "red";
      // if (this.entities[i].box) {
      //   this.ctx.strokeRect(this.entities[i].box.x, this.entities[i].box.y, this.entities[i].box.width, this.entities[i].box.height);
      // }

    }
    this.camera.draw(this.ctx);
  }

  update() {
    let entitiesCount = this.entities.length;

    for (let i = 0; i < entitiesCount; i++) {
      let entity = this.entities[i];
      entity.update();
    }
    this.camera.update();

    for (let i = this.entities.length - 1; i >= 0; --i) {
      if (this.entities[i].removeFromWorld) {
        this.entities.splice(i, 1);
      }
    }
  }

  loop() {
    this.clockTick = this.timer.tick();
    this.update();
    this.draw();
  }
}
