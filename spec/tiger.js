describe('Tiger class functionality', function() {
    beforeEach(function() {
        tiger = new Tiger();
    });

    /* Inherited from superclass */

    it('should have an energy level property that is set to 10', function() {
        expect(tiger.energy).to.equal(10);
    });

    it('should have a `sound` method', function() {
        expect(tiger.sound).to.be.a('function');
    });

    it('should decrease its energy level by 3 if it makes a sound', function() {
        tiger.sound();
        expect(tiger.energy).to.equal(7);
    });

    it('should have an `eatFood` method', function() {
        expect(tiger.eatFood).to.be.a('function');
    });

    it('should increase its energy level by 5 if it eats food', function() {
        tiger.eatFood();
        expect(tiger.energy).to.equal(15);
    });

    /* Overwritten methods from superclass */

    it('should have a `sleep` method', function() {
        expect(tiger.sleep).to.be.a('function');
    });

    it('should increase its energy level by 5 if it sleeps', function() {
        tiger.sleep();
        expect(tiger.energy).to.equal(15);
    })

    /* New properties and methods */

    it('should have an increaseCount method', function() {
        expect(tiger.increaseCount).to.be.a('function');
    });

    it('should have a count property set to 1', function() {
        expect(tiger.count).to.equal(1);
    });

    it('should increase count by 1', function() {
        var anotherTiger = new Tiger();
        expect(tiger.count).to.equal(2);
    });

});