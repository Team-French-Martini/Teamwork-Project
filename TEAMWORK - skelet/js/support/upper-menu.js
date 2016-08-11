function CoinsResult(){
this.coinsImage=new Kinetic.Image({
x:40,
y:100,
image:Images.CoinsResult,
width:25,
height:25
});
}

function CoinsText(){
    this.text = new Kinetic.Text({
        x: 90,
        y: 95,
        text: GameConstants.StartingPoints,
        fontSize: 36,
        fontFamily: 'Calibri',
        width:100 ,
        align: 'center',    
        fill: 'white'
    });
}

function LivesResult(){
this.livesImage=new Kinetic.Image({
x:40,
y:40,
image:Images.LivesResult,
width:25,
height:25
});
}
function LivesText(){
    this.text = new Kinetic.Text({
        x: 90,
        y: 35,
        text:GameConstants.StartingLives,
        fontSize: 36,
        fontFamily: 'Calibri',
        width:100 ,
        align: 'center',    
        fill: 'white'
    });
}


