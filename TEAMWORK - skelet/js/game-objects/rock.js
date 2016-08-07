function Rock(){
    this.image = new Kinetic.Image({
        x: Math.floor((Math.random() * CoinConstants.CoinSideLimit)),
        y: Math.floor((Math.random() * CoinConstants.CoinUpperLimit)),
        width: CoinConstants.CoinOneWidth,
        height: CoinConstants.CoinOneHeight,
        image: Images.Rock
    })
    this.respawn = function () {
        var newX = Math.floor(Math.random() * RockConstants.RockSideLimit);
        var newY = Math.floor(Math.random() * RockConstants.RockUpperLimit);
        this.image.setX(newX);
        this.image.setY(newY);
    },
        this.moveDown = function () {
            this.image.move(RockConstants.VelocityDown);
        }
}

