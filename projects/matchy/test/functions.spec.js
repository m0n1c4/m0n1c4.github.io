const
    _ = require("lodash"),
    expect = require('chai').expect,
    sinon = require('sinon'),
    pathData = '../.master/data',
    pathFunctions = '../.master/functions'


// mocha -R spec --grep functions

describe("#functions", function () {
    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });
    
    const 
        data = require(pathData),
        functions = require(pathFunctions);
    
    describe("Part 2, Step 1: Search", function () {
        it('search() should return animal by name!', function() {
            const 
                nameOne = data.animals[0].name,
                nameTwo = data.animals[1].name;
            expect(functions.search(data.animals, nameOne).name).to.equal(nameOne);
            expect(functions.search(data.animals, nameTwo).name).to.equal(nameTwo);
        });
        it('search() should return undefined on not found!', function() {
            expect(functions.search(data.animals, '_1904=-20zja-qkjsdfs=qweq!-')).to.be.undefined;
        });
    });
    
    describe("Part 2, Step 2: Replace", function () {
        it('replace() should overwrite animal where name matches!', function() {
            const 
                name = data.animals[0].name,
                replacement = { species: 'bird', name: 'Flappy', noises: ['chirp', 'tweet', 'flutter'] };
            expect(_.includes(data.animals, replacement)).to.be.false;
            functions.replace(data.animals, name, replacement);
            expect(_.includes(data.animals, replacement)).to.be.true;
        });
        it('replace() should not replace if name doesn\'t match!', function() {
            const 
                cloned = data.animals.concat(),
                replacement = { species: 'bird', name: 'Flappy', noises: ['chirp', 'tweet', 'flutter'] };
            functions.replace(data.animals, '_1904=-20zja-qkjsdfs=qweq!-', replacement);
            expect(data.animals).to.eql(cloned);
        });
    });
    
    describe("Part 2, Step 3: Remove", function () {
        it('remove() should remove animal where name matches!', function() {
            const 
                animal = data.animals[0],
                name  = animal.name;
            expect(_.includes(data.animals, animal)).to.be.true;
            functions.remove(data.animals, name);
            expect(_.includes(data.animals, animal)).to.be.false;
        });
        it('remove() should not remove if name doesn\'t match!', function() {
            const length = data.animals.length;
            console.log(data.animals);
            functions.remove(data.animals, '_1904=-20zja-qkjsdfs=qweq!-');
            expect(data.animals.length).to.equal(length);
        });
    });
    
    describe("Part 2, Step 4: Add", function () {
        it('add() should add animal if no other animal shares name of new animal!', function() {
            const 
                cloned = data.animals.concat(),
                added = { species: 'bird', name: '_1904=-20zja-qkjsdfs=qweq!-', noises: ['chirp', 'tweet', 'flutter'] };
            functions.add(data.animals, added);
            expect(_.includes(data.animals, added)).to.be.true;
        });
        it('add() should not add animal if other animal shares name of new animal!', function() {
            const
                name = data.animals[0].name,
                notAdded = { species: 'bird', name: name, noises: ['chirp', 'tweet', 'flutter'] };
            functions.add(data.animals, notAdded);
            expect(_.includes(data.animals, notAdded)).to.be.false;
        });
    });
});
