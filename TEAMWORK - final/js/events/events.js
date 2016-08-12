attatchPlayerEventsWalking = function(playerObj){
    document.addEventListener("keydown", function (e) {
        if(e.keyCode == GameConstants.LeftArrow && !playerObj.isJumping){
            playerObj.motionState = PlayerConstants.Motion.MovingLeft;
            playerObj.playerSprite.setAnimation('moving_Left');
        }

        if(e.keyCode == GameConstants.RightArrow && !playerObj.isJumping){
            playerObj.motionState = PlayerConstants.Motion.MovingRight;
            playerObj.playerSprite.setAnimation('moving_Right');
        }
    });

    document.addEventListener("keyup", function (e) {
        if(e.keyCode == GameConstants.LeftArrow && !playerObj.isJumping){
            playerObj.playerSprite.setAnimation('standing_Left');
            playerObj.motionState = PlayerConstants.Motion.StandingLeft;
        }

        if(e.keyCode == GameConstants.RightArrow && !playerObj.isJumping){
            playerObj.playerSprite.setAnimation('standing_Right');
            playerObj.motionState = PlayerConstants.Motion.StandingRight;
        }
    });
};

attatchPlayerEventsJumping = function(playerObj){
    var listener = new window.keypress.Listener();
    listener.simple_combo("left up", function() { 
        if(!playerObj.isJumping){
            playerObj.isJumping = true;
            playerObj.motionState = PlayerConstants.Motion.RisingUpLeft;
            playerObj.playerSprite.setAnimation('jumping_Left');
        }
    });
    listener.simple_combo("right up", function() { 
        if(!playerObj.isJumping){
            playerObj.isJumping = true;
            playerObj.motionState = PlayerConstants.Motion.RisingUpRight;
            playerObj.playerSprite.setAnimation('jumping_Right');
        }
    });
    listener.simple_combo("up", function() { 
        if(!playerObj.isJumping){
            playerObj.isJumping = true;
            if(playerObj.motionState == PlayerConstants.Motion.StandingLeft){
                playerObj.playerSprite.setAnimation('jumping_Left');
                playerObj.motionState = PlayerConstants.Motion.RisingUpStraightFaceLeft;
            }
            else if(playerObj.motionState == PlayerConstants.Motion.StandingRight){
                playerObj.playerSprite.setAnimation('jumping_Right');
                playerObj.motionState = PlayerConstants.Motion.RisingUpStraightFaceRight;
            }
        }
    });
};

attatchPlayStateEvents = function(playStateObj){
    document.addEventListener("keydown", function (e) {
        if(e.keyCode == GameConstants.Esc){
            playStateObj.layer.remove();
            playStateObj.gameStateManager.states.pop();
        }
    });
};

fallingCoinsLogic = function(menuStateObj) {
    var exists = document.getElementById('fallingCoins')
    if (exists) {
        exists.parentNode.removeChild(exists);
        return false;
    }

    var element = document.querySelector(menuStateObj);
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
        canvas.style.position = 'absolute',
        canvas.style.left = '150px',
        canvas.style.top = '0px',
        focused = false;

    canvas.width = "1000";
    canvas.height = "600";
    canvas.id = 'fallingCoins';
    canvas.style.position="absolute";
    canvas.style.top="10px";


    var coin = new Image();
    coin.src = 'http://i.imgur.com/5ZW2MT3.png'

    coin.onload = function () {
        element.appendChild(canvas)
        focused = true;
        drawloop();
    }
    var coins = []

    function drawloop() {
        if (focused) {
            requestAnimationFrame(drawloop);
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        if (Math.random() < .3) {
            coins.push({
                x: Math.random() * canvas.width | 0,
                y: -50,
                dy: 3,
                s: 0.5 + Math.random(),
                state: Math.random() * 10 | 0
            })
        }
        var i = coins.length
        while (i--) {
            var x = coins[i].x
            var y = coins[i].y
            var s = coins[i].s
            var state = coins[i].state
            coins[i].state = (state > 9) ? 0 : state + 0.1
            coins[i].dy += 0.3
            coins[i].y += coins[i].dy

            ctx.drawImage(coin, 44 * Math.floor(state), 0, 44, 40, x, y, 44 * s, 40 * s)

            if (y > canvas.height) {
                coins.splice(i, 1);
            }
        }
    }
};


attachMenuStateTitleEvents = function(menuStateObj) {

    menuStateObj.title.titleImage.addEventListener('mouseover',function(){
        fallingCoinsLogic('body');
    });

    menuStateObj.title.titleImage.addEventListener('mouseout',function(){
        fallingCoinsLogic('');
    });
};

attachMenuStateButtonsEvents = function(menuStateObj){
    menuStateObj.playButton.buttonImage.addEventListener('click', function(){
        var nextState = new PlayState(menuStateObj.gameStateManager);
        menuStateObj.gameStateManager.states.push(nextState);
    });
    menuStateObj.playButton.buttonImage.addEventListener('mouseover', function(){
        document.body.style.cursor='pointer';
    });
    menuStateObj.playButton.buttonImage.addEventListener('mouseout', function(){
        document.body.style.cursor='auto';
    });
    menuStateObj.highScoresButton.buttonImage.addEventListener('click', function(){
        var nextState = new HighScoresState(menuStateObj.gameStateManager);
        menuStateObj.gameStateManager.states.push(nextState);
    });
    menuStateObj.highScoresButton.buttonImage.addEventListener('mouseover', function(){
        document.body.style.cursor='pointer';
    });
    menuStateObj.highScoresButton.buttonImage.addEventListener('mouseout', function(){
        document.body.style.cursor='auto';
    });
    menuStateObj.exitButton.buttonImage.addEventListener('click', function(){
        window.close();
    });
    menuStateObj.exitButton.buttonImage.addEventListener('mouseover', function(){
        document.body.style.cursor='pointer';
    });
    menuStateObj.exitButton.buttonImage.addEventListener('mouseout', function(){
        document.body.style.cursor='auto';
    });
};

attatchExitStateButtonsEvents = function(exitStateObj){   
    exitStateObj.restartButton.buttonImage.addEventListener('click', function () {
        //clears exit state
        exitStateObj.gameStateManager.currentState().layer.remove();
        exitStateObj.gameStateManager.states.pop();

        //clears previous state
        exitStateObj.gameStateManager.currentState().layer.remove();
        exitStateObj.gameStateManager.states.pop();

        //starting next play
        var nextState = new PlayState(exitStateObj.gameStateManager);
        exitStateObj.gameStateManager.states.push(nextState);
    });

    exitStateObj.exitButton.buttonImage.addEventListener('click', function () {
        window.close();
    });
};

attachHighScoresStateButtonsEvents = function(highScoresStateObj){
    highScoresStateObj.highScoresCloseButton.buttonImage.addEventListener('click', function () {
        highScoresStateObj.gameStateManager.currentState().layer.remove();
        highScoresStateObj.gameStateManager.states.pop();
    });
}

function formatDate(date) {
    console.log(typeof(date));
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}
