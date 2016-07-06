"use strict";

const Grandpa = require('../src/grandpa.js');

const SmartGrandpa = function () {
	Grandpa.call(this);
	this.bac = 1;
	this.anger = 25;
	this.viciousness = 40;
	this.patience = 70;
};

module.exports = SmartGrandpa;

