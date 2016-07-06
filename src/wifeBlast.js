'use strict'

const Weapon = require('../src/Weapon');

const WifeBlast = function() {
	Weapon.call(this);
	this.name = "Blaster From the Past";
	this.remark = "Well listen to Mr Admirable here, it's almost like he never left his poor wife alone at the 1948 City Fair to go play poker with the boys.";
	this.damage = 15;
	this.uses = 1;
}

module.exports = WifeBlast;