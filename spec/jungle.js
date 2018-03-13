describe('Jungle class functionality', function() {
    beforeEach(function() {
        jungle = new Jungle();
    });

    it('should have a `climate` property that is set to `tropical rain forest`', function() {
        expect(jungle.climate).to.equal('tropical rain forest');
    });
});