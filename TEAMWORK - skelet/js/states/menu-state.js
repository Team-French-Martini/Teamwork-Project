function MenuState (gameStateManagerObj){
    this.layer = new Kinetic.Layer(),
    this.gameStateManager = gameStateManagerObj,
    this.background = new MenuBackground(),
    this.title = new TitleImage(),
    this.playButton = new PlayButton(),
    this.highScoresButton = new HighScoresButton(),
    this.exitButton =  new ExitButton(),

    this.render =  function () {
        this.layer.batchDraw();
    },

    this.update =  function(){
        
    },

    attachMenuStateButtonsEvents(this);
    attachMenuStateTitleEvents(this);
    
    this.layer.add(this.background.backgroundImage);
    this.layer.add(this.title.titleImage);
    this.layer.add(this.playButton.buttonImage);
    this.layer.add(this.highScoresButton.buttonImage);
    this.layer.add(this.exitButton.buttonImage);

    this.gameStateManager.stage.add(this.layer);
}