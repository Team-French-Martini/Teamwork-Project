function FallingObject() {
    var min = 1;
    var max = 11;

    var bombMin = 1;
    var bombMax = 10;
    var bombNum = Math.random()*(bombMax-bombMin)+bombMin;

    var num = Math.random() * (max - min) + min;

    if(num <=5){
        return new Coin();
    }else if(num<=10){
        return new Rock()
    }else{
        return new LifeBonus()
    }

    if(bombNum<=4){
        return new Coin()
    }else{
        return new Bomb()
    }
}