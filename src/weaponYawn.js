"use strict";

const Weapon = require('../src/weapon.js');

const YawnZilla = function () {
	Weapon.call(this);
	this.name = 'Yawn-zilla';
	this.damage = 5;
	this.snarkyRemark = "(yawns) Yeah, I definitely wasn't even trying to listen to you."; // what will show up on the screen
  this.uses = 5 // how many time in a round this move can be used
};

module.exports = YawnZilla;
