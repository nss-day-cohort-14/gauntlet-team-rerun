"use strict";

const Grandpa = require('../src/grandpa.js');

function MeanGrandpa () {
	Grandpa.call(this);
	this.bac = 1.2;
	this.anger = 50;
	this.viciousness = 50;
	this.patience = 40;
}

module.exports = MeanGrandpa;
