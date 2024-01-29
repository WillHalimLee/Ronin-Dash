class Wolf { 
    constructor(game, x, y){
        Object.assign(this, {game, x, y});
        this.game.wolf = this;
        //this.updateBB();
        this.healthPoints = 400000;
        this.dir = 0; // 0 = right, 1 = left
        //if wolf is running maybe just speed up the frames and velocity of wolf
        this.state = 0; // 0 = idle, 1 = walk, 2 = running, 3 = jumping
        this.attack = 0; // 0 = no attack, 1 = dash, 2 = slash, 3 = shout
        this.phase = 0; // 0 = phase1; 1 = phase2
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/wolf.png")
        this.animation = [];
        this.animation[0] = new animator(this.spritesheet, 62, 7, 47, 33, 1, 1, true)
        this.animation[1] = new animator(this.spritesheet, 110, 7, 47, 33, 1,1, true);
        //this.vision = new Boundingbox(1200, 1000, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH)
        this.dash = false;
    }

    update(){
        // if(this.healthPoints == 0){
        //     this.collide = false;
        //     } 
        if(this.dash === false){
            if(this.game.camera.hero.x < this.x){
                this.dir = 0;
            } else{
                this.dir = 1;
            }
        }
        if(this.game.j){
            this.state = 1;
            this.dash = true;
            if(this.dir == 1){
                for(var i = 0; i < 5; i++){
                    
                    setTimeout(() => {this.x += 18}, 5);
                    
                };
            } else if(this.dir == 0){
                for(var i = 0; i < 5; i++){
                    setTimeout(() => {this.x -= 18}, 5);
                    
                };
                
            }
            this.dash = false;
        }     
        
        if(this.x < this.game.hero.x - 500){
            this.x += 5;
        } else if(this.x > this.game.hero.x + 500){
            this.x -= 5;
        } 
        //attacking
        
        // else if(this.game.j && this.dir == 0){
        //     this.state = 1;
        //     for(var i = 0; i < 5; i++){
        //         setTimeout(() => {this.x -= 15}, 5);
                
        //     };
        // }


        // //atacking
        // if(this.clockTick){//attack every 8 or so seconds, how to do that? 
        //     if(this.phase == 0){
        //         this.attack = Math.floor(Math.random * 2) + 1;
        //         if(this.attack = 1){

        //         } else {

        //         }
        //     } else {
        //         this.attack = Math.floor(Math.random * 3) + 1;
        //         if(this.attack = 1){

        //         } else if(this.attack = 2){

        //         } else{
        //             this.radius
        //         }
        //     }
        // } 

    };

    draw(ctx){
        this.animation[this.dir].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE);
      
        //use this for animations with an added attack array frame maybe???
        //this.animations[this.dir][this.state].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE); 
    };
}
