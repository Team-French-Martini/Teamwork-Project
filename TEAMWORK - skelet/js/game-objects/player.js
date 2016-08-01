function Player(){
    this.playerSprite = new Kinetic.Sprite({
        x: PlayerConstants.StartingX,
        y: PlayerConstants.StartingY,
        width: PlayerConstants.PlayerWidth,
        height: PlayerConstants.PlayerHeight,
        image: Images.Player,
        animation: 'standing_Left',
        animations: {
            standing_Left: [
            360,0,60,80
            ],
            standing_Right: [
            300,0,60,80
            ],
            moving_Left: [
            // x, y, width, height 
            420,0,60,80,
            480,0,60,80,
            540,0,60,80,
            600,0,60,80,
            660,0,60,80,
            420,0,60,80,
            480,0,60,80,
            540,0,60,80,
            600,0,60,80,
            660,0,60,80,
            420,0,60,80,
            480,0,60,80,
            540,0,60,80,
            600,0,60,80,
            660,0,60,80,
            ],
            moving_Right: [
            // x, y, width, height
            0,0,60,80,
            60,0,60,80,
            120,0,60,80,
            180,0,60,80,
            240,0,60,80,
            0,0,60,80,
            60,0,60,80,
            120,0,60,80,
            180,0,60,80,
            240,0,60,80,
            0,0,60,80,
            60,0,60,80,
            120,0,60,80,
            180,0,60,80,
            240,0,60,80,
            ],
            jumping_Right: [
            // x, y, width, height
            960,0,60,80,
            1020,0,60,80,
            1080,0,60,80,
            1140,0,60,80,
            960,0,60,80,
            1020,0,60,80,
            1080,0,60,80,
            1140,0,60,80,
            960,0,60,80,
            1020,0,60,80,
            1080,0,60,80,
            1140,0,60,80,
            ],
            jumping_Left: [
            // x, y, width, height
            720,0,60,80,
            780,0,60,80,
            840,0,60,80,
            900,0,60,80,
            720,0,60,80,
            780,0,60,80,
            840,0,60,80,
            900,0,60,80,
            720,0,60,80,
            780,0,60,80,
            840,0,60,80,
            900,0,60,80,
            ]
        },
        frameRate: 15,
        frameIndex: 0,
    });

    this.x = this.playerSprite.getX();
    this.y = this.playerSprite.getY();
    this.width = this.playerSprite.getWidth();
    this.height = this.playerSprite.getHeight();
    this.isJumping =  false;
    this.motionState = PlayerConstants.Motion.StandingLeft;
    this.update = function(){
        if(!this.isJumping){
            if(this.motionState == PlayerConstants.Motion.MovingLeft) {
                this.playerSprite.move(PlayerConstants.VelocityLeft);
                if(this.playerSprite.attrs.x <= PlayerConstants.LeftLimit){
                    this.playerSprite.attrs.x = PlayerConstants.LeftLimit;
                }
            }
            else if(this.motionState == PlayerConstants.Motion.MovingRight) {
                this.playerSprite.move(PlayerConstants.VelocityRight);
                if(this.playerSprite.attrs.x >= PlayerConstants.RightLimit){
                    this.playerSprite.attrs.x = PlayerConstants.RightLimit;
                }
            }
        }
        else {
            if(this.motionState == PlayerConstants.Motion.RisingUpLeft){
                this.playerSprite.move(PlayerConstants.VelocityLeftUp);
                if(this.playerSprite.attrs.y <= PlayerConstants.UpLimit){
                    this.motionState = PlayerConstants.Motion.FallingDownLeft;
                }

                if(this.playerSprite.attrs.x <= PlayerConstants.LeftLimit){
                    this.playerSprite.attrs.x = PlayerConstants.LeftLimit;
                }
            }
            else if(this.motionState == PlayerConstants.Motion.FallingDownLeft){
                this.playerSprite.move(PlayerConstants.VelocityLeftDown);
                if(this.playerSprite.attrs.x <= PlayerConstants.LeftLimit){
                    this.playerSprite.attrs.x = PlayerConstants.LeftLimit;
                }

                if(this.playerSprite.attrs.y > PlayerConstants.StartingY){
                    this.playerSprite.setAnimation('standing_Left');
                    this.playerSprite.attrs.y = PlayerConstants.StartingY;
                    this.isJumping = false;
                    this.motionState = PlayerConstants.Motion.StandingLeft;
                }
            }
            else if(this.motionState == PlayerConstants.Motion.RisingUpRight){
                this.playerSprite.move(PlayerConstants.VelocityRightUp);
                if(this.playerSprite.attrs.y <= PlayerConstants.UpLimit){
                    this.motionState = PlayerConstants.Motion.FallingDownRight;
                }

                if(this.playerSprite.attrs.x >= PlayerConstants.RightLimit){
                    this.playerSprite.attrs.x = PlayerConstants.RightLimit;
                }
            }
            else if(this.motionState == PlayerConstants.Motion.FallingDownRight){
                this.playerSprite.move(PlayerConstants.VelocityRightDown);
                if(this.playerSprite.attrs.x >= PlayerConstants.RightLimit){
                    this.playerSprite.attrs.x = PlayerConstants.RightLimit;
                }

                if(this.playerSprite.attrs.y > PlayerConstants.StartingY){
                    this.playerSprite.setAnimation('standing_Right');
                    this.playerSprite.attrs.y = PlayerConstants.StartingY;
                    this.isJumping = false;
                    this.motionState = PlayerConstants.Motion.StandingRight;
                }
            }
            else if(this.motionState == PlayerConstants.Motion.RisingUpStraightFaceLeft){
                this.playerSprite.move(PlayerConstants.VelocityStraightUp);
                if(this.playerSprite.attrs.y <= PlayerConstants.UpLimit){
                    this.motionState = PlayerConstants.Motion.FallingDownStraightFaceLeft;
                }
            }
            else if(this.motionState == PlayerConstants.Motion.FallingDownStraightFaceLeft){
                this.playerSprite.move(PlayerConstants.VelocityStraightDown);

                if(this.playerSprite.attrs.y > PlayerConstants.StartingY){
                    this.playerSprite.setAnimation('standing_Left');
                    this.playerSprite.attrs.y = PlayerConstants.StartingY;
                    this.isJumping = false;
                    this.motionState = PlayerConstants.Motion.StandingLeft;
                }
            }
            else if(this.motionState == PlayerConstants.Motion.RisingUpStraightFaceRight){
                this.playerSprite.move(PlayerConstants.VelocityStraightUp);
                if(this.playerSprite.attrs.y <= PlayerConstants.UpLimit){
                    this.motionState = PlayerConstants.Motion.FallingDownStraightFaceRight;
                }
            }
            else if(this.motionState == PlayerConstants.Motion.FallingDownStraightFaceRight){
                this.playerSprite.move(PlayerConstants.VelocityStraightDown);

                if(this.playerSprite.attrs.y > PlayerConstants.StartingY){
                    this.playerSprite.setAnimation('standing_Right');
                    this.playerSprite.attrs.y = PlayerConstants.StartingY;
                    this.isJumping = false;
                    this.motionState = PlayerConstants.Motion.StandingRight;
                }
            }
        }
    }
    
}




