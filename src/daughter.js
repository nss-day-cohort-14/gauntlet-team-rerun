'use strict';

const Person = require('../src/person');
const FamWeapon = require('../src/FamWeapon');

const Daughter = function() {
	Person.call(this);
	this.img = '../src/images/daughter.jpg';
	this.name = "Susie";
	this.sensitivity = 50;
	this.viciousness = 40;
	this.patience = 50;
	this.weapons.push(new FamWeapon.DaughterBlast());
	this.weapons.push(new FamWeapon.DaughterThreat());
	this.weapons.push(new FamWeapon.DaughterChange());
	this.weapons.push(new FamWeapon.DaughterBeam());
	this.backStory = "Growing up yearning for a real relationship with her father, Susie has always been distant from her family. But years of neglect and belittling comments take a toll on a woman…"
};

module.exports = Daughter;