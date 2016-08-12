function Bomb(){
    this.image = new Kinetic.Image({
        x: BombConstants.BombXSideLimit,
        y: BombConstants.BombYSideLimit,
        width: BombConstants.BombWidth + 20 ,
        height: BombConstants.BombHeight +20,
        image: Images.Bomb
    });
    this.respawn =  function (){
        var newX = 900;
        var newY = 500;
        this.image.setX(newX);
        this.image.setY(newY);
    },
    this.moveSide = function (){
        this.image.move(BombConstants.VelocityHorizontal);
    }
}