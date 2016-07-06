"use strict";

const Weapon = require('../src/weapon.js');

const BlasterFromThePast = function () {
	Weapon.call(this);
	this.name = 'Blaster From The Past';
	this.damage = 20;
	this.snarkyRemark = "Well, if you hadn't been so stupid that one time, we wouldn't be having this conversation."; // what will show up on the screen
  this.uses = 2 // how many time in a round this move can be used
};

module.exports = BlasterFromThePast;
