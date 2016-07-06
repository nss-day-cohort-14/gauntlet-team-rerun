'use strict';

const Person = require('../src/person');

const Daughter = function() {
	Person.call(this);
	this.sensitivity = 50;
	this.viciousness = 40;
	this.patience = 50;
};

module.exports = Daughter;