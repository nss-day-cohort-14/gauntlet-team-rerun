'use strict';

const Person = require('../src/person');
const FamWeapon = require('../src/FamWeapon');

const DaughterInLaw = function() {
	Person.call(this);
	this.sensitivity = 10;
	this.viciousness = 80;
	this.patience = 40;
	this.weapons.push(new FamWeapon.DaughterInLawNoFilter());
	this.weapons.push(new FamWeapon.DaughterInLawBlast());
	this.weapons.push(new FamWeapon.DaughterInLawCurse());
	this.weapons.push(new FamWeapon.DaughterInLawBomb());
};

module.exports = DaughterInLaw;