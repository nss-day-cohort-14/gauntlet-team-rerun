"use strict";

const Weapon = require('../src/weapon.js');

const BoozeOoka = function () {
	Weapon.call(this);
	this.name = 'BoozeOoka';
	this.damage = 20;
	this.snarkyRemark = "(Grandpa polishes off his bourbon)"; // what will show up on the screen
  this.uses = 1; // how many time in a round this move can be used
};

module.exports = BoozeOoka;
