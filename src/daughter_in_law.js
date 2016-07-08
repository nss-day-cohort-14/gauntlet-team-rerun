'use strict';

const Person = require('../src/person');
const FamWeapon = require('../src/FamWeapon');

const DaughterInLaw = function() {
	Person.call(this);
	this.img = '../src/images/daughter-in-law.jpg';
	this.name = "Daughter-in-Law Dawn";
	this.sensitivity = 10;
	this.viciousness = 80;
	this.patience = 40;
	this.weapons.push(new FamWeapon.DaughterInLawNoFilter());
	this.weapons.push(new FamWeapon.DaughterInLawBlast());
	this.weapons.push(new FamWeapon.DaughterInLawCurse());
	this.weapons.push(new FamWeapon.DaughterInLawBomb());
	this.backStory = "Pleased with her relationship with her own father, she just doesn’t understand how her husband allows himself to be treated by his father. After years of pent-up frustrations and muttered threats under her breath, it’s time to let it out."
};

module.exports = DaughterInLaw;