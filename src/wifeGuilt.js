'use strict';

const Weapon = require('../src/Weapon');

const WifeGuilt = function() {
	Weapon.call(this);
	this.name = "Guilt";
	this.remark = "Yeah yeah, just keep on drinking, not like you're ruining another Christmas or anything.";
	this.damage = 7;
	this.uses = 1;
};

module.exports = WifeGuilt;