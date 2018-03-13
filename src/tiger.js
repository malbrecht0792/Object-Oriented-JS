var Tiger = function() {
    Animal.call(this);
    this.count = 0;
    this.increaseCount();
}

Tiger.prototype = Object.create(Animal.prototype)
Tiger.prototype.constructor = Tiger;

Tiger.prototype.sleep = function() {
    this.energy += 5;
}

Tiger.prototype.increaseCount = function() {
    this.count +=1;
}