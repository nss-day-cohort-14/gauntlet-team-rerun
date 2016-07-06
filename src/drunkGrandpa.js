"use strict";

const Grandpa = require('../src/grandpa.js');

function DrunkGrandpa () {
	Grandpa.call(this);
	this.bac = 2;
	this.anger = 30;
	this.viciousness = 15;
	this.patience = 5;
}

module.exports = DrunkGrandpa;

