"use strict";

const Weapon = require('../src/weapon.js');

const MemoryBomb = function () {
	Weapon.call(this);
	this.name = 'The Memory Bomb';
	this.damage = 15;
	this.snarkyRemark = "Well, if I recall, it's always your fault."; // what will show up on the screen
  this.uses = 1; // how many time in a round this move can be used
};

module.exports = MemoryBomb;
