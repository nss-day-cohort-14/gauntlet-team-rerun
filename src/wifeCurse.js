'use strict'

const Weapon = require('../src/Weapon');

const WifeCurse = function() {
	Weapon.call(this);
	this.name = "A Curse Upon You!";
	this.remark = "You stubborn old @#*&!";
	this.damage = 7;
	this.uses = 3;
}

module.exports = WifeCurse;