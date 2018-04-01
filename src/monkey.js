class Monkey extends Animal {
    constructor () {
        super()
        this.numberOfMonkeys += 1;
    }
    
    sound () {
        this.energy -= 4;
    }

    eatFood () {
        this.energy += 2;
    }

    play () {
        if (this.energy >= 8) {
            this.energy -= 8;
            console.log('Oooo Oooo Oooo');
        } else {
            console.log('Monkey too tired');
        }
    }
}