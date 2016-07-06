"use strict";

const Weapon = require('../src/weapon.js');

const Leer = function () {
	Weapon.call(this);
	this.name = 'Leer';
	this.damage = 5;
	this.snarkyRemark = "Does this look like a face that gives a hoot?"; // what will show up on the screen
  this.uses = 5; // how many time in a round this move can be used
};

module.exports = Leer;
