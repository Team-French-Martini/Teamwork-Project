window.onload = function(){

    var svg = document.getElementById('team-background');
    var stage;
    var gameStateManager;
    var gameStarted = false;
    svg.addEventListener('click', function(){
        this.remove();
        stage = initStage(GameConstants.CanvasContainerName);
        gameStateManager = initGameStateManager(stage);

        initStartingState(gameStateManager);

        run();
    });

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
        var startingState = new MenuState(gameStateManagerObj);
        gameStateManagerObj.states.push(startingState);
    }
}
