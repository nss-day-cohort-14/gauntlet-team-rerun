"use strict";

const Weapon = require('../src/weapon.js');

const MumbleBee = function () {
	Weapon.call(this);
	this.name = 'The Mumble-Bee';
	this.damage = 5;
	this.snarkyRemark = "M-m-may... wh-what? (something unintelligible...)"; // what will show up on the screen
  this.uses = 5; // how many time in a round this move can be used
};

module.exports = MumbleBee;
