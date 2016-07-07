"use strict";

const Weapon = require('../src/weapon.js');

const UltraSigh = function () {
	Weapon.call(this);
	this.name = 'Ultra-Sigh';
	this.damage = 18;
	this.snarkyRemark = "(old man-like sigh) I can't believe I have to put up with a joke like you."; // what will show up on the screen
  this.uses = 1; // how many time in a round this move can be used
};

module.exports = UltraSigh;
