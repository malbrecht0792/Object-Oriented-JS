var Monkey = function() {
    Animal.call(this);
    this.count = 0;
    this.increaseCount();
}

Monkey.prototype = Object.create(Animal.prototype);
Monkey.prototype.constructor = Monkey;

Monkey.prototype.sound = function() {
    this.energy -= 4;
}

Monkey.prototype.eatFood = function() {
    this.energy += 2;
} 

Monkey.prototype.increaseCount = function() {
    this.count +=1;
}

Monkey.prototype.play = function() {
    if (this.energy >= 8) {
        this.energy -= 8;
        console.log('Oooo Oooo Oooo');
    } else {
        console.log('Monkey too tired');
    }
}