'use strict';

const Person = require('../src/person');

const Daughter = function() {
	Person.call(this);
	this.sensitivity = 50;
	this.viciousness = 70;
	this.patience = 70;
}


module.exports = Daughter;