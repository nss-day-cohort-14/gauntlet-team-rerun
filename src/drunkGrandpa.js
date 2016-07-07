"use strict";

const Grandpa = require('../src/grandpa');
const GrandWeapon = require('../src/GrandWeapon')

function DrunkGrandpa () {
	Grandpa.call(this);
	this.bac = 2;
	this.anger = 30;
	this.viciousness = 15;
	this.patience = 5;
	this.weapons.push(new GrandWeapon.Hammer());
	this.weapons.push(new GrandWeapon.RacistComment());
	this.weapons.push(new GrandWeapon.MumbleBee());
	this.weapons.push(new GrandWeapon.BoozeOoka());
}

module.exports = DrunkGrandpa;

