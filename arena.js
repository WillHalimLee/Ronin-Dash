class Floor1 {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ground.png");
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    }

    load() {

    };

    update() {
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet,
            0,
            64,
            64,
            64,
            this.x - this.game.camera.x,
            this.y- this.game.camera.y, PARAMS.BLOCKWIDTH * 1.75,
            PARAMS.BLOCKWIDTH * 1.75);
    };
}

class Floor2 {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ground.png");
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    }

    load() {

    };

    update() {
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet,
            64,
            64,
            64,
            64,
            this.x - this.game.camera.x,
            this.y- this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    };
}

class Floor3 {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ground.png");
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    }

    load() {

    };

    update() {
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet,
            128,
            64,
            64,
            64,
            this.x - this.game.camera.x,
            this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    };
}

class Underfloor {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ground.png");
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    }

    load() {

    };

    update() {
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet,
            192,
            64,
            64,
            64,
            this.x - this.game.camera.x,
            this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    };
}

class PillarL {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ground.png");
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    }

    load() {

    };

    update() {
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet,
            128,
            0,
            64,
            64,
            this.x - this.game.camera.x,
            this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    };
}

class PillarR {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ground.png");
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    }

    load() {

    };
  
    update() {
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet,
            192,
            0,
            64,
            64,
            this.x - this.game.camera.x,
            this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    };
}

class PlatformL {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ground.png");
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    }

    load() {

    };

    update() {
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet,
            0,
            0,
            64,
            64,
            this.x - this.game.camera.x,
            this.y - this.game.camera.y, PARAMS.BLOCKWIDTH * 1.75,
            PARAMS.BLOCKWIDTH * 1.75);
    };
}

class PlatformR {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ground.png");
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    }

    load() {

    };

    update() {
        this.box = new boundingbox(this.x - this.game.camera.x, this.y - this.game.camera.y,
            PARAMS.BLOCKWIDTH * 1.75, PARAMS.BLOCKWIDTH * 1.75);
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet,
            64,
            0,
            64,
            64,
            this.x - this.game.camera.x,
            this.y - this.game.camera.y, PARAMS.BLOCKWIDTH * 1.75,
            PARAMS.BLOCKWIDTH * 1.75);
    };
}