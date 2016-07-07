"use strict";

const Weapon = require('../src/weapon.js');

const TheSnort = function () {
	Weapon.call(this);
	this.name = 'The Snort';
	this.damage = 5;
	this.snarkyRemark = "(snorts) That's what you think."; // what will show up on the screen
  this.uses = 5; // how many time in a round this move can be used
};

module.exports = TheSnort;
