function detectCollision(dropObj, playerObj){
    var r1 = {
        left: dropObj.image.getX(),
        top: dropObj.image.getY(),
        right: dropObj.image.getX() + dropObj.image.getWidth(),
        bottom: dropObj.image.getY() + dropObj.image.getHeight()
    };

    var r2 = {
        left: playerObj.playerSprite.getX(),
        top: playerObj.playerSprite.getY(),
        right: playerObj.playerSprite.getX() + playerObj.playerSprite.getWidth(),
        bottom: playerObj.playerSprite.getY() + playerObj.playerSprite.getHeight()
    };

    var result = !(r2.left > r1.right || 
             r2.right < r1.left || 
             r2.top > r1.bottom ||
             r2.bottom < r1.top);

    return result;
}