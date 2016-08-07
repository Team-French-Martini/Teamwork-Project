function FallingObject() {
    var min = 1;
    var max = 11;

    var num = Math.random() * (max - min) + min;

    if(num <=5){
        return new Coin();
    }else
    {
        return new Rock();
    }
}