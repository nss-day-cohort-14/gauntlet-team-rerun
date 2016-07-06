"use strict";

const Weapon = require('../src/weapon.js');

const Hammer = function () {
	Weapon.call(this);
	this.name = 'Hennessy Hammer';
	this.damage = 8;
	this.snarkyRemark = "Who do I have to disown to get another drink around here (hicCUP!)."; // what will show up on the screen
  this.uses = 2; // how many time in a round this move can be used
};

module.exports = Hammer;
