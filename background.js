class Background {
    constructor(game) {
        this.game = game;
        this.images = [];
        this.frame = 0;
        this.frameDuration = 1 / 10; // Duration of each frame at 10 FPS
        this.lastFrameChangeTime = 0; // Track when the last frame change occurred

        // Load the 39 background images
        for (let i = 0; i < 39; i++) {
            this.images[i] = ASSET_MANAGER.getAsset("./background/background" + i + ".png");
        }
    }

    update() {
        let currentTime = this.game.timer.gameTime;

        // Check if it's time to change to the next frame
        if (currentTime - this.lastFrameChangeTime > this.frameDuration) {
            this.frame = (this.frame + 1) % this.images.length; // Cycle through frames
            this.lastFrameChangeTime = currentTime;
        }
    }

    draw(ctx) {
        var sx = (this.game.camera.x / 4) + 460;
        var sy = (this.game.camera.y / 10) + 100;
        var sWidth = 620;
        var sHieght = 620;
        // Change this value if we go any higher and the background gets cut off.
        // if (sy < 0) {
        //     sy = 0;
        // }

        if (sx < 3) {
            sx = 3;
        }
        if (sx > 650) {
            sx = 650;
        }
        // console.log("X" + sx);
        // console.log("Y" + sy);
        ctx.drawImage(this.images[this.frame], sx, sy, sWidth, sHieght, 0, 0, this.game.ctx.canvas.width, this.game.ctx.canvas.height);
    }
}

