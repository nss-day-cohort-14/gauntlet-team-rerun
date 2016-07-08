'use strict';

const Person = require('../src/person');
const FamWeapon = require('../src/FamWeapon');

const Brother = function() {
	Person.call(this);
	this.img = '../src/images/brother.jpg';
	this.name = "Jack";
	this.sensitivity = 15;
	this.viciousness = 60;
	this.patience = 10;
	this.weapons.push(new FamWeapon.BrotherBlast());
	this.weapons.push(new FamWeapon.BrotherTruth());
	this.weapons.push(new FamWeapon.BrotherMooch());
	this.weapons.push(new FamWeapon.BrotherBlow());
	this.backStory = "Always the second fiddle to his older, more dominant brother, Jack’s grown tired of difficult holiday dinners and has decided to unleash the anger that’s been marinating for all these years and give his brother a piece of his mind… before it’s too late."
};

module.exports = Brother;