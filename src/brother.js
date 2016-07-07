'use strict';

const Person = require('../src/person');

const Brother = function() {
	Person.call(this);
	this.sensitivity = 15;
	this.viciousness = 60;
	this.patience = 10;
};

module.exports = Brother;