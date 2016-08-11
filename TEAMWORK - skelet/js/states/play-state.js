function PlayState(gameStateManagerObj) {
    // to do: everyone
    this.layer = new Kinetic.Layer();
    this.gameStateManager = gameStateManagerObj,
        this.background = new PlayBackground(),
        this.player = new Player(),
        this.bomb = new Bomb(),
        this.coinsResult = new CoinsResult(),
        this.livesResult = new LivesResult(),
        this.coinsText = new CoinsText(),
        this.livesText = new LivesText(),
        this.playerLives = GameConstants.StartingLives,
        this.playerPoints = GameConstants.StartingPoints,

        this.FallingObjectInit = function () {

            var fallingObjectFirst = new FallingObject();
            var fallingObjectSecond = new FallingObject();
            var fallingObjectThird = new FallingObject();
            var fallingObjectForth = new FallingObject();
            var fallingObjectFifth = new FallingObject();
            var fallingObjectSixth = new FallingObject();


            return [fallingObjectFirst
                , fallingObjectSecond
                , fallingObjectThird
                , fallingObjectForth
                , fallingObjectFifth
                , fallingObjectSixth];

        },
        this.listOfFallingObjects = this.FallingObjectInit();


    //
    this.render = function () {
        this.layer.batchDraw();
    },
    this.update = function () {
        this.player.update();

        var currentBomb = this.bomb;
        this.layer.add(currentBomb.image);

        currentBomb.moveDown();


        var bombCollision = detectCollision(currentBomb, this.player);

        var currentx = currentBomb.image.x();
        var outOfRangeDetected = currentx <= BombConstants.BombXSideLimit;

        if (outOfRangeDetected) {
            outOfRangeDetected = false;
            setTimeout(function () {
                currentBomb.respawn();
            }, 1000)
        }


        if (bombCollision) {
            bombCollision=false;

            console.log("udar");
            this.playerLives -= 1;
            this.livesText.text.setText(this.playerLives);
            if (this.playerLives <= 0) {
                appendHighScore(this.playerPoints); //  <----- Highscore part
                var nextState = new ExitState(this.gameStateManager);
                this.gameStateManager.states.push(nextState);
            }
        }


        for (var i = 0; i < this.listOfFallingObjects.length; i += 1) {
            var currentFallingObject = this.listOfFallingObjects[i];

            //this.player.playerLives = 3;
            // console.log(this.player);

            currentFallingObject.moveDown();
            var collisionDetected = detectCollision(currentFallingObject, this.player);

            if (collisionDetected) {
                currentFallingObject.image.destroy();
                this.listOfFallingObjects.splice(this.listOfFallingObjects.indexOf(currentFallingObject), 1);
                var fallingObjectToAdd = new FallingObject();
                this.listOfFallingObjects.push(fallingObjectToAdd);
                this.layer.add(fallingObjectToAdd.image);

                //this is used to simulate +life
                if (currentFallingObject instanceof LifeBonus) {
                    this.playerLives += 1;
                    this.livesText.text.setText(this.playerLives);
                }

                //this is used to simulate if Bomb hits player
                if (currentFallingObject instanceof Bomb) {
                    this.playerLives -= 1;
                    this.livesText.text.setText(this.playerLives);

                }
                //this is used to simulate death
                if (currentFallingObject instanceof Rock) {

                    this.playerLives -= 1;
                    this.livesText.text.setText(this.playerLives);
                    if (this.playerLives <= 0) {
                        appendHighScore(this.playerPoints); //  <----- Highscore part
                        var nextState = new ExitState(this.gameStateManager);
                        this.gameStateManager.states.push(nextState);

                    }

                }
                if (currentFallingObject instanceof CoinOne) {

                    this.playerPoints += CoinConstants.CoinValueOne;
                    this.coinsText.text.setText(this.playerPoints);
                }
                if (currentFallingObject instanceof CoinTwo) {
                    this.playerPoints += CoinConstants.CoinValueTwo;
                    this.coinsText.text.setText(this.playerPoints);
                }


            }


            var currentY = currentFallingObject.image.getY();
            var fallDetected = currentY >= CoinConstants.CoinVerticalLimit;
            if (fallDetected) {
                currentFallingObject.image.destroy();
                this.listOfFallingObjects.splice(this.listOfFallingObjects.indexOf(currentFallingObject), 1);
                var fallingObjectToAdd = new FallingObject();
                this.listOfFallingObjects.push(fallingObjectToAdd);
                this.layer.add(fallingObjectToAdd.image);
            }

        }


    },
        this.layer.add(this.background.backgroundImage);
    this.layer.add(this.player.playerSprite);
    this.layer.add(this.coinsResult.coinsImage);
    this.layer.add(this.livesResult.livesImage);
    this.layer.add(this.coinsText.text);
    this.layer.add(this.livesText.text);
    this.layer.add(this.bomb.image);
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
