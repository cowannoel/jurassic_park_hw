const Park = function(name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};


Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function(dinosaur) {
  let index = this.dinosaurs.indexOf(dinosaur);
  if (index !== -1) {
    this.dinosaurs.splice(index, 1)
  };
};


Park.prototype.guestsAttractedPerDay = function() {
  let total = 0
  for (dino of this.dinosaurs) {
    total += dino.guestsAttractedPerDay
  };
  return total
};


Park.prototype.visitorsPerYear = function () {
  total = dino.guestsAttractedPerDay * 365
  return total
  };

Park.prototype.revenuePerYear = function () {
  total = Park.visitorsPerYear * 50
  return total
};




module.exports = Park;
