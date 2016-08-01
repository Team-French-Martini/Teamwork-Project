function PlayState(gameStateManagerObj){
    // to do: everyone
    this.layer = new Kinetic.Layer();
    this.gameStateManager = gameStateManagerObj,
    this.background = new PlayBackground(),
    this.player = new Player(),
    this.bomb = new Bomb(),
    this.render = function () {
        this.layer.batchDraw();
    },
    this.update = function() {
        this.player.update();
        
    },

    this.layer.add(this.background.backgroundImage);
    this.layer.add(this.player.playerSprite);
    attatchPlayerEventsWalking(this.player);
    attatchPlayerEventsJumping(this.player);
    attatchPlayStateEvents(this);
    this.player.playerSprite.start();
    
    this.gameStateManager.stage.add(this.layer);

}

