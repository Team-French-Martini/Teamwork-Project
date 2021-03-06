function PlayBackground(){
    this.backgroundImage = new Kinetic.Image({
        x: BackgroundConstants.PlayBackgroundStartingX,
        y: BackgroundConstants.PlayBackgroundStartingY,
        image: Images.PlayBgr,
        width: BackgroundConstants.PlayBackgroundWidth,
        height: BackgroundConstants.PlayBackgroundHeight
    });
}

function MenuBackground(){
    this.backgroundImage = new Kinetic.Image({
      x: BackgroundConstants.MenuBackgroundStartingX,
      y: BackgroundConstants.MenuBackgroundStartingY,
      image: Images.MenuBgr,
      width: BackgroundConstants.MenuBackgroundWidth,
      height: BackgroundConstants.MenuBackgroundHeight
  });
}

function ExitBackground(){
    //to do: Hristina

    this.backgroundImage = new Kinetic.Image({
        x: BackgroundConstants.ExitBackgroundStartingX,
        y: BackgroundConstants.ExitBackgroundStartingY,
        image: Images.ExitBgr,
        width: BackgroundConstants.ExitBackgroundWidth,
        height: BackgroundConstants.ExitBackgroundHeight
    });
}

function HighScoresBackground() {
    this.backgroundImage = new Kinetic.Image({
        x: BackgroundConstants.HighScoresBackgroundStartingX,
        y: BackgroundConstants.HighScoresBackgroundStartingY,
        image: Images.HighScoresBgr,
        width: BackgroundConstants.HighScoresBackgroundWidth,
        height: BackgroundConstants.HighScoresBackgroundHeight
    });
}
