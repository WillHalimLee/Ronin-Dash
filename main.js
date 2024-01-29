
const ASSET_MANAGER = new AssetManager();
for (let i = 0; i <39; i++) {
    ASSET_MANAGER.queueDownload("./background/background" + i + ".png");
}

ASSET_MANAGER.queueDownload("./sprites/hero.png");
// ASSET_MANAGER.queueDownload("./sprites/wolf.png");
ASSET_MANAGER.queueDownload("./sprites/ground.png");

ASSET_MANAGER.downloadAll(() => {
    const gameEngine = new GameEngine();
   
    PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");

    PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;
    
	ctx.imageSmoothingEnabled = false;

    gameEngine.init(ctx);

    new SceneManager(gameEngine);
    gameEngine.start();
});

