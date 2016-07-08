'use strict';

const Person = require('../src/person');
const FamWeapon = require('../src/FamWeapon');

const Son = function() {
	Person.call(this);
	this.img = '../src/images/father.jpg';
	this.name = "Jerry";
	this.sensitivity = 40;
	this.viciousness = 40;
	this.patience = 50;
	this.weapons.push(new FamWeapon.SonThreat());
	this.weapons.push(new FamWeapon.SonTruth());
	this.weapons.push(new FamWeapon.SonShot());
	this.weapons.push(new FamWeapon.SonSleep());
};

module.exports = Son;