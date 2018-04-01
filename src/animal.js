class Animal {

    constructor () {
        this.energy = 10;
        this.numberOfMonkeys = 0;
    }

    sound () {
        this.energy -= 3;
    } 

    eatFood () {
        this.energy += 5;
    }

    sleep () {
        this.energy += 10;
    }
}