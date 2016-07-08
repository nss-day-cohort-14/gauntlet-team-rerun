'use strict';

const Person = require('../src/person');
const FamWeapon = require('../src/FamWeapon');

const Grandson = function() {
	Person.call(this);
	this.img = '../src/images/grandson.jpg';
	this.name = "Grandson Little Jimmy";
	this.sensitivity = 60;
	this.viciousness = 40;
	this.patience = 20;
	this.weapons.push(new FamWeapon.GrandsonTruth());
	this.weapons.push(new FamWeapon.GrandsonBrat());
	this.weapons.push(new FamWeapon.GrandsonNoise());
	this.weapons.push(new FamWeapon.GrandsonSpill());
	this.backStory = "Letdown by years of mediocre Christmas gifts and orders to bring Grandpa his 'gettin-by' drink, Little Jimmy can’t take it anymore. He also can’t bear his Grandpa’s smell.";
};

module.exports = Grandson;