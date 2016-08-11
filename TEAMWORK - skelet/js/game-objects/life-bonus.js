function LifeBonus(){
        this.image = new Kinetic.Image({
            x: Math.floor((Math.random() * LifeBonusConstants.LifeBonusSideLimit)),
            y: Math.floor((Math.random() * LifeBonusConstants.LifeBonusUpperLimit)),
            width: LifeBonusConstants.LifeBonusWidth,
            height: LifeBonusConstants.LifeBonusHeight,
            image: Images.LifeBonus
        });
        this.respawn = function (){
            var newX = Math.floor(Math.random() * LifeBonusConstants.LifeBonusSideLimit);
            var newY = Math.floor(Math.random() * LifeBonusConstants.LifeBonusUpperLimit);
            this.image.setX(newX);
            this.image.setY(newY);
        }
        this.moveDown = function (){
            this.image.move(LifeBonusConstants.VelocityDown);
        }
}