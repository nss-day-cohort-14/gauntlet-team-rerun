'use strict';

const Person = require('../src/person');

const Son = function() {
	Person.call(this);
	this.sensitivity = 40;
	this.viciousness = 40;
	this.patience = 50;
};

module.exports = Son;