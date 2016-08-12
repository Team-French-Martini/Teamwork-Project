function HighScoresState(gameStateManagerObj) {
    this.layer = new Kinetic.Layer();
    this.gameStateManager = gameStateManagerObj,
    this.background = new HighScoresBackground(),
    this.highScoresCloseButton = new HighScoresCloseButton(),
    this.render = function () {
        this.layer.batchDraw();
    },
    this.update = function () {
      
    },

    this.highScoresText = new Kinetic.Text({
        x: 300,
        y: 100,
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'blue'
    });

    var highScoresString = "";
    var i = 1;
    for (var key in localStorage) {
        highScoresString += i + ". " + formatDate(new Date(key)) + " " + localStorage[key] + "\n";
        i++;
    }

    this.highScoresText.setText(highScoresString);

    attachHighScoresStateButtonsEvents(this);
    this.layer.add(this.background.backgroundImage);
    this.layer.add(this.highScoresCloseButton.buttonImage);
    this.layer.add(this.highScoresText);


    this.gameStateManager.stage.add(this.layer);
}
