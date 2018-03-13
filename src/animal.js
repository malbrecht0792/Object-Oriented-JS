var Animal = function() {
    this.energy = 10;
}

Animal.prototype.sound = function() {
    this.energy -= 3;
}

Animal.prototype.eatFood = function() {
    this.energy += 5;
}

Animal.prototype.sleep = function() {
    this.energy += 10;
}