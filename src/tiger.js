var Tiger = function() {
    Animal.call(this);
}

Tiger.prototype = Object.create(Animal.prototype)
Tiger.prototype.constructor = Tiger;

Tiger.prototype.sleep = function() {
    this.energy += 5;
}