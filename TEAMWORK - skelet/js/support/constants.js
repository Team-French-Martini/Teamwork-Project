var ImageSourses = {
    PlayBgr: "images/PlayBackground.png",
    MenuBgr: "images/MenuBackground.jpg",
    TitlePic: "images/Title.png",
    ExitBgr: "images/ExitBackground.jpg",
    HighScoresBgr: "images/HighScoresBackground.png",
    PlayBtn: "images/PlayButton.png",
    ExitBtn: "images/ExitButton.png",
    HighScoresCloseBtn: "images/HighScoresCloseButton.png",
    RestartBtn: "images/RestartButton.png",
    HighScoresBtn: "images/HighScoresButton.png",
    Player: "images/Player.png",
    CoinOne: "images/CoinFish.png",
    CoinTwo: "images/CoinStar.png",
    Rock: "images/Rock.png",
    BombImage: "images/Bomb.png",
    LifeBonus: "images/LIFEbonus.png",
    CoinsResult:"images/CoinsResult.png",
    LivesResult:"images/LivesResult.png"
};

var Images = loadImages(ImageSourses);

var GameConstants = {
    CanvasContainerName: 'canvas-container',
    ContainerWidth: 1200,
    ContainerHeight: 600,
    LeftArrow: 37,
    RightArrow: 39,
    Esc: 27,
    StartingLives: 3,
    StartingPoints: 0,
};  

var BackgroundConstants = {
    MenuBackgroundStartingX: 0,
    MenuBackgroundStartingY: 0,
    MenuBackgroundWidth: 1000,
    MenuBackgroundHeight: 600,

    PlayBackgroundStartingX: 0,
    PlayBackgroundStartingY: 0,
    PlayBackgroundWidth: 1000,
    PlayBackgroundHeight: 600,

    ExitBackgroundStartingX: 0,
    ExitBackgroundStartingY: 0,
    ExitBackgroundWidth: 1000,
    ExitBackgroundHeight: 600,
    
    HighScoresBackgroundStartingX: 0,
    HighScoresBackgroundStartingY: 0,
    HighScoresBackgroundWidth: 1000,
    HighScoresBackgroundHeight: 600,
}; 

var TitleConstants = {
    TitlePicStartingX: 200,
    TitlePicStartingY: 140,
    TitlePicWidth: 575,
    TitlePicHeight: 110,
}

var ButtonsConstants = {
    PlayButtonStartingX: 200,
    PlayButtonStartingY: 450,

    ExitButtonStartingX: 600,
    ExitButtonStartingY: 450,

    HighScoresButtonStartingX: 400,
    HighScoresButtonStartingY: 450,
    
    HighScoresCloseButtonStartingX: 400,
    HighScoresCloseButtonStartingY: 450,


    RestartButtonStartingX: 200,
    RestartButtonStartingY: 450,
};

var PlayerConstants = {
    StartingX: 500,
    StartingY: 485,
    VelocityStanding: {x: 0, y: 0},
    VelocityLeft:{x: -5, y: 0},
    VelocityRight:{x: 5, y: 0},
    VelocityLeftUp:{x: -3, y: -7},
    VelocityRightUp:{x: 3, y: -7},
    VelocityLeftDown:{x: -3, y: 7},
    VelocityRightDown:{x: 3, y: 7},
    VelocityStraightDown:{x: 0, y: 7},
    VelocityStraightUp:{x: 0, y: -7},
    PlayerWidth: 60, // based on player.png average width of frame
    PlayerHeight: 80, // based on player.png average width of frame
    LeftLimit: 0,
    RightLimit: 940,
    UpLimit: 320,
    Motion: {
        StandingLeft: 'standing_Left',
        StandingRight: 'standing_Riht',
        MovingLeft: 'moving_Left',
        MovingRight: 'moving_Right',
        RisingUpLeft: 'rising_Up_Left',
        FallingDownLeft: 'falling_Down_Left',
        RisingUpRight: 'rising_Up_Right',
        FallingDownRight: 'falling_Down_Right',
        RisingUpStraightFaceLeft: 'rising_Up_Straight_Left',
        FallingDownStraightFaceLeft: 'falling_Down_Straight_Left',
        RisingUpStraightFaceRight: 'rising_Up_Straight_Right',
        FallingDownStraightFaceRight: 'falling_Down_Straight_Right'
    }
};

var CoinConstants = {
    VelocityDown:{x: 0, y: 3},
    CoinValueOne: 5,
    CoinValueTwo: 15,
    CoinVerticalLimit: 520,
    CoinOneWidth: 36,
    CoinOneHeight: 36,
    CoinTwoWidth: 30,
    CoinTwoHeight: 30,
    CoinOneId: 1,
    CoinTwoId: 2,
    CoinSideLimit: 900,
    CoinUpperLimit: -200,
};

var RockConstants = {
    VelocityDown:{x: 0, y: 5},
    RockVerticalLimit: 520,
    RockWidth: 40,
    RockHeight: 40,
    RockSideLimit: 900,
    RockUpperLimit: -200
};

var LifeBonusConstants = {
    VelocityDown:{x: 0, y: 5},
    LifeBonusVerticalLimit: 520,
    LifeBonusWidth: 36,
    LifeBonusHeight: 36,
    LifeBonusSideLimit: 900,
    LifeBonusUpperLimit: -200
};

var BombConstants= {
    VelocityHorizontal: {x: 6, y: 0},
    StartingX: 1010,
    StartingY:705,
    BombWidth: 22,
    BombHeight: 22,
    BombYSideLimit: 720,
    BombXSideLimit: -3000
}


function loadImages(sourcesObj){
    var loadedImages = 0;
    var numImages = 0;
    var imagesObj = {};

    for(var src in sourcesObj) {
        numImages++;
    }

    for(var src in sourcesObj) {
        imagesObj[src] = new Image();
        imagesObj[src].src = sourcesObj[src];
    }

    return imagesObj;
}




