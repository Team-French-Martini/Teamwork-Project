function Bomb(){
    function Bomb(){
        this.image = new Kinetic.Image({
            x: BombConstants.StartingX,
            y: BombConstants.StartingY,

            width: BombConstants.BombWidth,
            height: BombConstants.BombHeight,
            image:Images.BombImage
        })
        this.respawn = function () {
            this.image.setX(BombConstants.BombXSideLimit);
            this.image.setY(BombConstants.BombYSideLimit);
        },
            this.moveDown = function (){
                this.image.move(BombConstants.VelocityHorizontal);
            }
    }
}