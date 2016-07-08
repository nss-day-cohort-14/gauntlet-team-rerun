'use strict';

const Person = require('../src/person');
const FamWeapon = require('../src/FamWeapon');

const Wife = function() {
	Person.call(this);
	this.img = '../src/images/wife.jpg';
	this.sensitivity = 30;
	this.viciousness = 40;
	this.patience = 80;
	this.weapons.push(new FamWeapon.WifeTruth());
	this.weapons.push(new FamWeapon.WifeSilent());
	this.weapons.push(new FamWeapon.WifeGuilt());
	this.weapons.push(new FamWeapon.WifeCurse());
};

module.exports = Wife;