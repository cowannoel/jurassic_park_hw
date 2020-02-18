const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let dino5;

  beforeEach(function () {
    dino1 = new Dinosaur('T-rex', 'Carnivore', 100)
    dino2 = new Dinosaur('Raptor', 'Cariavore', 75)
    dino3 = new Dinosaur('Triceratops', 'herbavore', 25)
    dino4 = new Dinosaur('Stegasaurus', 'omnivore', 50)
    dino5 = new Dinosaur('Diplodocus', 'herbavore', 80)
    park = new Park('Jurassic Park', 50, [dino1, dino2, dino3, dino4] );
  });

  it('should have a name', function (){
    let actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    let actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    let actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2, dino3, dino4] )
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dino5);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2, dino3, dino4, dino5]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dino1);
    let actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino2, dino3, dino4])
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');


  it('should be able to calculate the total number of visitors per day', function(){
    let actual = park.guestsAttractedPerDay()
    assert.strictEqual(actual, 250)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    let actual = park.visitorsPerYear()
    assert.strictEqual(actual, 18250)
  });

  it('should be able to calculate total revenue for one year', function(){
    let actual = park.revenuePerYear()
    assert.strictEqual(actual, 912500)
  });

});
