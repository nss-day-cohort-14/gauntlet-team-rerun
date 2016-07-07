'use strict';

const Weapon = require('../src/Weapon');

const WifeSilent = function() {
	Weapon.call(this);
	this.name = "Silent but Deadly";
	this.remark = "...";
	this.damage = 3;
	this.uses = 4;
};

module.exports = WifeSilent;