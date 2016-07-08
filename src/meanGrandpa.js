"use strict";

const Grandpa = require('../src/grandpa');
const GrandWeapon = require('../src/GrandWeapon')

function MeanGrandpa () {
	Grandpa.call(this);
	this.img = '../src/images/grandpa-mean-rockwell.jpg';
	this.bac = 1.2;
	this.anger = 50;
	this.viciousness = 50;
	this.patience = 40;
	this.sensitivity = 0;
	this.weapons.push(new GrandWeapon.BlasterFromThePast());
	this.weapons.push(new GrandWeapon.InsultBarrage());
	this.weapons.push(new GrandWeapon.Leer());
	this.weapons.push(new GrandWeapon.UltraSigh());
	this.backStory = "As curmudgeonly as they come, Grandpa has been a ticking time bomb for years. His power comes from his pent up rage and relentless boredom. Watch out for… Mean Grandpa!";
}

module.exports = MeanGrandpa;
