'use strict';

const Person = require('../src/person');
const FamWeapon = require('../src/FamWeapon');

const Wife = function() {
	Person.call(this);
	this.img = '../src/images/wife.jpg';
	this.name = "Grandma";
	this.sensitivity = 30;
	this.viciousness = 40;
	this.patience = 80;
	this.weapons.push(new FamWeapon.WifeTruth());
	this.weapons.push(new FamWeapon.WifeSilent());
	this.weapons.push(new FamWeapon.WifeGuilt());
	this.weapons.push(new FamWeapon.WifeCurse());
	this.backStory = "A wife can only take so much, and after years of verbal abuse and neglect, a grandma’s gotta do what a grandma’s gotta do. "
};

module.exports = Wife;