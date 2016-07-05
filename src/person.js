'use strict';

const Person = function() {
	this.health = 100;
	this.viciousness = 0;
	this.patience = 0;
	this.sensitivity = 0;
	this.weapons = [];
};
Person.prototype.setWeapons = function(weapon) {
	this.weapons.push(weapon);
};

module.exports = Person;