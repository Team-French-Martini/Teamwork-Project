function initGameStateManager(stageObj){
    var stageManager = {
        stage: stageObj,
        states:[],
        currentState: function(){
            if (this.states.length > 0) {
                var current = this.states[this.states.length - 1];
                return current;
            }
        }
    };

    return stageManager;
}