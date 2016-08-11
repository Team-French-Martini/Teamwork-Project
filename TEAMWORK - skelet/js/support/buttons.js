function PlayButton(){
    this.buttonImage = new Kinetic.Image({
      x: ButtonsConstants.PlayButtonStartingX,
      y: ButtonsConstants.PlayButtonStartingY,
      image: Images.PlayBtn
  });
}

function ExitButton(){
    this.buttonImage = new Kinetic.Image({
      x: ButtonsConstants.ExitButtonStartingX,
      y: ButtonsConstants.ExitButtonStartingY,
      image: Images.ExitBtn
  });
}

function RestartButton(){
    //to do: Hristina

    this.buttonImage = new Kinetic.Image({
        x: ButtonsConstants.RestartButtonStartingX,
        y: ButtonsConstants.RestartButtonStartingY,
        image: Images.RestartBtn
    });
}

function HighScoresButton(){
    this.buttonImage = new Kinetic.Image({
      x: ButtonsConstants.HighScoresButtonStartingX,
      y: ButtonsConstants.HighScoresButtonStartingY,
      image: Images.HighScoresBtn
  });
}