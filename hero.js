class Hero {

    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.hero = this;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/hero.png");

        this.x = 150;
        this.y = 400;
        this.jumpTick = 0;
        this.fallTick = 0;

        this.dir = 0; // 0 = right, 1 = left
        this.state = 0; // 0 = idle, 1 = parry, 2 = running, 3 = jumping, 4 = falling, 5 = attacking

        this.health = 100;
        this.baseDamage = 50;

        this.animations = [];
        this.loadAnimations();

        this.updateBox();
    };

    loadAnimations() {

        const HERO_WIDTH = 50;
        const HERO_HEIGHT = 29;

        for (let i = 0; i < 2; i++) {
            this.animations.push([]);
            for (let j = 0; j < 6; j++) {
                this.animations[i].push([]);
            }
        }

        // idle frames
        this.animations[0][0] = new animator(this.spritesheet, 0, 0, HERO_WIDTH,
            HERO_HEIGHT, 1, 0.08, true);

        this.animations[1][0] = new animator(this.spritesheet, 0, HERO_HEIGHT, HERO_WIDTH,
            HERO_HEIGHT, 1, 0.08, true);

        // parry frames
        this.animations[0][1] = new animator(this.spritesheet, HERO_WIDTH, 0, HERO_WIDTH,
            HERO_HEIGHT, 1, 0.07, true);

        this.animations[1][1] = new animator(this.spritesheet, HERO_WIDTH, HERO_HEIGHT,
            HERO_WIDTH, HERO_HEIGHT, 1, 0.07, true);

        // running frames
        this.animations[0][2] = new animator(this.spritesheet, 2 * HERO_WIDTH, 0, HERO_WIDTH,
            HERO_HEIGHT, 6, 0.08, true);

        this.animations[1][2] = new animator(this.spritesheet, 2 * HERO_WIDTH, HERO_HEIGHT,
            HERO_WIDTH, HERO_HEIGHT, 6, 0.08, true);

        // jumping frames
        this.animations[0][3] = new animator(this.spritesheet, 8 * HERO_WIDTH, 0, HERO_WIDTH,
            HERO_HEIGHT, 1, 0.08, true);

        this.animations[1][3] = new animator(this.spritesheet, 8 * HERO_WIDTH, HERO_HEIGHT, HERO_WIDTH,
            HERO_HEIGHT, 1, 0.08, true);

        // falling frames
        this.animations[0][4] = new animator(this.spritesheet, 9 * HERO_WIDTH, 0, HERO_WIDTH,
            HERO_HEIGHT, 1, 0.08, true);

        this.animations[1][4] = new animator(this.spritesheet, 9 * HERO_WIDTH, HERO_HEIGHT, HERO_WIDTH,
            HERO_HEIGHT, 1, 0.08, true);

        // attacking frames
        this.animations[0][5] = new animator(this.spritesheet, 10 * HERO_WIDTH, 0, HERO_WIDTH,
            HERO_HEIGHT, 4, 0.06, true);

        this.animations[1][5] = new animator(this.spritesheet, 10 * HERO_WIDTH, HERO_HEIGHT,
            HERO_WIDTH, HERO_HEIGHT, 4, 0.06, true);
    };

    updateBox() {
        this.box = new boundingbox(this.x + (15 * PARAMS.SCALE) - this.game.camera.x,
            this.y + (6 * PARAMS.SCALE),
            19 * PARAMS.SCALE,
            22 * PARAMS.SCALE);
    };

    update() {

        let that = this;

        const MAX_FALL_VELOC = 7;

        let canMoveLeft = true;
        let canMoveRight = true;

        // state defaults to falling
        if (this.state != 3) {
            this.state = 4;
        }

        // collision handling
        this.game.stageTiles.forEach(function (tile) {
            if (that.box.collide(tile.box)) {
                if (that.box.bottom - tile.box.top <= 4 * PARAMS.SCALE) {
                    if (that.dir == 0 && that.box.right >= tile.box.left + 3 * PARAMS.SCALE ||
                        that.dir == 1 && that.box.left <= tile.box.right - 3 * PARAMS.SCALE) {
                        that.jumpTick = 0;
                        that.fallTick = 0;
                        that.state = 0;
                    }
                } else if (that.dir == 0 && that.box.right > tile.box.left) {
                    canMoveRight = false;
                } else if (that.dir == 1 && that.box.left < tile.box.right) {
                    canMoveLeft = false;
                }

                if (that.state == 3 && that.box.top - tile.box.bottom <= 4 * PARAMS.SCALE) {
                    if (that.dir == 0 && that.box.right >= tile.box.left + 3 * PARAMS.SCALE ||
                        that.dir == 1 && that.box.left <= tile.box.right - 3 * PARAMS.SCALE) {
                        that.jumpTick = 0;
                        that.fallTick = 3;
                        that.state = 4;
                    }
                }
            }
        });

        // jump
        if (this.game.w && this.state != 3 && this.state != 4) {
            this.state = 3;
            this.deltaY = -24;
        }

        // y updates for jumping
        if (this.state == 3) {
            if (this.jumpTick < 35) {
                this.jumpTick++;
                this.y -= 7 - (0.2 * this.jumpTick);
            } else {
                this.jumpTick = 0;
                this.fallTick = 0;
                this.state = 4;
            }
        } else if (this.state == 4) {
            this.fallTick++;
            this.y += 0.2 * this.fallTick <= MAX_FALL_VELOC ? 0.2 * this.fallTick : MAX_FALL_VELOC;
        }

        // updates for left/right movement
        if (this.game.d && !this.game.a) {
            if (this.state != 3 && this.state != 4) this.state = 2;
            this.dir = 0;
            if (canMoveRight) this.x += 5;
        } else if (this.game.a && !this.game.d) {
            if (this.state != 3 && this.state != 4) this.state = 2;
            this.dir = 1;
            if (canMoveLeft) this.x -= 5;
        }

        console.log(this.state);
        this.updateBox();
    }

    draw(ctx) {
        this.animations[this.dir][this.state].drawFrame(this.game.clockTick, ctx,
            this.x - this.game.camera.x, this.y,
            PARAMS.SCALE);
    };

}