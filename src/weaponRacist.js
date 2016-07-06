"use strict";

const Weapon = require('../src/weapon.js');

const RacistComment = function () {
	Weapon.call(this);
	this.name = 'Racist Comment';
	this.damage = 15;
	this.snarkyRemark = "Well, I'm not a racist, but...(something horrible)"; // what will show up on the screen
  this.uses = 1; // how many time in a round this move can be used
};

module.exports = RacistComment;
