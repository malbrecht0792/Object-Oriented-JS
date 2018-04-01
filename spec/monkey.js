// require('mocha-sinon');

describe('Monkey class functionality', function() {
    beforeEach(function() {
        monkey = new Monkey();
    });

    function logsMessage(f, message) {
        var oldLog = console.log,
            result = false;
    
        console.log = function(s) {
            if (s == message) {
                result = true;
            }
        };
    
        f();
    
        console.log = oldLog;
    
        return result;
    }

    /* Inherited from superclass */

    it('should have an energy level property that is set to 10', function() {
        expect(monkey.energy).to.equal(10);
    });

    it('should have a `sound` method', function() {
        expect(monkey.sound).to.be.a('function');
    });

    it('should decrease its energy level by 4 if it makes a sound', function() {
        monkey.sound();
        expect(monkey.energy).to.equal(6);
    });

    it('should have an `eatFood` method', function() {
        expect(monkey.eatFood).to.be.a('function');
    });

    it('should increase its energy level by 2 if it eats food', function() {
        monkey.eatFood();
        expect(monkey.energy).to.equal(12);
    });

    it('should have a `sleep` method', function() {
        expect(monkey.sleep).to.be.a('function');
    });

    it('should increase its energy level by 10 if it sleeps', function() {
        monkey.sleep();
        expect(monkey.energy).to.equal(20);
    })

    /* New properties and methods */

    // it('should have an increaseCount method', function() {
    //     expect(monkey.increaseCount).to.be.a('function');
    // });

    it('should have a numberOfMonkeys property set to 1', function() {
        expect(Animal.protoype.numberOfMonkeys).to.equal(1);
    });

    it('should increase count by 1', function() {
        var anotherMonkey = new Monkey();
        expect(Animal.numberOfMonkeys).to.equal(2);
    });

    it('should have a play method', function() {
        expect(monkey.play).to.be.a('function');
    });

    it('should decrease its energy by 8 and log `Oooo Oooo Oooo` if it plays', function() {
        monkey.play();
        expect(monkey.energy).to.equal(2);
        expect(console.log.calledWith('Oooo Oooo Oooo')).to.be.true;
    });

    it('should log `Monkey too tired` if it doesn\'t have enough energy to play', function() {
        monkey.energy = 7;
        monkey.play();
        expect(monkey.energy).to.equal(7);
        expect(console.log.calledWith('Monkey too tired')).to.be.true;
    });

});