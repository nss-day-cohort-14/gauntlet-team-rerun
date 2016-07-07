'use strict';

const Person = require('../src/person');

const DaughterInLaw = function() {
	Person.call(this);
	this.sensitivity = 10;
	this.viciousness = 80;
	this.patience = 40;
};

module.exports = DaughterInLaw;