"use strict";

const Weapon = require('../src/weapon.js');

const Dagger = function () {
	Weapon.call(this);
	this.name = 'The Dagger of Cutting Rhetoric';
	this.damage = 10;
	this.snarkyRemark = "I'm not surprised you did something dumb again."; // what will show up on the screen
  this.uses = 2; // how many time in a round this move can be used
};

module.exports = Dagger;
