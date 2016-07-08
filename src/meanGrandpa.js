"use strict";

const Grandpa = require('../src/grandpa');
const GrandWeapon = require('../src/GrandWeapon')

function MeanGrandpa () {
	Grandpa.call(this);
	this.img = '../src/grandpa-mean-rockwell.jpg';
	this.bac = 1.2;
	this.anger = 50;
	this.viciousness = 50;
	this.patience = 40;
	this.sensitivity = 0;
	this.weapons.push(new GrandWeapon.BlasterFromThePast());
	this.weapons.push(new GrandWeapon.InsultBarrage());
	this.weapons.push(new GrandWeapon.Leer());
	this.weapons.push(new GrandWeapon.UltraSigh());
}

module.exports = MeanGrandpa;
