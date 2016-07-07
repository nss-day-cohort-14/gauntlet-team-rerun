'use strict';

const Person = require('../src/person');
const FamWeapon = require('../src/FamWeapon');

const Daughter = function() {
	Person.call(this);
	this.name = "Susie";
	this.sensitivity = 50;
	this.viciousness = 40;
	this.patience = 50;
	this.weapons.push(new FamWeapon.DaughterBlast());
	this.weapons.push(new FamWeapon.DaughterThreat());
	this.weapons.push(new FamWeapon.DaughterChange());
	this.weapons.push(new FamWeapon.DaughterBeam());
};

module.exports = Daughter;