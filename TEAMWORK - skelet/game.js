var stage = initStage(GameConstants.CanvasContainerName);
var gameStateManager = initGameStateManager(stage);

initStartingState(gameStateManager);

run();

function run() {  
    //draw
    gameStateManager.currentState().render();

    //update
    gameStateManager.currentState().update();
    
    requestAnimationFrame(run);
}

function initStage(containerName){
    var stage = new Kinetic.Stage({
        container: containerName,
        width: GameConstants.ContainerWidth,
        height: GameConstants.ContainerHeight,
    });

    return stage;
}

function initStartingState(gameStateManagerObj){
    var startingState = new PlayState(gameStateManagerObj);
    gameStateManagerObj.states.push(startingState);
}
