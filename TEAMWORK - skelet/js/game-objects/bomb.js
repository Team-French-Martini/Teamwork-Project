function Bomb(){
    function Bomb(){
        this.image = new Kinetic.Image({
            x: BombConstants.BombXSideLimit,
            y: BombConstants.BombYSideLimit,

            width: BombConstants.BombWidth,
            height: BombConstants.BombHeight,
            image:Images.Bomb
        })
        this.respawn = function () {
            this.image.setX(1000);
            this.image.setY(700);
        },
            this.moveDown = function (){
                this.image.move(BombConstants.VelocityHorizontal);
            }
    }
}