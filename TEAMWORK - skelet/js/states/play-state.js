function PlayState(gameStateManagerObj) {
    // to do: everyone
    this.layer = new Kinetic.Layer();
    this.gameStateManager = gameStateManagerObj,
        this.background = new PlayBackground(),
        this.player = new Player(),
        this.bomb = new Bomb(),
        this.FallingObjectInit =  function () {

        var fallingObjectFirst = new FallingObject();
        var fallingObjectSecond = new FallingObject();
        var fallingObjectThird = new FallingObject();
        var fallingObjectForth = new FallingObject();
        var fallingObjectFifth = new FallingObject();
        var fallingObjectSixth = new FallingObject();


        return [fallingObjectFirst
            ,fallingObjectSecond
            ,fallingObjectThird
            ,fallingObjectForth
            ,fallingObjectFifth
            ,fallingObjectSixth];

    },
        this.listOfFallingObjects = this.FallingObjectInit();


    //
    this.render = function () {
        this.layer.batchDraw();
    },
        this.update = function () {
            this.player.update();
            for (var i = 0; i < this.listOfFallingObjects.length; i += 1) {
                var currentFallingObject = this.listOfFallingObjects[i];
                currentFallingObject.moveDown();
                var collisionDetected = detectCollision(currentFallingObject, this.player);
                if(collisionDetected){
                    currentFallingObject.image.destroy();
                    this.listOfFallingObjects.splice(this.listOfFallingObjects.indexOf(currentFallingObject),1);
                    var fallingObjectToAdd = new FallingObject();
                    this.listOfFallingObjects.push(fallingObjectToAdd);
                    this.layer.add(fallingObjectToAdd.image);
                }
                var currentY = currentFallingObject.image.getY();
                var fallDetected = currentY >= CoinConstants.CoinVerticalLimit;
                if(fallDetected)
                {
                    currentFallingObject.image.destroy();
                    this.listOfFallingObjects.splice(this.listOfFallingObjects.indexOf(currentFallingObject),1);
                    var fallingObjectToAdd = new FallingObject();
                    this.listOfFallingObjects.push(fallingObjectToAdd);
                    this.layer.add(fallingObjectToAdd.image);
                }
            }



        },
        this.layer.add(this.background.backgroundImage);
    this.layer.add(this.player.playerSprite);
    for (var i = 0; i < this.listOfFallingObjects.length; i += 1) {
        var coin = this.listOfFallingObjects[i];
        this.layer.add(coin.image);
    }
    attatchPlayerEventsWalking(this.player);
    attatchPlayerEventsJumping(this.player);
    attatchPlayStateEvents(this);
    this.player.playerSprite.start();
    this.gameStateManager.stage.add(this.layer);


}

