'use strict';

const Person = require('../src/person');
const FamWeapon = require('../src/FamWeapon');

const Brother = function() {
	Person.call(this);
	this.sensitivity = 15;
	this.viciousness = 60;
	this.patience = 10;
	this.weapons.push(new FamWeapon.BrotherBlast());
	this.weapons.push(new FamWeapon.BrotherTruth());
	this.weapons.push(new FamWeapon.BrotherMooch());
	this.weapons.push(new FamWeapon.BrotherBlow());
};

module.exports = Brother;