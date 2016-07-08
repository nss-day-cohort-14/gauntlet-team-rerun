'use strict';

const Person = require('../src/person');
const FamWeapon = require('../src/FamWeapon');

const Grandson = function() {
	Person.call(this);
	this.img = '../src/grandson.jpg';
	this.sensitivity = 60;
	this.viciousness = 40;
	this.patience = 20;
	this.weapons.push(new FamWeapon.GrandsonTruth());
	this.weapons.push(new FamWeapon.GrandsonBrat());
	this.weapons.push(new FamWeapon.GrandsonNoise());
	this.weapons.push(new FamWeapon.GrandsonSpill());
};

module.exports = Grandson;