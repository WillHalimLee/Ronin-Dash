class Floor {
  constructor(game, x, y) {
    Object.assign(this, { game, x, y });
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ground.png");
    this.box = new boundingbox(
      this.x - this.game.camera.x,
      this.y - this.game.camera.y,
      PARAMS.BLOCKWIDTH * 4,
      PARAMS.BLOCKWIDTH * 2
    );
  }

  load() {}

  update() {
    this.box = new boundingbox(
      this.x - this.game.camera.x,
      this.y - this.game.camera.y,
      PARAMS.BLOCKWIDTH * 4,
      PARAMS.BLOCKWIDTH * 2
    );
  }

  draw(ctx) {
    ctx.drawImage(
      this.spritesheet,
      0,
      0,
      128,
      64,
      this.x - this.game.camera.x,
      this.y - this.game.camera.y,
      PARAMS.BLOCKWIDTH * 4,
      PARAMS.BLOCKWIDTH * 2
    );
  }
}
