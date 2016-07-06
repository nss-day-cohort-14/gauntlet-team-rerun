"use strict";

const Weapon = require('../src/weapon.js');

const InsultBarrage = function () {
	Weapon.call(this);
	this.name = 'Insult Barrage';
	this.damage = 15;
	this.snarkyRemark = "You're a complete and utter fool, and you smell. And I wish you weren't around all the time."; // what will show up on the screen
  this.uses = 2 // how many time in a round this move can be used
};

module.exports = InsultBarrage;
