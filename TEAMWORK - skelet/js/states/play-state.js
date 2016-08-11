function PlayState(gameStateManagerObj) {
    // to do: everyone
    this.layer = new Kinetic.Layer();
    this.gameStateManager = gameStateManagerObj,
        this.background = new PlayBackground(),
        this.player = new Player(),
        this.bomb = new Bomb(),

        // this.playerLives = GameConstants.StartingLives,
        // this.playerPoints = GameConstants.StartingPoints,

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

                //this.player.playerLives = 3;
                 console.log(this.player);

                currentFallingObject.moveDown();
                var collisionDetected = detectCollision(currentFallingObject, this.player);
                if(collisionDetected){
                    currentFallingObject.image.destroy();
                    this.listOfFallingObjects.splice(this.listOfFallingObjects.indexOf(currentFallingObject),1);
                    var fallingObjectToAdd = new FallingObject();
                    this.listOfFallingObjects.push(fallingObjectToAdd);
                    this.layer.add(fallingObjectToAdd.image);

                    //this is used to simulate +life
                    if(currentFallingObject instanceof LifeBonus){
                        this.player.playerLives+=1;
                        
                    }
                //this is used to simulate death
                     if (currentFallingObject instanceof Rock) {
                   
                   
                      this.player.playerLives -= 1;
                      if (this.player.playerLives === 0) {
                            appendHighScore(this.playerPoints); //  <----- Highscore part
                         var nextState = new ExitState(this.gameStateManager);
                         this.gameStateManager.states.push(nextState);

                        }

                    }
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

function appendHighScore(playerPoints) {
    if (localStorage.length < GameConstants.HighScoresTop) {
        localStorage.setItem((new Date()).toString(), JSON.stringify(playerPoints));
    }
    else {
        var shouldAddPoints = false;
        var keyMinPoints;
        var highScoresMinPoints = 10000000000000;
        for (var key in localStorage) {
            if (localStorage[key] < playerPoints) {
                shouldAddPoints = true;
            }
            
            if (highScoresMinPoints > localStorage[key]) {
                keyMinPoints = key;
                highScoresMinPoints = localStorage[key];
            }
        }

        if (shouldAddPoints) {
            localStorage.removeItem(keyMinPoints);
            localStorage.setItem((new Date()).toString(), JSON.stringify(playerPoints));
        }
    }
}
