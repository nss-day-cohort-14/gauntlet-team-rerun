"use strict";

const Person = require('../src/person');

const Grandpa = function() {
	Person.call(this);
	this.bac = 0;
	this.anger = 0;
	this.hearingAidBatteryLevel = 0;
};

module.exports = Grandpa;