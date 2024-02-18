class SceneManager {
  constructor(game) {
    this.game = game;
    this.game.camera = this;

    this.hero = new Hero(this.game, 150, 0);
    this.game.addEntity(new Background(this.game));
    this.game.addEntity(this.hero);
    this.floorTiles = [];
    this.lastTileX = 512;

    this.loadFirst();
  }

  clearEntities() {
    this.game.entities.forEach(function (entity) {
      entity.removeFromWorld = true;
    });
  }
  /* This method loads everything we see on the canvas.
   * @Params level : takes the games level, which loads the coresponding json object.
   */
  loadFirst() {
    for (let i = 0; i < 3; i++) {
      let tile = new Floor(this.game, 256 * i, 500);
      this.game.addEntity(tile);
      this.game.addStageTile(tile);
    }
  }

  updateAudio() {
    //todo
  }
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  addNewFloorTiles() {
    // Assuming each new set of tiles starts at the lastTileX + 256
    let baseX = this.lastTileX + 256;

    // Remove the oldest four tiles if there are enough tiles
    while (this.floorTiles.length > 4) {
      let oldTile = this.floorTiles.shift(); // Remove from the beginning of the array
      oldTile.removeFromWorld = true; // Mark it for removal from the game
    }

    // Add four new tiles
    for (let i = 0; i < 4; i++) {
      let randomInt = this.getRandomIntInclusive(0, 3); // Generates a random integer between 0 and 3
      let tileX = baseX + 256 * i;
      let tile = new Floor(this.game, tileX, 400 + randomInt * 100);
      this.game.addEntity(tile);
      this.game.addStageTile(tile);
      this.floorTiles.push(tile); // Keep track of this tile
    }

    // Update the lastTileX to reflect the position of the new last tile
    this.lastTileX = baseX + 256 * 3; // Position of the new last tile
  }

  // Example usage:

  update() {
    let xmidpoint = PARAMS.CANVAS_WIDTH / 2 - PARAMS.BLOCKWIDTH / 2;
    let ymidpoint = PARAMS.CANVAS_HEIGHT / 2 - PARAMS.BLOCKWIDTH / 2;
    this.x = this.hero.x - xmidpoint + PARAMS.BLOCKWIDTH / 2;
    this.y = this.hero.y - ymidpoint + PARAMS.BLOCKWIDTH / 2 - PARAMS.BLOCKWIDTH;

    if (this.hero.x >= this.lastTileX - 512) {
      this.addNewFloorTiles();
    }
  }

  draw(ctx) {}
}
