"use strict";

const Grandpa = require('../src/grandpa');
const GrandWeapon = require('../src/GrandWeapon')

const SmartGrandpa = function () {
	Grandpa.call(this);
	this.img = '../src/grandpa-einstein-smart.jpg';
	this.bac = 1;
	this.anger = 25;
	this.viciousness = 40;
	this.patience = 70;
	this.weapons.push(new GrandWeapon.Dagger());
	this.weapons.push(new GrandWeapon.TheSnort());
	this.weapons.push(new GrandWeapon.MemoryBomb());
	this.weapons.push(new GrandWeapon.YawnZilla());
};

module.exports = SmartGrandpa;

