"use strict";

const Grandpa = require('../src/grandpa');
const GrandWeapon = require('../src/GrandWeapon')

const SmartGrandpa = function () {
	Grandpa.call(this);
	this.img = '../src/images/grandpa-einstein-smart.jpg';
	this.bac = 1;
	this.anger = 25;
	this.viciousness = 40;
	this.patience = 70;
	this.weapons.push(new GrandWeapon.Dagger());
	this.weapons.push(new GrandWeapon.TheSnort());
	this.weapons.push(new GrandWeapon.MemoryBomb());
	this.weapons.push(new GrandWeapon.YawnZilla());
	this.backStory = "As curmudgeonly as they come, Grandpa has been a ticking time bomb for years. With a rapier’s wit and a sharp tongue, there’s no escaping the vicious cutting words of… Smart Grandpa!";
};

module.exports = SmartGrandpa;

