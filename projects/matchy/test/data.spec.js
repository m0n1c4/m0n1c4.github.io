const
    _ = require("lodash"),
    expect = require('chai').expect,
    sinon = require('sinon'),
    path = '../.master/data';

    
// mocha -R spec --grep data

describe("#data", function () {
    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });
    
    const data = require(path);
    
    describe("Part 1, Step 1: Object Creation", function () {
        const animal = data.animal;
        it('animal should be an Object!', function() {
            expect(animal).to.be.an.object;
        });
        it('animal.species should be assigned to a String!', function() {
            expect(animal.species).to.be.a.string;
        });
        it('animal.name should be assigned to a String!', function() {
            expect(animal.name).to.be.a.string;
        });
        it('animal.name should be assigned to an Array!', function() {
            expect(animal.noises).to.be.an.array;
        });
    });
    
    describe("Part 1, Step 2: Array Creation", function () {
        const noises = data.noises;
        it('noises should be an Array!', function() {
            expect(noises).to.be.an.array;
        });
    });
    
    describe("Part 1, Step 3: Combining Step 1 and Step 2", function () {
        const animal = data.animal;
        it('animal.noises should be assigned to noises Array!', function() {
            expect(animal.noises).to.eql(data.noises);
        });
        it('animal.noises should have a length of 5!', function() {
            expect(animal.noises.length).to.equal(5);
        });
        it('animal.noises should Array of Strings!', function() {
            _.each(animal.noises, function(noise) { 
                expect(noise).to.be.a.string;
            });
        });
    });
    
    describe("Part 1, Step 6: A Collection of Animals", function () {
        const animals= data.animals;
        it('animals should be an Array!', function() {
            expect(animals).to.be.an.array;
        });
        it('animals should have a length of 4!', function() {
            expect(animals.length).to.equal(4);
        });
        it('each animal should have name, species, friends and noises properties!', function() {
            _.each(animals, function(animal) { 
                expect(animal.name).to.be.a.string;
                expect(animal.species).to.be.a.string;
                expect(animal.noises).to.be.an.array;
            });
        });
    });
    
    describe("Part 1, Step 7 - Making Friends", function () {
        const friends = data.friends;
        it('friends should be an Array of Strings!', function() {
            expect(friends).to.be.an.array;
            _.each(friends, function(friend) { 
                expect(friend).to.be.a.string;
            });
        });
        it('at least one animal should have a friends Array!', function() {
            const someArrayOfFriends = _.without(_.map(data.animals, 'friends'), undefined)[0];
            expect(someArrayOfFriends).to.be.an.array;
        });
        it('getRandom() should be a Function!', function() {
            const getRandom = data.getRandom;
            expect(getRandom).to.be.a.function;
        });
        it('getRandom() should use Math.random()!', function() {
            const getRandom = data.getRandom;
            sinon.spy(Math, 'random');
            expect(getRandom([1, 2, 3])).to.be.within(1, 3);
            expect(Math.random.calledOnce).to.be.true;
            Math.random.restore();
        });
    });
});
