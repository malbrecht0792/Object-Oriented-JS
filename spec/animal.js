describe('Animal class functionality', function() {
    beforeEach(function() {
        animal = new Animal();
    });

    /* New properties and methods */

    it('should have an `energy` property that is set to 10', function() {
        expect(animal.energy).to.equal(10);
    });

    it('should have a `sound` method', function() {
        expect(animal.sound).to.be.a('function');
    });

    it('should decrease its energy level by 3 if it makes a sound', function() {
        animal.sound();
        expect(animal.energy).to.equal(7);
    });

    it('should have an `eatFood` method', function() {
        expect(animal.eatFood).to.be.a('function');
    });

    it('should increase its energy level by 5 if it eats food', function() {
        animal.eatFood();
        expect(animal.energy).to.equal(15);
    });

    it('should have a `sleep` method', function() {
        expect(animal.sleep).to.be.a('function');
    });

    it('should increase its energy level by 10 if it sleeps', function() {
        animal.sleep();
        expect(animal.energy).to.equal(20);
    })
});

